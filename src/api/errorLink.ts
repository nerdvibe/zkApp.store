import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  fromPromise,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { store } from "../store/store";
import { REFRESH } from "./queries";

let isRefreshing = false;
let pendingRequests: Function[] = [];

const setIsRefreshing = (value: boolean) => {
  isRefreshing = value;
};

const addPendingRequest = (pendingRequest: Function) => {
  pendingRequests.push(pendingRequest);
};

const renewTokenApiClient = new ApolloClient({
  link: createHttpLink({ uri: process.env.REACT_APP_GQL_SERVER }),
  credentials: "include",
  cache: new InMemoryCache(),
});

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

const getNewToken = async () => {
  // const oldRenewalToken = localStorage.getItem("renewalToken");
  const oldRenewalToken = store.getState().session.refreshToken;

  const {
    data: { accessToken, refreshToken },
  } = await renewTokenApiClient.mutate({
    mutation: REFRESH,
    variables: { input: { renewalToken: oldRenewalToken } },
  })!;
  console.log(
    "🚀 ~ file: errorLink.ts:39 ~ getNewToken ~ accessToken:",
    accessToken
  );
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (!isRefreshing) {
    setIsRefreshing(true);

    return fromPromise(
      getNewToken().catch(() => {
        resolvePendingRequests();
        setIsRefreshing(false);

        localStorage.clear();

        // // Cache shared with main client instance
        // renewTokenApiClient!.writeQuery({
        //   query: GET_CURRENT_USER,
        //   data: { currentUser: null },
        // });

        return forward(operation);
      })
    ).flatMap(() => {
      resolvePendingRequests();
      setIsRefreshing(false);

      return forward(operation);
    });
  } else {
    return fromPromise(
      new Promise((resolve) => {
        addPendingRequest(() => resolve());
      })
    ).flatMap(() => {
      return forward(operation);
    });
  }
});

export default errorLink;
