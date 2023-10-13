import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink, createHttpLink } from "apollo-link-http";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { store } from "../store/store";
import { REFRESH } from "./queries";
import { isTokenExpired, parseJwt } from "../util/jwt";
import { login } from "../store/session";

const renewTokenApiClient = new ApolloClient({
  link: createHttpLink({ uri: process.env.REACT_APP_GQL_SERVER }) as any,
  credentials: "include",
  cache: new InMemoryCache(),
});

const authLink = new ApolloLink((operation, forward) => {
  let token = store.getState().session.authToken;
  const decodedToken = parseJwt(token!);
  if (isTokenExpired(decodedToken)) {
    renewToken();
    token = store.getState().session.authToken;
  }
  operation.setContext(({ headers }: { headers: Headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
  new HttpLink({
    uri: process.env.REACT_APP_GQL_SERVER,
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
  // const {
  //   data: { accessToken, refreshToken },
  // } =

  // store.dispatch(
  //   login({
  //     token: "XYZ",
  //   })
  // );
  // const token = store.getState().session.authToken;
  // console.log("🚀 ~ file: api.ts:81 ~ .finally ~ token:", token);
  await renewTokenApiClient
    .mutate({
      mutation: REFRESH,
      variables: { input: { renewalToken: oldRefreshToken } },
    })!
    .then(({ data }) => {
      const { accessToken, refreshToken } = data;
      store.dispatch(
        login({
          token: accessToken,
        })
      );
      return accessToken;
    });
};

export const apolloClient = new ApolloClient<NormalizedCacheObject>({
  link: httpLink as any,
  cache: new InMemoryCache(),
});
