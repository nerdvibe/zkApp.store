import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateZkApp = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  currentVersion: Scalars['String']['input'];
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  error?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkSlug: Scalars['Boolean']['output'];
  createZkApp: ZkApp;
  deleteZkApp: Scalars['Boolean']['output'];
  login?: Maybe<Token>;
  logout?: Maybe<Message>;
  refreshToken?: Maybe<Token>;
  requestResetPassword?: Maybe<Message>;
  resendVerifyEmail?: Maybe<Message>;
  signup?: Maybe<Token>;
  updatePassword?: Maybe<Message>;
  updateResetPassword?: Maybe<Message>;
  updateZkApp: ZkApp;
  verifyEmail?: Maybe<Message>;
};


export type MutationCheckSlugArgs = {
  slug: Scalars['String']['input'];
};


export type MutationCreateZkAppArgs = {
  zkApp: CreateZkApp;
};


export type MutationDeleteZkAppArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationResendVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  user: Signup;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationUpdateResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};


export type MutationUpdateZkAppArgs = {
  zkApp: UpdateZkApp;
};


export type MutationVerifyEmailArgs = {
  emailVerificationToken: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  publicInfo?: Maybe<Scalars['String']['output']>;
  userDetails?: Maybe<User>;
  zkApp?: Maybe<ZkApp>;
};


export type QueryZkAppArgs = {
  slug: Scalars['String']['input'];
};

export type Signup = {
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  isDeveloper: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  xUsername?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type ZkApp = {
  __typename?: 'ZkApp';
  bannerImage?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  currentVersion: Scalars['String']['output'];
  discordUrl?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  reviewCount?: Maybe<Scalars['Float']['output']>;
  reviewScore?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type UpdateZkApp = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  currentVersion?: InputMaybe<Scalars['String']['input']>;
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = { __typename?: 'Query', userDetails?: { __typename?: 'User', email: string, id: string } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  isDeveloper: Scalars['Boolean']['input'];
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  xUsername?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'Token', accessToken: string, refreshToken: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Token', accessToken: string, refreshToken: string } | null };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'Token', accessToken: string, refreshToken: string } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'Message', message: string } | null };

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword?: { __typename?: 'Message', message: string } | null };

export type UpdateResetPasswordMutationVariables = Exact<{
  resetToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type UpdateResetPasswordMutation = { __typename?: 'Mutation', updateResetPassword?: { __typename?: 'Message', message: string } | null };

export type VerifyEmailMutationVariables = Exact<{
  emailVerificationToken: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail?: { __typename?: 'Message', message: string } | null };

export type UpdatePasswordMutationVariables = Exact<{
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword?: { __typename?: 'Message', message: string } | null };

export type UserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDataQuery = { __typename?: 'Query', userDetails?: { __typename?: 'User', id: string, email: string, username: string } | null };

export type CreateZkAppMutationVariables = Exact<{
  zkApp: CreateZkApp;
}>;


export type CreateZkAppMutation = { __typename?: 'Mutation', createZkApp: { __typename?: 'ZkApp', name: string } };

export type AppDataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppDataQuery = { __typename?: 'Query', zkApp?: { __typename?: 'ZkApp', name: string, owner: string, id: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, category?: string | null, icon?: string | null, bannerImage?: string | null, createdAt?: string | null, updatedAt?: string | null } | null };

export type UpdateZkAppMutationVariables = Exact<{
  zkApp: UpdateZkApp;
}>;


export type UpdateZkAppMutation = { __typename?: 'Mutation', updateZkApp: { __typename?: 'ZkApp', slug: string, body?: string | null, currentVersion: string, name: string, subtitle?: string | null, category?: string | null, url: string } };

export type DeleteAppMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAppMutation = { __typename?: 'Mutation', deleteZkApp: boolean };


export const UserDetailsDocument = gql`
    query userDetails {
  userDetails {
    email
    id
  }
}
    `;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDetailsQuery(baseOptions?: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export function useUserDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsSuspenseQueryHookResult = ReturnType<typeof useUserDetailsSuspenseQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $password: String!, $username: String!, $isDeveloper: Boolean!, $discordUrl: String, $githubUsername: String, $xUsername: String) {
  signup(
    user: {email: $email, password: $password, username: $username, isDeveloper: $isDeveloper, discordUrl: $discordUrl, githubUsername: $githubUsername, xUsername: $xUsername}
  ) {
    accessToken
    refreshToken
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      isDeveloper: // value for 'isDeveloper'
 *      discordUrl: // value for 'discordUrl'
 *      githubUsername: // value for 'githubUsername'
 *      xUsername: // value for 'xUsername'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation requestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    message
  }
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, options);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const UpdateResetPasswordDocument = gql`
    mutation updateResetPassword($resetToken: String!, $newPassword: String!) {
  updateResetPassword(resetToken: $resetToken, newPassword: $newPassword) {
    message
  }
}
    `;
export type UpdateResetPasswordMutationFn = Apollo.MutationFunction<UpdateResetPasswordMutation, UpdateResetPasswordMutationVariables>;

/**
 * __useUpdateResetPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResetPasswordMutation, { data, loading, error }] = useUpdateResetPasswordMutation({
 *   variables: {
 *      resetToken: // value for 'resetToken'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdateResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResetPasswordMutation, UpdateResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResetPasswordMutation, UpdateResetPasswordMutationVariables>(UpdateResetPasswordDocument, options);
      }
export type UpdateResetPasswordMutationHookResult = ReturnType<typeof useUpdateResetPasswordMutation>;
export type UpdateResetPasswordMutationResult = Apollo.MutationResult<UpdateResetPasswordMutation>;
export type UpdateResetPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateResetPasswordMutation, UpdateResetPasswordMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation verifyEmail($emailVerificationToken: String!) {
  verifyEmail(emailVerificationToken: $emailVerificationToken) {
    message
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      emailVerificationToken: // value for 'emailVerificationToken'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, options);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation updatePassword($newPassword: String!, $oldPassword: String!) {
  updatePassword(newPassword: $newPassword, oldPassword: $oldPassword) {
    message
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      oldPassword: // value for 'oldPassword'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UserDataDocument = gql`
    query userData {
  userDetails {
    id
    email
    username
  }
}
    `;

/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDataQuery(baseOptions?: Apollo.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, options);
      }
export function useUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, options);
        }
export function useUserDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, options);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataSuspenseQueryHookResult = ReturnType<typeof useUserDataSuspenseQuery>;
export type UserDataQueryResult = Apollo.QueryResult<UserDataQuery, UserDataQueryVariables>;
export const CreateZkAppDocument = gql`
    mutation createZkApp($zkApp: CreateZkApp!) {
  createZkApp(zkApp: $zkApp) {
    name
  }
}
    `;
export type CreateZkAppMutationFn = Apollo.MutationFunction<CreateZkAppMutation, CreateZkAppMutationVariables>;

/**
 * __useCreateZkAppMutation__
 *
 * To run a mutation, you first call `useCreateZkAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateZkAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createZkAppMutation, { data, loading, error }] = useCreateZkAppMutation({
 *   variables: {
 *      zkApp: // value for 'zkApp'
 *   },
 * });
 */
export function useCreateZkAppMutation(baseOptions?: Apollo.MutationHookOptions<CreateZkAppMutation, CreateZkAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateZkAppMutation, CreateZkAppMutationVariables>(CreateZkAppDocument, options);
      }
export type CreateZkAppMutationHookResult = ReturnType<typeof useCreateZkAppMutation>;
export type CreateZkAppMutationResult = Apollo.MutationResult<CreateZkAppMutation>;
export type CreateZkAppMutationOptions = Apollo.BaseMutationOptions<CreateZkAppMutation, CreateZkAppMutationVariables>;
export const AppDataDocument = gql`
    query appData($slug: String!) {
  zkApp(slug: $slug) {
    name
    owner
    id
    subtitle
    body
    reviewScore
    reviewCount
    currentVersion
    url
    discordUrl
    githubUrl
    category
    icon
    bannerImage
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useAppDataQuery__
 *
 * To run a query within a React component, call `useAppDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAppDataQuery(baseOptions: Apollo.QueryHookOptions<AppDataQuery, AppDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppDataQuery, AppDataQueryVariables>(AppDataDocument, options);
      }
export function useAppDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppDataQuery, AppDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppDataQuery, AppDataQueryVariables>(AppDataDocument, options);
        }
export function useAppDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AppDataQuery, AppDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AppDataQuery, AppDataQueryVariables>(AppDataDocument, options);
        }
export type AppDataQueryHookResult = ReturnType<typeof useAppDataQuery>;
export type AppDataLazyQueryHookResult = ReturnType<typeof useAppDataLazyQuery>;
export type AppDataSuspenseQueryHookResult = ReturnType<typeof useAppDataSuspenseQuery>;
export type AppDataQueryResult = Apollo.QueryResult<AppDataQuery, AppDataQueryVariables>;
export const UpdateZkAppDocument = gql`
    mutation updateZkApp($zkApp: updateZkApp!) {
  updateZkApp(zkApp: $zkApp) {
    slug
    body
    currentVersion
    name
    subtitle
    category
    url
  }
}
    `;
export type UpdateZkAppMutationFn = Apollo.MutationFunction<UpdateZkAppMutation, UpdateZkAppMutationVariables>;

/**
 * __useUpdateZkAppMutation__
 *
 * To run a mutation, you first call `useUpdateZkAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateZkAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateZkAppMutation, { data, loading, error }] = useUpdateZkAppMutation({
 *   variables: {
 *      zkApp: // value for 'zkApp'
 *   },
 * });
 */
export function useUpdateZkAppMutation(baseOptions?: Apollo.MutationHookOptions<UpdateZkAppMutation, UpdateZkAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateZkAppMutation, UpdateZkAppMutationVariables>(UpdateZkAppDocument, options);
      }
export type UpdateZkAppMutationHookResult = ReturnType<typeof useUpdateZkAppMutation>;
export type UpdateZkAppMutationResult = Apollo.MutationResult<UpdateZkAppMutation>;
export type UpdateZkAppMutationOptions = Apollo.BaseMutationOptions<UpdateZkAppMutation, UpdateZkAppMutationVariables>;
export const DeleteAppDocument = gql`
    mutation deleteApp($id: String!) {
  deleteZkApp(id: $id)
}
    `;
export type DeleteAppMutationFn = Apollo.MutationFunction<DeleteAppMutation, DeleteAppMutationVariables>;

/**
 * __useDeleteAppMutation__
 *
 * To run a mutation, you first call `useDeleteAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppMutation, { data, loading, error }] = useDeleteAppMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAppMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAppMutation, DeleteAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAppMutation, DeleteAppMutationVariables>(DeleteAppDocument, options);
      }
export type DeleteAppMutationHookResult = ReturnType<typeof useDeleteAppMutation>;
export type DeleteAppMutationResult = Apollo.MutationResult<DeleteAppMutation>;
export type DeleteAppMutationOptions = Apollo.BaseMutationOptions<DeleteAppMutation, DeleteAppMutationVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateZkApp: CreateZkApp;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Signup: Signup;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  ZkApp: ResolverTypeWrapper<ZkApp>;
  updateZkApp: UpdateZkApp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateZkApp: CreateZkApp;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  Mutation: {};
  Query: {};
  Signup: Signup;
  String: Scalars['String']['output'];
  Token: Token;
  User: User;
  ZkApp: ZkApp;
  updateZkApp: UpdateZkApp;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  error?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  checkSlug?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCheckSlugArgs, 'slug'>>;
  createZkApp?: Resolver<ResolversTypes['ZkApp'], ParentType, ContextType, RequireFields<MutationCreateZkAppArgs, 'zkApp'>>;
  deleteZkApp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteZkAppArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationRefreshTokenArgs, 'refreshToken'>>;
  requestResetPassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationRequestResetPasswordArgs, 'email'>>;
  resendVerifyEmail?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationResendVerifyEmailArgs, 'email'>>;
  signup?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'user'>>;
  updatePassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'newPassword' | 'oldPassword'>>;
  updateResetPassword?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateResetPasswordArgs, 'newPassword' | 'resetToken'>>;
  updateZkApp?: Resolver<ResolversTypes['ZkApp'], ParentType, ContextType, RequireFields<MutationUpdateZkAppArgs, 'zkApp'>>;
  verifyEmail?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'emailVerificationToken'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  publicInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userDetails?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  zkApp?: Resolver<Maybe<ResolversTypes['ZkApp']>, ParentType, ContextType, RequireFields<QueryZkAppArgs, 'slug'>>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZkApp'] = ResolversParentTypes['ZkApp']> = {
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ZkApp?: ZkAppResolvers<ContextType>;
};

