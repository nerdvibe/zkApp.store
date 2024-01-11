import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
// import { HttpLink, createHttpLink } from "apollo-link-http";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { store } from "../store/store";
import { REFRESH } from "./queries";
import { isTokenExpired, parseJwt } from "../util/jwt";
import { login } from "../store/session";
import { createUploadLink } from "apollo-upload-client";

const renewTokenApiClient = (oldToken: string) =>
  new ApolloClient({
    link: createUploadLink({
      uri: import.meta.env.VITE_REACT_APP_GQL_SERVER,
      headers: {
        authorization: oldToken ? `Bearer ${oldToken}` : "",
      },
    }) as any,
    credentials: "include",
    cache: new InMemoryCache(),
  });

const authLink = new ApolloLink((operation, forward) => {
  let token = store.getState().session.authToken;
  if (token) {
    const decodedToken = parseJwt(token!);
    if (isTokenExpired(decodedToken)) {
      renewToken();
      token = store.getState().session.authToken;
    }
  }
  operation.setContext(({ headers }: { headers: Headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : undefined,
    },
  }));
  return forward(operation);
});

const httpLink = ApolloLink.from([
  authLink,
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  new createUploadLink({
    uri: import.meta.env.VITE_REACT_APP_GQL_SERVER,
    credentials: "same-origin",
    fetchOptions: {
      reconnect: true,
      connectionParams: async () => {
        return {
          headers: {
            "x-hasura-role": "anon",
          },
        };
      },
    },
  }),
]);

const renewToken = async () => {
  const oldRefreshToken = store.getState().session.refreshToken;
  const oldToken = store.getState().session.authToken!;
  await renewTokenApiClient(oldToken)
    .mutate({
      mutation: REFRESH,
      variables: { refreshToken: oldRefreshToken },
    })!
    .then(({ data }) => {
      const { refreshToken } = data;
      store.dispatch(
        login({
          authToken: refreshToken.accessToken,
          refreshToken: refreshToken.refreshToken,
        })
      );
      return refreshToken.accessToken;
    });
};

export const apolloClient = new ApolloClient<NormalizedCacheObject>({
  link: httpLink as any,
  cache: new InMemoryCache(),
});
