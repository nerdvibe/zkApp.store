import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  File: { input: any; output: any; }
};

export type CreateZkApp = {
  bannerImage?: InputMaybe<Scalars['File']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  currentVersion: Scalars['String']['input'];
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['File']['input']>;
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
  updateUser?: Maybe<SelfUser>;
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


export type MutationUpdateUserArgs = {
  userEdit?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateZkAppArgs = {
  zkApp: UpdateZkApp;
};


export type MutationVerifyEmailArgs = {
  emailVerificationToken: Scalars['String']['input'];
};

export type News = {
  __typename?: 'News';
  banner: Scalars['String']['output'];
  body: Scalars['String']['output'];
  ctaLink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  textPreview: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getLastNews?: Maybe<Array<Maybe<News>>>;
  getNews?: Maybe<News>;
  publicInfo?: Maybe<Scalars['String']['output']>;
  searchZkAppByName?: Maybe<Array<Maybe<ZkApp>>>;
  selfUser?: Maybe<SelfUser>;
  user?: Maybe<UserWithZkApp>;
  userSearch?: Maybe<Array<Maybe<User>>>;
  usersSortedByFollowers?: Maybe<Array<Maybe<User>>>;
  zkApp?: Maybe<ZkApp>;
  zkAppCategories?: Maybe<Array<Maybe<ZkAppCategory>>>;
  zkAppCategoriesSearch?: Maybe<Array<Maybe<ZkAppCategory>>>;
  zkApps?: Maybe<Array<Maybe<ZkApp>>>;
  zkAppsByCategory?: Maybe<Array<Maybe<ZkApp>>>;
  zkAppsByUser?: Maybe<Array<Maybe<ZkApp>>>;
};


export type QueryGetNewsArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySearchZkAppByNameArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserSearchArgs = {
  username: Scalars['String']['input'];
};


export type QueryZkAppArgs = {
  slug: Scalars['String']['input'];
};


export type QueryZkAppCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryZkAppCategoriesSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};


export type QueryZkAppsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortByFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  sortByTrending?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryZkAppsByCategoryArgs = {
  categorySlug: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryZkAppsByUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type SelfUser = {
  __typename?: 'SelfUser';
  bannerPicture?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  followerCount?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
};

export type Signup = {
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  isDeveloper: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  profilePicture?: InputMaybe<Scalars['File']['input']>;
  username: Scalars['String']['input'];
  xUsername?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UpdateUserInput = {
  bannerPicture?: InputMaybe<Scalars['File']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['File']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  xUsername?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bannerPicture?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
};

export type UserWithZkApp = {
  __typename?: 'UserWithZkApp';
  bannerPicture?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
  zkApps?: Maybe<Array<Maybe<ZkAppUser>>>;
};

export type ZkApp = {
  __typename?: 'ZkApp';
  bannerImage?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ZkAppCategoryZkApp>;
  categorySlug?: Maybe<Scalars['String']['output']>;
  currentVersion: Scalars['String']['output'];
  discordUrl?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Int']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  ownerUsername?: Maybe<Scalars['String']['output']>;
  reviewCount?: Maybe<Scalars['Float']['output']>;
  reviewScore?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  trending?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

export type ZkAppCategory = {
  __typename?: 'ZkAppCategory';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  zkAppCount?: Maybe<Scalars['Int']['output']>;
};

export type ZkAppCategoryZkApp = {
  __typename?: 'ZkAppCategoryZkApp';
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  zkAppCount?: Maybe<Scalars['String']['output']>;
};

export type ZkAppUser = {
  __typename?: 'ZkAppUser';
  bannerImage?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  categorySlug?: Maybe<Scalars['String']['output']>;
  currentVersion: Scalars['String']['output'];
  discordUrl?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  reviewCount?: Maybe<Scalars['Float']['output']>;
  reviewScore?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type UpdateZkApp = {
  bannerImage?: InputMaybe<Scalars['File']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  currentVersion?: InputMaybe<Scalars['String']['input']>;
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['File']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type HomepageCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageCategoriesQuery = { __typename?: 'Query', zkAppCategories?: Array<{ __typename?: 'ZkAppCategory', name: string, slug: string, zkAppCount?: number | null } | null> | null };

export type ZkAppsByCategoryQueryVariables = Exact<{
  categorySlug: Scalars['String']['input'];
}>;


export type ZkAppsByCategoryQuery = { __typename?: 'Query', zkAppsByCategory?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, icon?: string | null, currentVersion: string, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null } | null } | null> | null };

export type SearchCategoriesQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type SearchCategoriesQuery = { __typename?: 'Query', zkAppCategoriesSearch?: Array<{ __typename?: 'ZkAppCategory', name: string, slug: string, zkAppCount?: number | null } | null> | null };

export type AllZkAppCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllZkAppCategoriesQuery = { __typename?: 'Query', zkAppCategories?: Array<{ __typename?: 'ZkAppCategory', name: string, slug: string } | null> | null };

export type LastNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastNewsQuery = { __typename?: 'Query', getLastNews?: Array<{ __typename?: 'News', title: string, body: string, banner: string, textPreview: string, slug: string, ctaLink?: string | null } | null> | null };

export type GetNewsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetNewsQuery = { __typename?: 'Query', getNews?: { __typename?: 'News', title: string, body: string, banner: string, textPreview: string, slug: string, ctaLink?: string | null } | null };

export type SearchUserQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type SearchUserQuery = { __typename?: 'Query', userSearch?: Array<{ __typename?: 'User', username: string, followerCount?: number | null, profilePicture?: string | null, id?: string | null } | null> | null };

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = { __typename?: 'Query', selfUser?: { __typename?: 'SelfUser', id: string, email: string, username: string, emailVerified: boolean, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, githubUrl?: string | null, bio?: string | null, profilePicture?: string | null, bannerPicture?: string | null } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  isDeveloper: Scalars['Boolean']['input'];
  discordUrl?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  xUsername?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['File']['input']>;
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


export type UserDataQuery = { __typename?: 'Query', selfUser?: { __typename?: 'SelfUser', id: string, email: string, username: string, emailVerified: boolean, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, bio?: string | null, githubUrl?: string | null, profilePicture?: string | null, bannerPicture?: string | null } | null };

export type UpdateUserDetailsMutationVariables = Exact<{
  userEdit?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserDetailsMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'SelfUser', id: string, email: string, username: string, emailVerified: boolean, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, githubUrl?: string | null, profilePicture?: string | null, bannerPicture?: string | null } | null };

export type UserImageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserImageQuery = { __typename?: 'Query', user?: { __typename?: 'UserWithZkApp', profilePicture?: string | null } | null };

export type UploadUserImageMutationVariables = Exact<{
  file?: InputMaybe<Scalars['File']['input']>;
}>;


export type UploadUserImageMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'SelfUser', id: string, email: string, username: string, emailVerified: boolean, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, githubUrl?: string | null, bio?: string | null, profilePicture?: string | null, bannerPicture?: string | null } | null };

export type UploadUserBannerMutationVariables = Exact<{
  file?: InputMaybe<Scalars['File']['input']>;
}>;


export type UploadUserBannerMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'SelfUser', id: string, email: string, username: string, emailVerified: boolean, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, githubUrl?: string | null, bio?: string | null, profilePicture?: string | null, bannerPicture?: string | null } | null };

export type CreateZkAppMutationVariables = Exact<{
  zkApp: CreateZkApp;
}>;


export type CreateZkAppMutation = { __typename?: 'Mutation', createZkApp: { __typename?: 'ZkApp', name: string, slug: string } };

export type AppDataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppDataQuery = { __typename?: 'Query', zkApp?: { __typename?: 'ZkApp', slug: string, name: string, owner: string, ownerUsername?: string | null, id: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, icon?: string | null, bannerImage?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null, slug?: string | null } | null } | null };

export type UpdateZkAppMutationVariables = Exact<{
  zkApp: UpdateZkApp;
}>;


export type UpdateZkAppMutation = { __typename?: 'Mutation', updateZkApp: { __typename?: 'ZkApp', slug: string, body?: string | null, currentVersion: string, name: string, subtitle?: string | null, url: string, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null } | null } };

export type DeleteAppMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAppMutation = { __typename?: 'Mutation', deleteZkApp: boolean };

export type ZkAppsByUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ZkAppsByUserQuery = { __typename?: 'Query', zkAppsByUser?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, icon?: string | null, bannerImage?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null } | null } | null> | null };

export type UserWithZkAppsQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserWithZkAppsQuery = { __typename?: 'Query', user?: { __typename?: 'UserWithZkApp', username: string, followerCount?: number | null, xUsername?: string | null, discordUrl?: string | null, githubUrl?: string | null, profilePicture?: string | null, bannerPicture?: string | null, id?: string | null, bio?: string | null, zkApps?: Array<{ __typename?: 'ZkAppUser', id?: string | null, name: string, slug: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, icon?: string | null, bannerImage?: string | null } | null> | null } | null };

export type TrendingAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingAppsQuery = { __typename?: 'Query', zkApps?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, owner: string, ownerUsername?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, icon?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null } | null } | null> | null };

export type SearchZkAppQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchZkAppQuery = { __typename?: 'Query', searchZkAppByName?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, icon?: string | null } | null> | null };

export type FeaturedZkAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedZkAppsQuery = { __typename?: 'Query', zkApps?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, owner: string, ownerUsername?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, icon?: string | null, featured?: number | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null, slug?: string | null } | null } | null> | null };

export type CheckSlugMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CheckSlugMutation = { __typename?: 'Mutation', checkSlug: boolean };

export type ZkAppsBySlugQueryVariables = Exact<{
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ZkAppsBySlugQuery = { __typename?: 'Query', zkApps?: Array<{ __typename?: 'ZkApp', id: string, name: string, slug: string, subtitle?: string | null, ownerUsername?: string | null, currentVersion: string, icon?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null, slug?: string | null } | null } | null> | null };

export type UpdateZkAppIconMutationVariables = Exact<{
  file?: InputMaybe<Scalars['File']['input']>;
  id: Scalars['String']['input'];
}>;


export type UpdateZkAppIconMutation = { __typename?: 'Mutation', updateZkApp: { __typename?: 'ZkApp', slug: string, name: string, owner: string, ownerUsername?: string | null, id: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, icon?: string | null, bannerImage?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null, slug?: string | null } | null } };

export type UpdateZkAppBannerMutationVariables = Exact<{
  file?: InputMaybe<Scalars['File']['input']>;
  id: Scalars['String']['input'];
}>;


export type UpdateZkAppBannerMutation = { __typename?: 'Mutation', updateZkApp: { __typename?: 'ZkApp', slug: string, name: string, owner: string, ownerUsername?: string | null, id: string, subtitle?: string | null, body?: string | null, reviewScore?: number | null, reviewCount?: number | null, currentVersion: string, url: string, discordUrl?: string | null, githubUrl?: string | null, icon?: string | null, bannerImage?: string | null, category?: { __typename?: 'ZkAppCategoryZkApp', name?: string | null, slug?: string | null } | null } };


export const HomepageCategoriesDocument = gql`
    query homepageCategories {
  zkAppCategories(limit: 5) {
    name
    slug
    zkAppCount
  }
}
    `;

/**
 * __useHomepageCategoriesQuery__
 *
 * To run a query within a React component, call `useHomepageCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>(HomepageCategoriesDocument, options);
      }
export function useHomepageCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>(HomepageCategoriesDocument, options);
        }
export function useHomepageCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>(HomepageCategoriesDocument, options);
        }
export type HomepageCategoriesQueryHookResult = ReturnType<typeof useHomepageCategoriesQuery>;
export type HomepageCategoriesLazyQueryHookResult = ReturnType<typeof useHomepageCategoriesLazyQuery>;
export type HomepageCategoriesSuspenseQueryHookResult = ReturnType<typeof useHomepageCategoriesSuspenseQuery>;
export type HomepageCategoriesQueryResult = Apollo.QueryResult<HomepageCategoriesQuery, HomepageCategoriesQueryVariables>;
export const ZkAppsByCategoryDocument = gql`
    query zkAppsByCategory($categorySlug: String!) {
  zkAppsByCategory(categorySlug: $categorySlug) {
    id
    name
    slug
    subtitle
    icon
    currentVersion
    category {
      name
    }
  }
}
    `;

/**
 * __useZkAppsByCategoryQuery__
 *
 * To run a query within a React component, call `useZkAppsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useZkAppsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZkAppsByCategoryQuery({
 *   variables: {
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useZkAppsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>(ZkAppsByCategoryDocument, options);
      }
export function useZkAppsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>(ZkAppsByCategoryDocument, options);
        }
export function useZkAppsByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>(ZkAppsByCategoryDocument, options);
        }
export type ZkAppsByCategoryQueryHookResult = ReturnType<typeof useZkAppsByCategoryQuery>;
export type ZkAppsByCategoryLazyQueryHookResult = ReturnType<typeof useZkAppsByCategoryLazyQuery>;
export type ZkAppsByCategorySuspenseQueryHookResult = ReturnType<typeof useZkAppsByCategorySuspenseQuery>;
export type ZkAppsByCategoryQueryResult = Apollo.QueryResult<ZkAppsByCategoryQuery, ZkAppsByCategoryQueryVariables>;
export const SearchCategoriesDocument = gql`
    query searchCategories($text: String!) {
  zkAppCategoriesSearch(text: $text) {
    name
    slug
    zkAppCount
  }
}
    `;

/**
 * __useSearchCategoriesQuery__
 *
 * To run a query within a React component, call `useSearchCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCategoriesQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSearchCategoriesQuery(baseOptions: Apollo.QueryHookOptions<SearchCategoriesQuery, SearchCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCategoriesQuery, SearchCategoriesQueryVariables>(SearchCategoriesDocument, options);
      }
export function useSearchCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCategoriesQuery, SearchCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCategoriesQuery, SearchCategoriesQueryVariables>(SearchCategoriesDocument, options);
        }
export function useSearchCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchCategoriesQuery, SearchCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchCategoriesQuery, SearchCategoriesQueryVariables>(SearchCategoriesDocument, options);
        }
export type SearchCategoriesQueryHookResult = ReturnType<typeof useSearchCategoriesQuery>;
export type SearchCategoriesLazyQueryHookResult = ReturnType<typeof useSearchCategoriesLazyQuery>;
export type SearchCategoriesSuspenseQueryHookResult = ReturnType<typeof useSearchCategoriesSuspenseQuery>;
export type SearchCategoriesQueryResult = Apollo.QueryResult<SearchCategoriesQuery, SearchCategoriesQueryVariables>;
export const AllZkAppCategoriesDocument = gql`
    query allZkAppCategories {
  zkAppCategories {
    name
    slug
  }
}
    `;

/**
 * __useAllZkAppCategoriesQuery__
 *
 * To run a query within a React component, call `useAllZkAppCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllZkAppCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllZkAppCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllZkAppCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>(AllZkAppCategoriesDocument, options);
      }
export function useAllZkAppCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>(AllZkAppCategoriesDocument, options);
        }
export function useAllZkAppCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>(AllZkAppCategoriesDocument, options);
        }
export type AllZkAppCategoriesQueryHookResult = ReturnType<typeof useAllZkAppCategoriesQuery>;
export type AllZkAppCategoriesLazyQueryHookResult = ReturnType<typeof useAllZkAppCategoriesLazyQuery>;
export type AllZkAppCategoriesSuspenseQueryHookResult = ReturnType<typeof useAllZkAppCategoriesSuspenseQuery>;
export type AllZkAppCategoriesQueryResult = Apollo.QueryResult<AllZkAppCategoriesQuery, AllZkAppCategoriesQueryVariables>;
export const LastNewsDocument = gql`
    query lastNews {
  getLastNews {
    title
    body
    banner
    textPreview
    slug
    ctaLink
  }
}
    `;

/**
 * __useLastNewsQuery__
 *
 * To run a query within a React component, call `useLastNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLastNewsQuery(baseOptions?: Apollo.QueryHookOptions<LastNewsQuery, LastNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastNewsQuery, LastNewsQueryVariables>(LastNewsDocument, options);
      }
export function useLastNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastNewsQuery, LastNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastNewsQuery, LastNewsQueryVariables>(LastNewsDocument, options);
        }
export function useLastNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LastNewsQuery, LastNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LastNewsQuery, LastNewsQueryVariables>(LastNewsDocument, options);
        }
export type LastNewsQueryHookResult = ReturnType<typeof useLastNewsQuery>;
export type LastNewsLazyQueryHookResult = ReturnType<typeof useLastNewsLazyQuery>;
export type LastNewsSuspenseQueryHookResult = ReturnType<typeof useLastNewsSuspenseQuery>;
export type LastNewsQueryResult = Apollo.QueryResult<LastNewsQuery, LastNewsQueryVariables>;
export const GetNewsDocument = gql`
    query getNews($slug: String!) {
  getNews(slug: $slug) {
    title
    body
    banner
    textPreview
    slug
    ctaLink
  }
}
    `;

/**
 * __useGetNewsQuery__
 *
 * To run a query within a React component, call `useGetNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetNewsQuery(baseOptions: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
      }
export function useGetNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export function useGetNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export type GetNewsQueryHookResult = ReturnType<typeof useGetNewsQuery>;
export type GetNewsLazyQueryHookResult = ReturnType<typeof useGetNewsLazyQuery>;
export type GetNewsSuspenseQueryHookResult = ReturnType<typeof useGetNewsSuspenseQuery>;
export type GetNewsQueryResult = Apollo.QueryResult<GetNewsQuery, GetNewsQueryVariables>;
export const SearchUserDocument = gql`
    query searchUser($username: String!) {
  userSearch(username: $username) {
    username
    followerCount
    profilePicture
    id
  }
}
    `;

/**
 * __useSearchUserQuery__
 *
 * To run a query within a React component, call `useSearchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSearchUserQuery(baseOptions: Apollo.QueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
      }
export function useSearchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
        }
export function useSearchUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchUserQuery, SearchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchUserQuery, SearchUserQueryVariables>(SearchUserDocument, options);
        }
export type SearchUserQueryHookResult = ReturnType<typeof useSearchUserQuery>;
export type SearchUserLazyQueryHookResult = ReturnType<typeof useSearchUserLazyQuery>;
export type SearchUserSuspenseQueryHookResult = ReturnType<typeof useSearchUserSuspenseQuery>;
export type SearchUserQueryResult = Apollo.QueryResult<SearchUserQuery, SearchUserQueryVariables>;
export const UserDetailsDocument = gql`
    query userDetails {
  selfUser {
    id
    email
    username
    emailVerified
    followerCount
    xUsername
    discordUrl
    githubUrl
    bio
    profilePicture
    bannerPicture
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
    mutation signup($email: String!, $password: String!, $username: String!, $isDeveloper: Boolean!, $discordUrl: String, $githubUsername: String, $xUsername: String, $file: File) {
  signup(
    user: {email: $email, password: $password, username: $username, isDeveloper: $isDeveloper, discordUrl: $discordUrl, githubUsername: $githubUsername, xUsername: $xUsername, profilePicture: $file}
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
 *      file: // value for 'file'
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
  selfUser {
    id
    email
    username
    emailVerified
    followerCount
    xUsername
    discordUrl
    bio
    githubUrl
    profilePicture
    bannerPicture
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
export const UpdateUserDetailsDocument = gql`
    mutation updateUserDetails($userEdit: UpdateUserInput) {
  updateUser(userEdit: $userEdit) {
    id
    email
    username
    emailVerified
    followerCount
    xUsername
    discordUrl
    githubUrl
    profilePicture
    bannerPicture
  }
}
    `;
export type UpdateUserDetailsMutationFn = Apollo.MutationFunction<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;

/**
 * __useUpdateUserDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserDetailsMutation, { data, loading, error }] = useUpdateUserDetailsMutation({
 *   variables: {
 *      userEdit: // value for 'userEdit'
 *   },
 * });
 */
export function useUpdateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>(UpdateUserDetailsDocument, options);
      }
export type UpdateUserDetailsMutationHookResult = ReturnType<typeof useUpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationResult = Apollo.MutationResult<UpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;
export const UserImageDocument = gql`
    query userImage($id: String!) {
  user(id: $id) {
    profilePicture
  }
}
    `;

/**
 * __useUserImageQuery__
 *
 * To run a query within a React component, call `useUserImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserImageQuery(baseOptions: Apollo.QueryHookOptions<UserImageQuery, UserImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserImageQuery, UserImageQueryVariables>(UserImageDocument, options);
      }
export function useUserImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserImageQuery, UserImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserImageQuery, UserImageQueryVariables>(UserImageDocument, options);
        }
export function useUserImageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserImageQuery, UserImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserImageQuery, UserImageQueryVariables>(UserImageDocument, options);
        }
export type UserImageQueryHookResult = ReturnType<typeof useUserImageQuery>;
export type UserImageLazyQueryHookResult = ReturnType<typeof useUserImageLazyQuery>;
export type UserImageSuspenseQueryHookResult = ReturnType<typeof useUserImageSuspenseQuery>;
export type UserImageQueryResult = Apollo.QueryResult<UserImageQuery, UserImageQueryVariables>;
export const UploadUserImageDocument = gql`
    mutation uploadUserImage($file: File) {
  updateUser(userEdit: {profilePicture: $file}) {
    id
    email
    username
    emailVerified
    followerCount
    xUsername
    discordUrl
    githubUrl
    bio
    profilePicture
    bannerPicture
  }
}
    `;
export type UploadUserImageMutationFn = Apollo.MutationFunction<UploadUserImageMutation, UploadUserImageMutationVariables>;

/**
 * __useUploadUserImageMutation__
 *
 * To run a mutation, you first call `useUploadUserImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadUserImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadUserImageMutation, { data, loading, error }] = useUploadUserImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadUserImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadUserImageMutation, UploadUserImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadUserImageMutation, UploadUserImageMutationVariables>(UploadUserImageDocument, options);
      }
export type UploadUserImageMutationHookResult = ReturnType<typeof useUploadUserImageMutation>;
export type UploadUserImageMutationResult = Apollo.MutationResult<UploadUserImageMutation>;
export type UploadUserImageMutationOptions = Apollo.BaseMutationOptions<UploadUserImageMutation, UploadUserImageMutationVariables>;
export const UploadUserBannerDocument = gql`
    mutation uploadUserBanner($file: File) {
  updateUser(userEdit: {bannerPicture: $file}) {
    id
    email
    username
    emailVerified
    followerCount
    xUsername
    discordUrl
    githubUrl
    bio
    profilePicture
    bannerPicture
  }
}
    `;
export type UploadUserBannerMutationFn = Apollo.MutationFunction<UploadUserBannerMutation, UploadUserBannerMutationVariables>;

/**
 * __useUploadUserBannerMutation__
 *
 * To run a mutation, you first call `useUploadUserBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadUserBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadUserBannerMutation, { data, loading, error }] = useUploadUserBannerMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadUserBannerMutation(baseOptions?: Apollo.MutationHookOptions<UploadUserBannerMutation, UploadUserBannerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadUserBannerMutation, UploadUserBannerMutationVariables>(UploadUserBannerDocument, options);
      }
export type UploadUserBannerMutationHookResult = ReturnType<typeof useUploadUserBannerMutation>;
export type UploadUserBannerMutationResult = Apollo.MutationResult<UploadUserBannerMutation>;
export type UploadUserBannerMutationOptions = Apollo.BaseMutationOptions<UploadUserBannerMutation, UploadUserBannerMutationVariables>;
export const CreateZkAppDocument = gql`
    mutation createZkApp($zkApp: CreateZkApp!) {
  createZkApp(zkApp: $zkApp) {
    name
    slug
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
    slug
    name
    owner
    ownerUsername
    id
    subtitle
    body
    reviewScore
    reviewCount
    currentVersion
    url
    discordUrl
    githubUrl
    category {
      name
      slug
    }
    icon
    bannerImage
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
    category {
      name
    }
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
export const ZkAppsByUserDocument = gql`
    query zkAppsByUser($userId: String!) {
  zkAppsByUser(userId: $userId) {
    id
    name
    slug
    subtitle
    body
    reviewScore
    reviewCount
    currentVersion
    url
    discordUrl
    githubUrl
    category {
      name
    }
    icon
    bannerImage
  }
}
    `;

/**
 * __useZkAppsByUserQuery__
 *
 * To run a query within a React component, call `useZkAppsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useZkAppsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZkAppsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useZkAppsByUserQuery(baseOptions: Apollo.QueryHookOptions<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>(ZkAppsByUserDocument, options);
      }
export function useZkAppsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>(ZkAppsByUserDocument, options);
        }
export function useZkAppsByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>(ZkAppsByUserDocument, options);
        }
export type ZkAppsByUserQueryHookResult = ReturnType<typeof useZkAppsByUserQuery>;
export type ZkAppsByUserLazyQueryHookResult = ReturnType<typeof useZkAppsByUserLazyQuery>;
export type ZkAppsByUserSuspenseQueryHookResult = ReturnType<typeof useZkAppsByUserSuspenseQuery>;
export type ZkAppsByUserQueryResult = Apollo.QueryResult<ZkAppsByUserQuery, ZkAppsByUserQueryVariables>;
export const UserWithZkAppsDocument = gql`
    query userWithZkApps($username: String, $id: String) {
  user(id: $id, username: $username) {
    username
    followerCount
    xUsername
    discordUrl
    githubUrl
    profilePicture
    bannerPicture
    id
    bio
    zkApps {
      id
      name
      slug
      subtitle
      body
      reviewScore
      reviewCount
      currentVersion
      url
      discordUrl
      githubUrl
      icon
      bannerImage
    }
  }
}
    `;

/**
 * __useUserWithZkAppsQuery__
 *
 * To run a query within a React component, call `useUserWithZkAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWithZkAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWithZkAppsQuery({
 *   variables: {
 *      username: // value for 'username'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserWithZkAppsQuery(baseOptions?: Apollo.QueryHookOptions<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>(UserWithZkAppsDocument, options);
      }
export function useUserWithZkAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>(UserWithZkAppsDocument, options);
        }
export function useUserWithZkAppsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>(UserWithZkAppsDocument, options);
        }
export type UserWithZkAppsQueryHookResult = ReturnType<typeof useUserWithZkAppsQuery>;
export type UserWithZkAppsLazyQueryHookResult = ReturnType<typeof useUserWithZkAppsLazyQuery>;
export type UserWithZkAppsSuspenseQueryHookResult = ReturnType<typeof useUserWithZkAppsSuspenseQuery>;
export type UserWithZkAppsQueryResult = Apollo.QueryResult<UserWithZkAppsQuery, UserWithZkAppsQueryVariables>;
export const TrendingAppsDocument = gql`
    query trendingApps {
  zkApps(sortByTrending: true, limit: 5) {
    id
    name
    slug
    subtitle
    owner
    ownerUsername
    body
    reviewScore
    reviewCount
    currentVersion
    url
    icon
    category {
      name
    }
  }
}
    `;

/**
 * __useTrendingAppsQuery__
 *
 * To run a query within a React component, call `useTrendingAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingAppsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingAppsQuery(baseOptions?: Apollo.QueryHookOptions<TrendingAppsQuery, TrendingAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingAppsQuery, TrendingAppsQueryVariables>(TrendingAppsDocument, options);
      }
export function useTrendingAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingAppsQuery, TrendingAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingAppsQuery, TrendingAppsQueryVariables>(TrendingAppsDocument, options);
        }
export function useTrendingAppsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrendingAppsQuery, TrendingAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrendingAppsQuery, TrendingAppsQueryVariables>(TrendingAppsDocument, options);
        }
export type TrendingAppsQueryHookResult = ReturnType<typeof useTrendingAppsQuery>;
export type TrendingAppsLazyQueryHookResult = ReturnType<typeof useTrendingAppsLazyQuery>;
export type TrendingAppsSuspenseQueryHookResult = ReturnType<typeof useTrendingAppsSuspenseQuery>;
export type TrendingAppsQueryResult = Apollo.QueryResult<TrendingAppsQuery, TrendingAppsQueryVariables>;
export const SearchZkAppDocument = gql`
    query searchZkApp($name: String!) {
  searchZkAppByName(name: $name) {
    id
    name
    slug
    subtitle
    icon
  }
}
    `;

/**
 * __useSearchZkAppQuery__
 *
 * To run a query within a React component, call `useSearchZkAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchZkAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchZkAppQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchZkAppQuery(baseOptions: Apollo.QueryHookOptions<SearchZkAppQuery, SearchZkAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchZkAppQuery, SearchZkAppQueryVariables>(SearchZkAppDocument, options);
      }
export function useSearchZkAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchZkAppQuery, SearchZkAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchZkAppQuery, SearchZkAppQueryVariables>(SearchZkAppDocument, options);
        }
export function useSearchZkAppSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchZkAppQuery, SearchZkAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchZkAppQuery, SearchZkAppQueryVariables>(SearchZkAppDocument, options);
        }
export type SearchZkAppQueryHookResult = ReturnType<typeof useSearchZkAppQuery>;
export type SearchZkAppLazyQueryHookResult = ReturnType<typeof useSearchZkAppLazyQuery>;
export type SearchZkAppSuspenseQueryHookResult = ReturnType<typeof useSearchZkAppSuspenseQuery>;
export type SearchZkAppQueryResult = Apollo.QueryResult<SearchZkAppQuery, SearchZkAppQueryVariables>;
export const FeaturedZkAppsDocument = gql`
    query featuredZkApps {
  zkApps(sortByFeatured: true) {
    id
    name
    slug
    subtitle
    owner
    ownerUsername
    reviewScore
    reviewCount
    currentVersion
    icon
    category {
      name
      slug
    }
    featured
  }
}
    `;

/**
 * __useFeaturedZkAppsQuery__
 *
 * To run a query within a React component, call `useFeaturedZkAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedZkAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedZkAppsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedZkAppsQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>(FeaturedZkAppsDocument, options);
      }
export function useFeaturedZkAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>(FeaturedZkAppsDocument, options);
        }
export function useFeaturedZkAppsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>(FeaturedZkAppsDocument, options);
        }
export type FeaturedZkAppsQueryHookResult = ReturnType<typeof useFeaturedZkAppsQuery>;
export type FeaturedZkAppsLazyQueryHookResult = ReturnType<typeof useFeaturedZkAppsLazyQuery>;
export type FeaturedZkAppsSuspenseQueryHookResult = ReturnType<typeof useFeaturedZkAppsSuspenseQuery>;
export type FeaturedZkAppsQueryResult = Apollo.QueryResult<FeaturedZkAppsQuery, FeaturedZkAppsQueryVariables>;
export const CheckSlugDocument = gql`
    mutation checkSlug($slug: String!) {
  checkSlug(slug: $slug)
}
    `;
export type CheckSlugMutationFn = Apollo.MutationFunction<CheckSlugMutation, CheckSlugMutationVariables>;

/**
 * __useCheckSlugMutation__
 *
 * To run a mutation, you first call `useCheckSlugMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckSlugMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkSlugMutation, { data, loading, error }] = useCheckSlugMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCheckSlugMutation(baseOptions?: Apollo.MutationHookOptions<CheckSlugMutation, CheckSlugMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckSlugMutation, CheckSlugMutationVariables>(CheckSlugDocument, options);
      }
export type CheckSlugMutationHookResult = ReturnType<typeof useCheckSlugMutation>;
export type CheckSlugMutationResult = Apollo.MutationResult<CheckSlugMutation>;
export type CheckSlugMutationOptions = Apollo.BaseMutationOptions<CheckSlugMutation, CheckSlugMutationVariables>;
export const ZkAppsBySlugDocument = gql`
    query zkAppsBySlug($slugs: [String]) {
  zkApps(slugs: $slugs) {
    id
    name
    slug
    subtitle
    ownerUsername
    currentVersion
    icon
    category {
      name
      slug
    }
  }
}
    `;

/**
 * __useZkAppsBySlugQuery__
 *
 * To run a query within a React component, call `useZkAppsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useZkAppsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZkAppsBySlugQuery({
 *   variables: {
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useZkAppsBySlugQuery(baseOptions?: Apollo.QueryHookOptions<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>(ZkAppsBySlugDocument, options);
      }
export function useZkAppsBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>(ZkAppsBySlugDocument, options);
        }
export function useZkAppsBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>(ZkAppsBySlugDocument, options);
        }
export type ZkAppsBySlugQueryHookResult = ReturnType<typeof useZkAppsBySlugQuery>;
export type ZkAppsBySlugLazyQueryHookResult = ReturnType<typeof useZkAppsBySlugLazyQuery>;
export type ZkAppsBySlugSuspenseQueryHookResult = ReturnType<typeof useZkAppsBySlugSuspenseQuery>;
export type ZkAppsBySlugQueryResult = Apollo.QueryResult<ZkAppsBySlugQuery, ZkAppsBySlugQueryVariables>;
export const UpdateZkAppIconDocument = gql`
    mutation updateZkAppIcon($file: File, $id: String!) {
  updateZkApp(zkApp: {icon: $file, id: $id}) {
    slug
    name
    owner
    ownerUsername
    id
    subtitle
    body
    reviewScore
    reviewCount
    currentVersion
    url
    discordUrl
    githubUrl
    category {
      name
      slug
    }
    icon
    bannerImage
  }
}
    `;
export type UpdateZkAppIconMutationFn = Apollo.MutationFunction<UpdateZkAppIconMutation, UpdateZkAppIconMutationVariables>;

/**
 * __useUpdateZkAppIconMutation__
 *
 * To run a mutation, you first call `useUpdateZkAppIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateZkAppIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateZkAppIconMutation, { data, loading, error }] = useUpdateZkAppIconMutation({
 *   variables: {
 *      file: // value for 'file'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateZkAppIconMutation(baseOptions?: Apollo.MutationHookOptions<UpdateZkAppIconMutation, UpdateZkAppIconMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateZkAppIconMutation, UpdateZkAppIconMutationVariables>(UpdateZkAppIconDocument, options);
      }
export type UpdateZkAppIconMutationHookResult = ReturnType<typeof useUpdateZkAppIconMutation>;
export type UpdateZkAppIconMutationResult = Apollo.MutationResult<UpdateZkAppIconMutation>;
export type UpdateZkAppIconMutationOptions = Apollo.BaseMutationOptions<UpdateZkAppIconMutation, UpdateZkAppIconMutationVariables>;
export const UpdateZkAppBannerDocument = gql`
    mutation updateZkAppBanner($file: File, $id: String!) {
  updateZkApp(zkApp: {bannerImage: $file, id: $id}) {
    slug
    name
    owner
    ownerUsername
    id
    subtitle
    body
    reviewScore
    reviewCount
    currentVersion
    url
    discordUrl
    githubUrl
    category {
      name
      slug
    }
    icon
    bannerImage
  }
}
    `;
export type UpdateZkAppBannerMutationFn = Apollo.MutationFunction<UpdateZkAppBannerMutation, UpdateZkAppBannerMutationVariables>;

/**
 * __useUpdateZkAppBannerMutation__
 *
 * To run a mutation, you first call `useUpdateZkAppBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateZkAppBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateZkAppBannerMutation, { data, loading, error }] = useUpdateZkAppBannerMutation({
 *   variables: {
 *      file: // value for 'file'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateZkAppBannerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateZkAppBannerMutation, UpdateZkAppBannerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateZkAppBannerMutation, UpdateZkAppBannerMutationVariables>(UpdateZkAppBannerDocument, options);
      }
export type UpdateZkAppBannerMutationHookResult = ReturnType<typeof useUpdateZkAppBannerMutation>;
export type UpdateZkAppBannerMutationResult = Apollo.MutationResult<UpdateZkAppBannerMutation>;
export type UpdateZkAppBannerMutationOptions = Apollo.BaseMutationOptions<UpdateZkAppBannerMutation, UpdateZkAppBannerMutationVariables>;


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
  File: ResolverTypeWrapper<Scalars['File']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  News: ResolverTypeWrapper<News>;
  Query: ResolverTypeWrapper<{}>;
  SelfUser: ResolverTypeWrapper<SelfUser>;
  Signup: Signup;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Token: ResolverTypeWrapper<Token>;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserWithZkApp: ResolverTypeWrapper<UserWithZkApp>;
  ZkApp: ResolverTypeWrapper<ZkApp>;
  ZkAppCategory: ResolverTypeWrapper<ZkAppCategory>;
  ZkAppCategoryZkApp: ResolverTypeWrapper<ZkAppCategoryZkApp>;
  ZkAppUser: ResolverTypeWrapper<ZkAppUser>;
  updateZkApp: UpdateZkApp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateZkApp: CreateZkApp;
  File: Scalars['File']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  Mutation: {};
  News: News;
  Query: {};
  SelfUser: SelfUser;
  Signup: Signup;
  String: Scalars['String']['output'];
  Token: Token;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserWithZkApp: UserWithZkApp;
  ZkApp: ZkApp;
  ZkAppCategory: ZkAppCategory;
  ZkAppCategoryZkApp: ZkAppCategoryZkApp;
  ZkAppUser: ZkAppUser;
  updateZkApp: UpdateZkApp;
};

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

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
  updateUser?: Resolver<Maybe<ResolversTypes['SelfUser']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
  updateZkApp?: Resolver<ResolversTypes['ZkApp'], ParentType, ContextType, RequireFields<MutationUpdateZkAppArgs, 'zkApp'>>;
  verifyEmail?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'emailVerificationToken'>>;
};

export type NewsResolvers<ContextType = any, ParentType extends ResolversParentTypes['News'] = ResolversParentTypes['News']> = {
  banner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ctaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  textPreview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getLastNews?: Resolver<Maybe<Array<Maybe<ResolversTypes['News']>>>, ParentType, ContextType>;
  getNews?: Resolver<Maybe<ResolversTypes['News']>, ParentType, ContextType, RequireFields<QueryGetNewsArgs, 'slug'>>;
  publicInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchZkAppByName?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkApp']>>>, ParentType, ContextType, RequireFields<QuerySearchZkAppByNameArgs, 'name'>>;
  selfUser?: Resolver<Maybe<ResolversTypes['SelfUser']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserWithZkApp']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  userSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserSearchArgs, 'username'>>;
  usersSortedByFollowers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  zkApp?: Resolver<Maybe<ResolversTypes['ZkApp']>, ParentType, ContextType, RequireFields<QueryZkAppArgs, 'slug'>>;
  zkAppCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkAppCategory']>>>, ParentType, ContextType, Partial<QueryZkAppCategoriesArgs>>;
  zkAppCategoriesSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkAppCategory']>>>, ParentType, ContextType, RequireFields<QueryZkAppCategoriesSearchArgs, 'text'>>;
  zkApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkApp']>>>, ParentType, ContextType, Partial<QueryZkAppsArgs>>;
  zkAppsByCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkApp']>>>, ParentType, ContextType, RequireFields<QueryZkAppsByCategoryArgs, 'categorySlug'>>;
  zkAppsByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkApp']>>>, ParentType, ContextType, RequireFields<QueryZkAppsByUserArgs, 'userId'>>;
};

export type SelfUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelfUser'] = ResolversParentTypes['SelfUser']> = {
  bannerPicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  bannerPicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithZkAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithZkApp'] = ResolversParentTypes['UserWithZkApp']> = {
  bannerPicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zkApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZkAppUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZkApp'] = ResolversParentTypes['ZkApp']> = {
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['ZkAppCategoryZkApp']>, ParentType, ContextType>;
  categorySlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZkAppCategory'] = ResolversParentTypes['ZkAppCategory']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zkAppCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppCategoryZkAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZkAppCategoryZkApp'] = ResolversParentTypes['ZkAppCategoryZkApp']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zkAppCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZkAppUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZkAppUser'] = ResolversParentTypes['ZkAppUser']> = {
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categorySlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  File?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  News?: NewsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SelfUser?: SelfUserResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserWithZkApp?: UserWithZkAppResolvers<ContextType>;
  ZkApp?: ZkAppResolvers<ContextType>;
  ZkAppCategory?: ZkAppCategoryResolvers<ContextType>;
  ZkAppCategoryZkApp?: ZkAppCategoryZkAppResolvers<ContextType>;
  ZkAppUser?: ZkAppUserResolvers<ContextType>;
};

