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
  JSON: { input: any; output: any; }
};

export type AppStat = {
  __typename?: 'AppStat';
  color: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type AppStatFilter = {
  color?: InputMaybe<Scalars['String']['input']>;
  color_neq?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  value_gt?: InputMaybe<Scalars['Int']['input']>;
  value_gte?: InputMaybe<Scalars['Int']['input']>;
  value_lt?: InputMaybe<Scalars['Int']['input']>;
  value_lte?: InputMaybe<Scalars['Int']['input']>;
  value_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type AppStatInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type Category = {
  __typename?: 'Category';
  Products?: Maybe<Array<Maybe<Product>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnails: Array<Maybe<Scalars['String']['output']>>;
};

export type CategoryFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_neq?: InputMaybe<Scalars['String']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnails_neq?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryInput = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnails: Array<InputMaybe<Scalars['String']['input']>>;
};

export type FeaturedApp = {
  __typename?: 'FeaturedApp';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  key: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type FeaturedAppFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['Int']['input']>;
  key_gt?: InputMaybe<Scalars['Int']['input']>;
  key_gte?: InputMaybe<Scalars['Int']['input']>;
  key_lt?: InputMaybe<Scalars['Int']['input']>;
  key_lte?: InputMaybe<Scalars['Int']['input']>;
  key_neq?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedAppInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  key: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type HomeCategory = {
  __typename?: 'HomeCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnails: Array<Maybe<Scalars['String']['output']>>;
};

export type HomeCategoryFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_neq?: InputMaybe<Scalars['String']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnails_neq?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeCategoryInput = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnails: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Homepage = {
  __typename?: 'Homepage';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  primaryButtonLabel: Scalars['String']['output'];
  secondaryButtonLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomepageFilter = {
  category?: InputMaybe<Scalars['String']['input']>;
  category_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  primaryButtonLabel?: InputMaybe<Scalars['String']['input']>;
  primaryButtonLabel_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLabel?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLabel_neq?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
};

export type HomepageInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  primaryButtonLabel: Scalars['String']['input'];
  secondaryButtonLabel: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppStat?: Maybe<AppStat>;
  createCategory?: Maybe<Category>;
  createFeaturedApp?: Maybe<FeaturedApp>;
  createHomeCategory?: Maybe<HomeCategory>;
  createHomepage?: Maybe<Homepage>;
  createManyAppStat?: Maybe<Array<Maybe<AppStat>>>;
  createManyCategory?: Maybe<Array<Maybe<Category>>>;
  createManyFeaturedApp?: Maybe<Array<Maybe<FeaturedApp>>>;
  createManyHomeCategory?: Maybe<Array<Maybe<HomeCategory>>>;
  createManyHomepage?: Maybe<Array<Maybe<Homepage>>>;
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createManyProductDescription?: Maybe<Array<Maybe<ProductDescription>>>;
  createManyReview?: Maybe<Array<Maybe<Review>>>;
  createManySocial?: Maybe<Array<Maybe<Social>>>;
  createManyTrendingApp?: Maybe<Array<Maybe<TrendingApp>>>;
  createManyUpdate?: Maybe<Array<Maybe<Update>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createManyUserApp?: Maybe<Array<Maybe<UserApp>>>;
  createManyUserProduct?: Maybe<Array<Maybe<UserProduct>>>;
  createManyUserProfile?: Maybe<Array<Maybe<UserProfile>>>;
  createProduct?: Maybe<Product>;
  createProductDescription?: Maybe<ProductDescription>;
  createReview?: Maybe<Review>;
  createSocial?: Maybe<Social>;
  createTrendingApp?: Maybe<TrendingApp>;
  createUpdate?: Maybe<Update>;
  createUser?: Maybe<User>;
  createUserApp?: Maybe<UserApp>;
  createUserProduct?: Maybe<UserProduct>;
  createUserProfile?: Maybe<UserProfile>;
  removeAppStat?: Maybe<AppStat>;
  removeCategory?: Maybe<Category>;
  removeFeaturedApp?: Maybe<FeaturedApp>;
  removeHomeCategory?: Maybe<HomeCategory>;
  removeHomepage?: Maybe<Homepage>;
  removeProduct?: Maybe<Product>;
  removeProductDescription?: Maybe<ProductDescription>;
  removeReview?: Maybe<Review>;
  removeSocial?: Maybe<Social>;
  removeTrendingApp?: Maybe<TrendingApp>;
  removeUpdate?: Maybe<Update>;
  removeUser?: Maybe<User>;
  removeUserApp?: Maybe<UserApp>;
  removeUserProduct?: Maybe<UserProduct>;
  removeUserProfile?: Maybe<UserProfile>;
  updateAppStat?: Maybe<AppStat>;
  updateCategory?: Maybe<Category>;
  updateFeaturedApp?: Maybe<FeaturedApp>;
  updateHomeCategory?: Maybe<HomeCategory>;
  updateHomepage?: Maybe<Homepage>;
  updateProduct?: Maybe<Product>;
  updateProductDescription?: Maybe<ProductDescription>;
  updateReview?: Maybe<Review>;
  updateSocial?: Maybe<Social>;
  updateTrendingApp?: Maybe<TrendingApp>;
  updateUpdate?: Maybe<Update>;
  updateUser?: Maybe<User>;
  updateUserApp?: Maybe<UserApp>;
  updateUserProduct?: Maybe<UserProduct>;
  updateUserProfile?: Maybe<UserProfile>;
};


export type MutationCreateAppStatArgs = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnails: Array<InputMaybe<Scalars['String']['input']>>;
};


export type MutationCreateFeaturedAppArgs = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  key: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateHomeCategoryArgs = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnails: Array<InputMaybe<Scalars['String']['input']>>;
};


export type MutationCreateHomepageArgs = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  primaryButtonLabel: Scalars['String']['input'];
  secondaryButtonLabel: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateManyAppStatArgs = {
  data?: InputMaybe<Array<InputMaybe<AppStatInput>>>;
};


export type MutationCreateManyCategoryArgs = {
  data?: InputMaybe<Array<InputMaybe<CategoryInput>>>;
};


export type MutationCreateManyFeaturedAppArgs = {
  data?: InputMaybe<Array<InputMaybe<FeaturedAppInput>>>;
};


export type MutationCreateManyHomeCategoryArgs = {
  data?: InputMaybe<Array<InputMaybe<HomeCategoryInput>>>;
};


export type MutationCreateManyHomepageArgs = {
  data?: InputMaybe<Array<InputMaybe<HomepageInput>>>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateManyProductDescriptionArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductDescriptionInput>>>;
};


export type MutationCreateManyReviewArgs = {
  data?: InputMaybe<Array<InputMaybe<ReviewInput>>>;
};


export type MutationCreateManySocialArgs = {
  data?: InputMaybe<Array<InputMaybe<SocialInput>>>;
};


export type MutationCreateManyTrendingAppArgs = {
  data?: InputMaybe<Array<InputMaybe<TrendingAppInput>>>;
};


export type MutationCreateManyUpdateArgs = {
  data?: InputMaybe<Array<InputMaybe<UpdateInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateManyUserAppArgs = {
  data?: InputMaybe<Array<InputMaybe<UserAppInput>>>;
};


export type MutationCreateManyUserProductArgs = {
  data?: InputMaybe<Array<InputMaybe<UserProductInput>>>;
};


export type MutationCreateManyUserProfileArgs = {
  data?: InputMaybe<Array<InputMaybe<UserProfileInput>>>;
};


export type MutationCreateProductArgs = {
  bannerImage: Scalars['String']['input'];
  category_id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  link: Scalars['String']['input'];
  reviews: Scalars['JSON']['input'];
  score: Scalars['Int']['input'];
  shortDescription: Scalars['String']['input'];
  social: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateProductDescriptionArgs = {
  description: Scalars['String']['input'];
};


export type MutationCreateReviewArgs = {
  date: Scalars['String']['input'];
  preview: Scalars['String']['input'];
  product_id: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
  text: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCreateSocialArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers: Scalars['Int']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner: Scalars['String']['input'];
  userImage: Scalars['String']['input'];
  username: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};


export type MutationCreateTrendingAppArgs = {
  bannerImage: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  link: Scalars['String']['input'];
  score: Scalars['Int']['input'];
  shortDescription: Scalars['String']['input'];
  social: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateUpdateArgs = {
  description: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  product_id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers: Scalars['Int']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner: Scalars['String']['input'];
  userImage: Scalars['String']['input'];
  username: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};


export type MutationCreateUserAppArgs = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  score: Scalars['String']['input'];
  title: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateUserProductArgs = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  score: Scalars['String']['input'];
  title: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


export type MutationCreateUserProfileArgs = {
  avatar: Scalars['String']['input'];
  banner: Scalars['String']['input'];
  followers: Scalars['Int']['input'];
  social: Scalars['JSON']['input'];
  username: Scalars['String']['input'];
};


export type MutationRemoveAppStatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveFeaturedAppArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveHomeCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveHomepageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductDescriptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSocialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTrendingAppArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUpdateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserAppArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserProfileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAppStatArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdateFeaturedAppArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateHomeCategoryArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdateHomepageArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  primaryButtonLabel?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLabel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductArgs = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<Scalars['JSON']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductDescriptionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateReviewArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateSocialArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTrendingAppArgs = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserAppArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserProductArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserProfileArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  Category?: Maybe<Category>;
  Reviews?: Maybe<Array<Maybe<Review>>>;
  Updates?: Maybe<Array<Maybe<Update>>>;
  User?: Maybe<User>;
  bannerImage: Scalars['String']['output'];
  category_id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  reviews: Scalars['JSON']['output'];
  score: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  social: Scalars['JSON']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
  version: Scalars['String']['output'];
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  description: Scalars['String']['output'];
};

export type ProductDescriptionFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type ProductDescriptionInput = {
  description: Scalars['String']['input'];
};

export type ProductFilter = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  bannerImage_neq?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['ID']['input']>;
  category_id_neq?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<Scalars['JSON']['input']>;
  reviews_neq?: InputMaybe<Scalars['JSON']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  score_gt?: InputMaybe<Scalars['Int']['input']>;
  score_gte?: InputMaybe<Scalars['Int']['input']>;
  score_lt?: InputMaybe<Scalars['Int']['input']>;
  score_lte?: InputMaybe<Scalars['Int']['input']>;
  score_neq?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_neq?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  social_neq?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_neq?: InputMaybe<Scalars['String']['input']>;
};

export type ProductInput = {
  bannerImage: Scalars['String']['input'];
  category_id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  link: Scalars['String']['input'];
  reviews: Scalars['JSON']['input'];
  score: Scalars['Int']['input'];
  shortDescription: Scalars['String']['input'];
  social: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  AppStat?: Maybe<AppStat>;
  Category?: Maybe<Category>;
  FeaturedApp?: Maybe<FeaturedApp>;
  HomeCategory?: Maybe<HomeCategory>;
  Homepage?: Maybe<Homepage>;
  Product?: Maybe<Product>;
  ProductDescription?: Maybe<ProductDescription>;
  Review?: Maybe<Review>;
  Social?: Maybe<Social>;
  TrendingApp?: Maybe<TrendingApp>;
  Update?: Maybe<Update>;
  User?: Maybe<User>;
  UserApp?: Maybe<UserApp>;
  UserProduct?: Maybe<UserProduct>;
  UserProfile?: Maybe<UserProfile>;
  _allAppStatsMeta?: Maybe<ListMetadata>;
  _allCategoriesMeta?: Maybe<ListMetadata>;
  _allFeaturedAppsMeta?: Maybe<ListMetadata>;
  _allHomeCategoriesMeta?: Maybe<ListMetadata>;
  _allHomepagesMeta?: Maybe<ListMetadata>;
  _allProductDescriptionsMeta?: Maybe<ListMetadata>;
  _allProductsMeta?: Maybe<ListMetadata>;
  _allReviewsMeta?: Maybe<ListMetadata>;
  _allSocialsMeta?: Maybe<ListMetadata>;
  _allTrendingAppsMeta?: Maybe<ListMetadata>;
  _allUpdatesMeta?: Maybe<ListMetadata>;
  _allUserAppsMeta?: Maybe<ListMetadata>;
  _allUserProductsMeta?: Maybe<ListMetadata>;
  _allUserProfilesMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allAppStats?: Maybe<Array<Maybe<AppStat>>>;
  allCategories?: Maybe<Array<Maybe<Category>>>;
  allFeaturedApps?: Maybe<Array<Maybe<FeaturedApp>>>;
  allHomeCategories?: Maybe<Array<Maybe<HomeCategory>>>;
  allHomepages?: Maybe<Array<Maybe<Homepage>>>;
  allProductDescriptions?: Maybe<Array<Maybe<ProductDescription>>>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
  allReviews?: Maybe<Array<Maybe<Review>>>;
  allSocials?: Maybe<Array<Maybe<Social>>>;
  allTrendingApps?: Maybe<Array<Maybe<TrendingApp>>>;
  allUpdates?: Maybe<Array<Maybe<Update>>>;
  allUserApps?: Maybe<Array<Maybe<UserApp>>>;
  allUserProducts?: Maybe<Array<Maybe<UserProduct>>>;
  allUserProfiles?: Maybe<Array<Maybe<UserProfile>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryAppStatArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeaturedAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomeCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomepageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductDescriptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySocialArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrendingAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUpdateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserProfileArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllAppStatsMetaArgs = {
  filter?: InputMaybe<AppStatFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllCategoriesMetaArgs = {
  filter?: InputMaybe<CategoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllFeaturedAppsMetaArgs = {
  filter?: InputMaybe<FeaturedAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllHomeCategoriesMetaArgs = {
  filter?: InputMaybe<HomeCategoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllHomepagesMetaArgs = {
  filter?: InputMaybe<HomepageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllProductDescriptionsMetaArgs = {
  filter?: InputMaybe<ProductDescriptionFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllReviewsMetaArgs = {
  filter?: InputMaybe<ReviewFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllSocialsMetaArgs = {
  filter?: InputMaybe<SocialFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllTrendingAppsMetaArgs = {
  filter?: InputMaybe<TrendingAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUpdatesMetaArgs = {
  filter?: InputMaybe<UpdateFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUserAppsMetaArgs = {
  filter?: InputMaybe<UserAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUserProductsMetaArgs = {
  filter?: InputMaybe<UserProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUserProfilesMetaArgs = {
  filter?: InputMaybe<UserProfileFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllAppStatsArgs = {
  filter?: InputMaybe<AppStatFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllFeaturedAppsArgs = {
  filter?: InputMaybe<FeaturedAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllHomeCategoriesArgs = {
  filter?: InputMaybe<HomeCategoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllHomepagesArgs = {
  filter?: InputMaybe<HomepageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllProductDescriptionsArgs = {
  filter?: InputMaybe<ProductDescriptionFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllReviewsArgs = {
  filter?: InputMaybe<ReviewFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllSocialsArgs = {
  filter?: InputMaybe<SocialFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTrendingAppsArgs = {
  filter?: InputMaybe<TrendingAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUpdatesArgs = {
  filter?: InputMaybe<UpdateFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUserAppsArgs = {
  filter?: InputMaybe<UserAppFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUserProductsArgs = {
  filter?: InputMaybe<UserProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUserProfilesArgs = {
  filter?: InputMaybe<UserProfileFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  Product?: Maybe<Product>;
  User?: Maybe<User>;
  date: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  product_id: Scalars['ID']['output'];
  score: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type ReviewFilter = {
  date?: InputMaybe<Scalars['String']['input']>;
  date_neq?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  preview?: InputMaybe<Scalars['String']['input']>;
  preview_neq?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  product_id_neq?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  score_gt?: InputMaybe<Scalars['Int']['input']>;
  score_gte?: InputMaybe<Scalars['Int']['input']>;
  score_lt?: InputMaybe<Scalars['Int']['input']>;
  score_lte?: InputMaybe<Scalars['Int']['input']>;
  score_neq?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewInput = {
  date: Scalars['String']['input'];
  preview: Scalars['String']['input'];
  product_id: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
  text: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type Social = {
  __typename?: 'Social';
  email?: Maybe<Scalars['String']['output']>;
  followers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  social?: Maybe<Scalars['JSON']['output']>;
  userBanner: Scalars['String']['output'];
  userImage: Scalars['String']['output'];
  username: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type SocialFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  email_neq?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  social_neq?: InputMaybe<Scalars['JSON']['input']>;
  userBanner?: InputMaybe<Scalars['String']['input']>;
  userBanner_neq?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<Scalars['String']['input']>;
  userImage_neq?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_neq?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers: Scalars['Int']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner: Scalars['String']['input'];
  userImage: Scalars['String']['input'];
  username: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type TrendingApp = {
  __typename?: 'TrendingApp';
  User?: Maybe<User>;
  bannerImage: Scalars['String']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  score: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  social: Scalars['JSON']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
  version: Scalars['String']['output'];
};

export type TrendingAppFilter = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  bannerImage_neq?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  score_gt?: InputMaybe<Scalars['Int']['input']>;
  score_gte?: InputMaybe<Scalars['Int']['input']>;
  score_lt?: InputMaybe<Scalars['Int']['input']>;
  score_lte?: InputMaybe<Scalars['Int']['input']>;
  score_neq?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_neq?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  social_neq?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_neq?: InputMaybe<Scalars['String']['input']>;
};

export type TrendingAppInput = {
  bannerImage: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  link: Scalars['String']['input'];
  score: Scalars['Int']['input'];
  shortDescription: Scalars['String']['input'];
  social: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Update = {
  __typename?: 'Update';
  Product?: Maybe<Product>;
  User?: Maybe<User>;
  description: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
  version: Scalars['String']['output'];
};

export type UpdateFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_neq?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  product_id_neq?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
  user_id_neq?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_neq?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInput = {
  description: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  product_id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  Products?: Maybe<Array<Maybe<Product>>>;
  Reviews?: Maybe<Array<Maybe<Review>>>;
  TrendingApps?: Maybe<Array<Maybe<TrendingApp>>>;
  Updates?: Maybe<Array<Maybe<Update>>>;
  email?: Maybe<Scalars['String']['output']>;
  followers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  social?: Maybe<Scalars['JSON']['output']>;
  userBanner: Scalars['String']['output'];
  userImage: Scalars['String']['output'];
  username: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type UserApp = {
  __typename?: 'UserApp';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  score: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type UserAppFilter = {
  category?: InputMaybe<Scalars['String']['input']>;
  category_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  score_neq?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_neq?: InputMaybe<Scalars['String']['input']>;
};

export type UserAppInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  score: Scalars['String']['input'];
  title: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type UserFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  email_neq?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  social_neq?: InputMaybe<Scalars['JSON']['input']>;
  userBanner?: InputMaybe<Scalars['String']['input']>;
  userBanner_neq?: InputMaybe<Scalars['String']['input']>;
  userImage?: InputMaybe<Scalars['String']['input']>;
  userImage_neq?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_neq?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  followers: Scalars['Int']['input'];
  social?: InputMaybe<Scalars['JSON']['input']>;
  userBanner: Scalars['String']['input'];
  userImage: Scalars['String']['input'];
  username: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type UserProduct = {
  __typename?: 'UserProduct';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  score: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type UserProductFilter = {
  category?: InputMaybe<Scalars['String']['input']>;
  category_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  score_neq?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_neq?: InputMaybe<Scalars['String']['input']>;
};

export type UserProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  score: Scalars['String']['input'];
  title: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar: Scalars['String']['output'];
  banner: Scalars['String']['output'];
  followers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  social: Scalars['JSON']['output'];
  username: Scalars['String']['output'];
};

export type UserProfileFilter = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_neq?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  banner_neq?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['JSON']['input']>;
  social_neq?: InputMaybe<Scalars['JSON']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_neq?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfileInput = {
  avatar: Scalars['String']['input'];
  banner: Scalars['String']['input'];
  followers: Scalars['Int']['input'];
  social: Scalars['JSON']['input'];
  username: Scalars['String']['input'];
};

export type HeroBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroBannerQuery = { __typename?: 'Query', allHomepages?: Array<{ __typename?: 'Homepage', category: string, title: string, description: string, primaryButtonLabel: string, secondaryButtonLabel: string, image: string } | null> | null };

export type TrendingAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingAppsQuery = { __typename?: 'Query', allTrendingApps?: Array<{ __typename?: 'TrendingApp', id: string, title: string, shortDescription: string, description: string, category: string, version: string, score: number, image: string } | null> | null };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', User?: { __typename?: 'User', id: string, email?: string | null, username: string, followers: number, userImage: string, verified: boolean, userBanner: string, social?: any | null, Products?: Array<{ __typename?: 'Product', title: string, score: number, description: string, image: string, shortDescription: string, link: string, social: any, id: string, category_id: string } | null> | null, Updates?: Array<{ __typename?: 'Update', title: string, version: string, description: string, key?: string | null, Product?: { __typename?: 'Product', title: string, id: string } | null } | null> | null } | null };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', Product?: { __typename?: 'Product', title: string, user_id: string, shortDescription: string, description: string, link: string, social: any, bannerImage: string, version: string, image: string, id: string, score: number, reviews: any, Category?: { __typename?: 'Category', name: string, id: string } | null, User?: { __typename?: 'User', username: string, id: string, verified: boolean } | null } | null };

export type FilteredProductsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type FilteredProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', title: string, user_id: string, shortDescription: string, description: string, link: string, social: any, bannerImage: string, version: string, image: string, id: string, score: number, Category?: { __typename?: 'Category', name: string, id: string } | null, User?: { __typename?: 'User', username: string, id: string, verified: boolean } | null } | null> | null };

export type ProductsByCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductsByCategoryQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', title: string, user_id: string, shortDescription: string, description: string, link: string, social: any, bannerImage: string, version: string, image: string, id: string, score: number, Category?: { __typename?: 'Category', name: string, id: string } | null, User?: { __typename?: 'User', username: string, id: string, verified: boolean } | null } | null> | null };

export type ProductsByUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductsByUserQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', title: string, user_id: string, shortDescription: string, description: string, link: string, social: any, bannerImage: string, version: string, image: string, id: string, score: number, Category?: { __typename?: 'Category', name: string, id: string } | null, User?: { __typename?: 'User', username: string, id: string, verified: boolean } | null } | null> | null };

export type HomeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeCategoriesQuery = { __typename?: 'Query', allHomeCategories?: Array<{ __typename?: 'HomeCategory', name: string, slug: string, id: string, thumbnails: Array<string | null> } | null> | null };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', Category?: { __typename?: 'Category', name: string, id: string, thumbnails: Array<string | null>, Products?: Array<{ __typename?: 'Product', title: string, score: number, description: string, user_id: string, image: string, shortDescription: string, link: string, social: any, id: string } | null> | null } | null };

export type FeaturedAppsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FeaturedAppsQuery = { __typename?: 'Query', allCategories?: Array<{ __typename?: 'Category', name: string, slug: string, id: string, thumbnails: Array<string | null>, Products?: Array<{ __typename?: 'Product', title: string, id: string, version: string, image: string, shortDescription: string } | null> | null } | null> | null };

export type SearchQueryVariables = Exact<{
  data?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', id: string, title: string, version: string, shortDescription: string, image: string, Category?: { __typename?: 'Category', name: string } | null } | null> | null, allUsers?: Array<{ __typename?: 'User', id: string, username: string, userImage: string, followers: number } | null> | null, allCategories?: Array<{ __typename?: 'Category', id: string, name: string, thumbnails: Array<string | null>, Products?: Array<{ __typename?: 'Product', id: string } | null> | null } | null> | null };

export type ReviewByProductQueryVariables = Exact<{
  product: Scalars['ID']['input'];
}>;


export type ReviewByProductQuery = { __typename?: 'Query', allReviews?: Array<{ __typename?: 'Review', preview: string, text: string, score: number, date: string, User?: { __typename?: 'User', username: string, userImage: string } | null } | null> | null };


export const HeroBannerDocument = gql`
    query heroBanner {
  allHomepages {
    category
    title
    description
    primaryButtonLabel
    secondaryButtonLabel
    image
  }
}
    `;

/**
 * __useHeroBannerQuery__
 *
 * To run a query within a React component, call `useHeroBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroBannerQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroBannerQuery(baseOptions?: Apollo.QueryHookOptions<HeroBannerQuery, HeroBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeroBannerQuery, HeroBannerQueryVariables>(HeroBannerDocument, options);
      }
export function useHeroBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeroBannerQuery, HeroBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeroBannerQuery, HeroBannerQueryVariables>(HeroBannerDocument, options);
        }
export function useHeroBannerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HeroBannerQuery, HeroBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HeroBannerQuery, HeroBannerQueryVariables>(HeroBannerDocument, options);
        }
export type HeroBannerQueryHookResult = ReturnType<typeof useHeroBannerQuery>;
export type HeroBannerLazyQueryHookResult = ReturnType<typeof useHeroBannerLazyQuery>;
export type HeroBannerSuspenseQueryHookResult = ReturnType<typeof useHeroBannerSuspenseQuery>;
export type HeroBannerQueryResult = Apollo.QueryResult<HeroBannerQuery, HeroBannerQueryVariables>;
export const TrendingAppsDocument = gql`
    query trendingApps {
  allTrendingApps {
    id
    title
    shortDescription
    description
    category
    version
    score
    image
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
export const UserDocument = gql`
    query user($id: ID!) {
  User(id: $id) {
    id
    email
    username
    followers
    userImage
    verified
    userBanner
    social
    Products {
      title
      score
      description
      image
      shortDescription
      link
      social
      id
      category_id
    }
    Updates {
      title
      version
      description
      key
      Product {
        title
        id
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const ProductDocument = gql`
    query product($id: ID!) {
  Product(id: $id) {
    title
    user_id
    shortDescription
    description
    link
    social
    bannerImage
    version
    image
    id
    score
    user_id
    reviews
    Category {
      name
      id
    }
    User {
      username
      id
      verified
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export function useProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const FilteredProductsDocument = gql`
    query filteredProducts($ids: [ID!]) {
  allProducts(filter: {ids: $ids}) {
    title
    user_id
    shortDescription
    description
    link
    social
    bannerImage
    version
    image
    id
    score
    user_id
    Category {
      name
      id
    }
    User {
      username
      id
      verified
    }
  }
}
    `;

/**
 * __useFilteredProductsQuery__
 *
 * To run a query within a React component, call `useFilteredProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredProductsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useFilteredProductsQuery(baseOptions?: Apollo.QueryHookOptions<FilteredProductsQuery, FilteredProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilteredProductsQuery, FilteredProductsQueryVariables>(FilteredProductsDocument, options);
      }
export function useFilteredProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilteredProductsQuery, FilteredProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilteredProductsQuery, FilteredProductsQueryVariables>(FilteredProductsDocument, options);
        }
export function useFilteredProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FilteredProductsQuery, FilteredProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FilteredProductsQuery, FilteredProductsQueryVariables>(FilteredProductsDocument, options);
        }
export type FilteredProductsQueryHookResult = ReturnType<typeof useFilteredProductsQuery>;
export type FilteredProductsLazyQueryHookResult = ReturnType<typeof useFilteredProductsLazyQuery>;
export type FilteredProductsSuspenseQueryHookResult = ReturnType<typeof useFilteredProductsSuspenseQuery>;
export type FilteredProductsQueryResult = Apollo.QueryResult<FilteredProductsQuery, FilteredProductsQueryVariables>;
export const ProductsByCategoryDocument = gql`
    query productsByCategory($id: ID!) {
  allProducts(filter: {category_id: $id}) {
    title
    user_id
    shortDescription
    description
    link
    social
    bannerImage
    version
    image
    id
    score
    user_id
    Category {
      name
      id
    }
    User {
      username
      id
      verified
    }
  }
}
    `;

/**
 * __useProductsByCategoryQuery__
 *
 * To run a query within a React component, call `useProductsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
      }
export function useProductsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
        }
export function useProductsByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
        }
export type ProductsByCategoryQueryHookResult = ReturnType<typeof useProductsByCategoryQuery>;
export type ProductsByCategoryLazyQueryHookResult = ReturnType<typeof useProductsByCategoryLazyQuery>;
export type ProductsByCategorySuspenseQueryHookResult = ReturnType<typeof useProductsByCategorySuspenseQuery>;
export type ProductsByCategoryQueryResult = Apollo.QueryResult<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>;
export const ProductsByUserDocument = gql`
    query productsByUser($id: ID!) {
  allProducts(filter: {user_id: $id}) {
    title
    user_id
    shortDescription
    description
    link
    social
    bannerImage
    version
    image
    id
    score
    user_id
    Category {
      name
      id
    }
    User {
      username
      id
      verified
    }
  }
}
    `;

/**
 * __useProductsByUserQuery__
 *
 * To run a query within a React component, call `useProductsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductsByUserQuery(baseOptions: Apollo.QueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
      }
export function useProductsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
        }
export function useProductsByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
        }
export type ProductsByUserQueryHookResult = ReturnType<typeof useProductsByUserQuery>;
export type ProductsByUserLazyQueryHookResult = ReturnType<typeof useProductsByUserLazyQuery>;
export type ProductsByUserSuspenseQueryHookResult = ReturnType<typeof useProductsByUserSuspenseQuery>;
export type ProductsByUserQueryResult = Apollo.QueryResult<ProductsByUserQuery, ProductsByUserQueryVariables>;
export const HomeCategoriesDocument = gql`
    query homeCategories {
  allHomeCategories {
    name
    slug
    id
    thumbnails
  }
}
    `;

/**
 * __useHomeCategoriesQuery__
 *
 * To run a query within a React component, call `useHomeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<HomeCategoriesQuery, HomeCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeCategoriesQuery, HomeCategoriesQueryVariables>(HomeCategoriesDocument, options);
      }
export function useHomeCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCategoriesQuery, HomeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeCategoriesQuery, HomeCategoriesQueryVariables>(HomeCategoriesDocument, options);
        }
export function useHomeCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeCategoriesQuery, HomeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeCategoriesQuery, HomeCategoriesQueryVariables>(HomeCategoriesDocument, options);
        }
export type HomeCategoriesQueryHookResult = ReturnType<typeof useHomeCategoriesQuery>;
export type HomeCategoriesLazyQueryHookResult = ReturnType<typeof useHomeCategoriesLazyQuery>;
export type HomeCategoriesSuspenseQueryHookResult = ReturnType<typeof useHomeCategoriesSuspenseQuery>;
export type HomeCategoriesQueryResult = Apollo.QueryResult<HomeCategoriesQuery, HomeCategoriesQueryVariables>;
export const CategoryDocument = gql`
    query category($id: ID!) {
  Category(id: $id) {
    name
    id
    thumbnails
    Products {
      title
      score
      description
      user_id
      image
      shortDescription
      link
      social
      id
      user_id
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const FeaturedAppsDocument = gql`
    query featuredApps($id: ID!) {
  allCategories(filter: {id: $id}) {
    name
    slug
    id
    thumbnails
    Products {
      title
      id
      version
      image
      shortDescription
    }
  }
}
    `;

/**
 * __useFeaturedAppsQuery__
 *
 * To run a query within a React component, call `useFeaturedAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedAppsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFeaturedAppsQuery(baseOptions: Apollo.QueryHookOptions<FeaturedAppsQuery, FeaturedAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturedAppsQuery, FeaturedAppsQueryVariables>(FeaturedAppsDocument, options);
      }
export function useFeaturedAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedAppsQuery, FeaturedAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturedAppsQuery, FeaturedAppsQueryVariables>(FeaturedAppsDocument, options);
        }
export function useFeaturedAppsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FeaturedAppsQuery, FeaturedAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FeaturedAppsQuery, FeaturedAppsQueryVariables>(FeaturedAppsDocument, options);
        }
export type FeaturedAppsQueryHookResult = ReturnType<typeof useFeaturedAppsQuery>;
export type FeaturedAppsLazyQueryHookResult = ReturnType<typeof useFeaturedAppsLazyQuery>;
export type FeaturedAppsSuspenseQueryHookResult = ReturnType<typeof useFeaturedAppsSuspenseQuery>;
export type FeaturedAppsQueryResult = Apollo.QueryResult<FeaturedAppsQuery, FeaturedAppsQueryVariables>;
export const SearchDocument = gql`
    query search($data: String) {
  allProducts(filter: {q: $data}) {
    id
    title
    version
    shortDescription
    image
    Category {
      name
    }
  }
  allUsers(filter: {q: $data}) {
    id
    username
    userImage
    followers
  }
  allCategories(filter: {q: $data}) {
    id
    name
    thumbnails
    Products {
      id
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export function useSearchSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchSuspenseQueryHookResult = ReturnType<typeof useSearchSuspenseQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const ReviewByProductDocument = gql`
    query reviewByProduct($product: ID!) {
  allReviews(filter: {product_id: $product}) {
    preview
    text
    score
    date
    User {
      username
      userImage
    }
  }
}
    `;

/**
 * __useReviewByProductQuery__
 *
 * To run a query within a React component, call `useReviewByProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewByProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewByProductQuery({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useReviewByProductQuery(baseOptions: Apollo.QueryHookOptions<ReviewByProductQuery, ReviewByProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewByProductQuery, ReviewByProductQueryVariables>(ReviewByProductDocument, options);
      }
export function useReviewByProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewByProductQuery, ReviewByProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewByProductQuery, ReviewByProductQueryVariables>(ReviewByProductDocument, options);
        }
export function useReviewByProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewByProductQuery, ReviewByProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewByProductQuery, ReviewByProductQueryVariables>(ReviewByProductDocument, options);
        }
export type ReviewByProductQueryHookResult = ReturnType<typeof useReviewByProductQuery>;
export type ReviewByProductLazyQueryHookResult = ReturnType<typeof useReviewByProductLazyQuery>;
export type ReviewByProductSuspenseQueryHookResult = ReturnType<typeof useReviewByProductSuspenseQuery>;
export type ReviewByProductQueryResult = Apollo.QueryResult<ReviewByProductQuery, ReviewByProductQueryVariables>;


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
  AppStat: ResolverTypeWrapper<AppStat>;
  AppStatFilter: AppStatFilter;
  AppStatInput: AppStatInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryFilter: CategoryFilter;
  CategoryInput: CategoryInput;
  FeaturedApp: ResolverTypeWrapper<FeaturedApp>;
  FeaturedAppFilter: FeaturedAppFilter;
  FeaturedAppInput: FeaturedAppInput;
  HomeCategory: ResolverTypeWrapper<HomeCategory>;
  HomeCategoryFilter: HomeCategoryFilter;
  HomeCategoryInput: HomeCategoryInput;
  Homepage: ResolverTypeWrapper<Homepage>;
  HomepageFilter: HomepageFilter;
  HomepageInput: HomepageInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductDescription: ResolverTypeWrapper<ProductDescription>;
  ProductDescriptionFilter: ProductDescriptionFilter;
  ProductDescriptionInput: ProductDescriptionInput;
  ProductFilter: ProductFilter;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  ReviewFilter: ReviewFilter;
  ReviewInput: ReviewInput;
  Social: ResolverTypeWrapper<Social>;
  SocialFilter: SocialFilter;
  SocialInput: SocialInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TrendingApp: ResolverTypeWrapper<TrendingApp>;
  TrendingAppFilter: TrendingAppFilter;
  TrendingAppInput: TrendingAppInput;
  Update: ResolverTypeWrapper<Update>;
  UpdateFilter: UpdateFilter;
  UpdateInput: UpdateInput;
  User: ResolverTypeWrapper<User>;
  UserApp: ResolverTypeWrapper<UserApp>;
  UserAppFilter: UserAppFilter;
  UserAppInput: UserAppInput;
  UserFilter: UserFilter;
  UserInput: UserInput;
  UserProduct: ResolverTypeWrapper<UserProduct>;
  UserProductFilter: UserProductFilter;
  UserProductInput: UserProductInput;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserProfileFilter: UserProfileFilter;
  UserProfileInput: UserProfileInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AppStat: AppStat;
  AppStatFilter: AppStatFilter;
  AppStatInput: AppStatInput;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CategoryFilter: CategoryFilter;
  CategoryInput: CategoryInput;
  FeaturedApp: FeaturedApp;
  FeaturedAppFilter: FeaturedAppFilter;
  FeaturedAppInput: FeaturedAppInput;
  HomeCategory: HomeCategory;
  HomeCategoryFilter: HomeCategoryFilter;
  HomeCategoryInput: HomeCategoryInput;
  Homepage: Homepage;
  HomepageFilter: HomepageFilter;
  HomepageInput: HomepageInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  ListMetadata: ListMetadata;
  Mutation: {};
  Product: Product;
  ProductDescription: ProductDescription;
  ProductDescriptionFilter: ProductDescriptionFilter;
  ProductDescriptionInput: ProductDescriptionInput;
  ProductFilter: ProductFilter;
  ProductInput: ProductInput;
  Query: {};
  Review: Review;
  ReviewFilter: ReviewFilter;
  ReviewInput: ReviewInput;
  Social: Social;
  SocialFilter: SocialFilter;
  SocialInput: SocialInput;
  String: Scalars['String']['output'];
  TrendingApp: TrendingApp;
  TrendingAppFilter: TrendingAppFilter;
  TrendingAppInput: TrendingAppInput;
  Update: Update;
  UpdateFilter: UpdateFilter;
  UpdateInput: UpdateInput;
  User: User;
  UserApp: UserApp;
  UserAppFilter: UserAppFilter;
  UserAppInput: UserAppInput;
  UserFilter: UserFilter;
  UserInput: UserInput;
  UserProduct: UserProduct;
  UserProductFilter: UserProductFilter;
  UserProductInput: UserProductInput;
  UserProfile: UserProfile;
  UserProfileFilter: UserProfileFilter;
  UserProfileInput: UserProfileInput;
};

export type AppStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppStat'] = ResolversParentTypes['AppStat']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  Products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeaturedAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeaturedApp'] = ResolversParentTypes['FeaturedApp']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomeCategory'] = ResolversParentTypes['HomeCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomepageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Homepage'] = ResolversParentTypes['Homepage']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryButtonLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secondaryButtonLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAppStat?: Resolver<Maybe<ResolversTypes['AppStat']>, ParentType, ContextType, RequireFields<MutationCreateAppStatArgs, 'color' | 'name' | 'value'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name' | 'slug' | 'thumbnails'>>;
  createFeaturedApp?: Resolver<Maybe<ResolversTypes['FeaturedApp']>, ParentType, ContextType, RequireFields<MutationCreateFeaturedAppArgs, 'description' | 'image' | 'key' | 'title'>>;
  createHomeCategory?: Resolver<Maybe<ResolversTypes['HomeCategory']>, ParentType, ContextType, RequireFields<MutationCreateHomeCategoryArgs, 'name' | 'slug' | 'thumbnails'>>;
  createHomepage?: Resolver<Maybe<ResolversTypes['Homepage']>, ParentType, ContextType, RequireFields<MutationCreateHomepageArgs, 'category' | 'description' | 'image' | 'primaryButtonLabel' | 'secondaryButtonLabel' | 'title'>>;
  createManyAppStat?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppStat']>>>, ParentType, ContextType, Partial<MutationCreateManyAppStatArgs>>;
  createManyCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, Partial<MutationCreateManyCategoryArgs>>;
  createManyFeaturedApp?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeaturedApp']>>>, ParentType, ContextType, Partial<MutationCreateManyFeaturedAppArgs>>;
  createManyHomeCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomeCategory']>>>, ParentType, ContextType, Partial<MutationCreateManyHomeCategoryArgs>>;
  createManyHomepage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Homepage']>>>, ParentType, ContextType, Partial<MutationCreateManyHomepageArgs>>;
  createManyProduct?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<MutationCreateManyProductArgs>>;
  createManyProductDescription?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductDescription']>>>, ParentType, ContextType, Partial<MutationCreateManyProductDescriptionArgs>>;
  createManyReview?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, Partial<MutationCreateManyReviewArgs>>;
  createManySocial?: Resolver<Maybe<Array<Maybe<ResolversTypes['Social']>>>, ParentType, ContextType, Partial<MutationCreateManySocialArgs>>;
  createManyTrendingApp?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrendingApp']>>>, ParentType, ContextType, Partial<MutationCreateManyTrendingAppArgs>>;
  createManyUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Update']>>>, ParentType, ContextType, Partial<MutationCreateManyUpdateArgs>>;
  createManyUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<MutationCreateManyUserArgs>>;
  createManyUserApp?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserApp']>>>, ParentType, ContextType, Partial<MutationCreateManyUserAppArgs>>;
  createManyUserProduct?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserProduct']>>>, ParentType, ContextType, Partial<MutationCreateManyUserProductArgs>>;
  createManyUserProfile?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserProfile']>>>, ParentType, ContextType, Partial<MutationCreateManyUserProfileArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'bannerImage' | 'category_id' | 'description' | 'image' | 'link' | 'reviews' | 'score' | 'shortDescription' | 'social' | 'title' | 'user_id' | 'version'>>;
  createProductDescription?: Resolver<Maybe<ResolversTypes['ProductDescription']>, ParentType, ContextType, RequireFields<MutationCreateProductDescriptionArgs, 'description'>>;
  createReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'date' | 'preview' | 'product_id' | 'score' | 'text' | 'user_id'>>;
  createSocial?: Resolver<Maybe<ResolversTypes['Social']>, ParentType, ContextType, RequireFields<MutationCreateSocialArgs, 'followers' | 'userBanner' | 'userImage' | 'username' | 'verified'>>;
  createTrendingApp?: Resolver<Maybe<ResolversTypes['TrendingApp']>, ParentType, ContextType, RequireFields<MutationCreateTrendingAppArgs, 'bannerImage' | 'category' | 'description' | 'image' | 'link' | 'score' | 'shortDescription' | 'social' | 'title' | 'user_id' | 'version'>>;
  createUpdate?: Resolver<Maybe<ResolversTypes['Update']>, ParentType, ContextType, RequireFields<MutationCreateUpdateArgs, 'description' | 'product_id' | 'title' | 'user_id' | 'version'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'followers' | 'userBanner' | 'userImage' | 'username' | 'verified'>>;
  createUserApp?: Resolver<Maybe<ResolversTypes['UserApp']>, ParentType, ContextType, RequireFields<MutationCreateUserAppArgs, 'category' | 'description' | 'image' | 'score' | 'title' | 'version'>>;
  createUserProduct?: Resolver<Maybe<ResolversTypes['UserProduct']>, ParentType, ContextType, RequireFields<MutationCreateUserProductArgs, 'category' | 'description' | 'image' | 'score' | 'title' | 'version'>>;
  createUserProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<MutationCreateUserProfileArgs, 'avatar' | 'banner' | 'followers' | 'social' | 'username'>>;
  removeAppStat?: Resolver<Maybe<ResolversTypes['AppStat']>, ParentType, ContextType, RequireFields<MutationRemoveAppStatArgs, 'id'>>;
  removeCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationRemoveCategoryArgs, 'id'>>;
  removeFeaturedApp?: Resolver<Maybe<ResolversTypes['FeaturedApp']>, ParentType, ContextType, RequireFields<MutationRemoveFeaturedAppArgs, 'id'>>;
  removeHomeCategory?: Resolver<Maybe<ResolversTypes['HomeCategory']>, ParentType, ContextType, RequireFields<MutationRemoveHomeCategoryArgs, 'id'>>;
  removeHomepage?: Resolver<Maybe<ResolversTypes['Homepage']>, ParentType, ContextType, RequireFields<MutationRemoveHomepageArgs, 'id'>>;
  removeProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationRemoveProductArgs, 'id'>>;
  removeProductDescription?: Resolver<Maybe<ResolversTypes['ProductDescription']>, ParentType, ContextType, RequireFields<MutationRemoveProductDescriptionArgs, 'id'>>;
  removeReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationRemoveReviewArgs, 'id'>>;
  removeSocial?: Resolver<Maybe<ResolversTypes['Social']>, ParentType, ContextType, RequireFields<MutationRemoveSocialArgs, 'id'>>;
  removeTrendingApp?: Resolver<Maybe<ResolversTypes['TrendingApp']>, ParentType, ContextType, RequireFields<MutationRemoveTrendingAppArgs, 'id'>>;
  removeUpdate?: Resolver<Maybe<ResolversTypes['Update']>, ParentType, ContextType, RequireFields<MutationRemoveUpdateArgs, 'id'>>;
  removeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'id'>>;
  removeUserApp?: Resolver<Maybe<ResolversTypes['UserApp']>, ParentType, ContextType, RequireFields<MutationRemoveUserAppArgs, 'id'>>;
  removeUserProduct?: Resolver<Maybe<ResolversTypes['UserProduct']>, ParentType, ContextType, RequireFields<MutationRemoveUserProductArgs, 'id'>>;
  removeUserProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<MutationRemoveUserProfileArgs, 'id'>>;
  updateAppStat?: Resolver<Maybe<ResolversTypes['AppStat']>, ParentType, ContextType, Partial<MutationUpdateAppStatArgs>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id'>>;
  updateFeaturedApp?: Resolver<Maybe<ResolversTypes['FeaturedApp']>, ParentType, ContextType, RequireFields<MutationUpdateFeaturedAppArgs, 'id'>>;
  updateHomeCategory?: Resolver<Maybe<ResolversTypes['HomeCategory']>, ParentType, ContextType, RequireFields<MutationUpdateHomeCategoryArgs, 'id'>>;
  updateHomepage?: Resolver<Maybe<ResolversTypes['Homepage']>, ParentType, ContextType, Partial<MutationUpdateHomepageArgs>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id'>>;
  updateProductDescription?: Resolver<Maybe<ResolversTypes['ProductDescription']>, ParentType, ContextType, Partial<MutationUpdateProductDescriptionArgs>>;
  updateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, Partial<MutationUpdateReviewArgs>>;
  updateSocial?: Resolver<Maybe<ResolversTypes['Social']>, ParentType, ContextType, RequireFields<MutationUpdateSocialArgs, 'id'>>;
  updateTrendingApp?: Resolver<Maybe<ResolversTypes['TrendingApp']>, ParentType, ContextType, RequireFields<MutationUpdateTrendingAppArgs, 'id'>>;
  updateUpdate?: Resolver<Maybe<ResolversTypes['Update']>, ParentType, ContextType, Partial<MutationUpdateUpdateArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
  updateUserApp?: Resolver<Maybe<ResolversTypes['UserApp']>, ParentType, ContextType, RequireFields<MutationUpdateUserAppArgs, 'id'>>;
  updateUserProduct?: Resolver<Maybe<ResolversTypes['UserProduct']>, ParentType, ContextType, RequireFields<MutationUpdateUserProductArgs, 'id'>>;
  updateUserProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<MutationUpdateUserProfileArgs, 'id'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  Category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  Reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  Updates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Update']>>>, ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  bannerImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  social?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescription'] = ResolversParentTypes['ProductDescription']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  AppStat?: Resolver<Maybe<ResolversTypes['AppStat']>, ParentType, ContextType, RequireFields<QueryAppStatArgs, 'id'>>;
  Category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  FeaturedApp?: Resolver<Maybe<ResolversTypes['FeaturedApp']>, ParentType, ContextType, RequireFields<QueryFeaturedAppArgs, 'id'>>;
  HomeCategory?: Resolver<Maybe<ResolversTypes['HomeCategory']>, ParentType, ContextType, RequireFields<QueryHomeCategoryArgs, 'id'>>;
  Homepage?: Resolver<Maybe<ResolversTypes['Homepage']>, ParentType, ContextType, RequireFields<QueryHomepageArgs, 'id'>>;
  Product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  ProductDescription?: Resolver<Maybe<ResolversTypes['ProductDescription']>, ParentType, ContextType, RequireFields<QueryProductDescriptionArgs, 'id'>>;
  Review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'id'>>;
  Social?: Resolver<Maybe<ResolversTypes['Social']>, ParentType, ContextType, RequireFields<QuerySocialArgs, 'id'>>;
  TrendingApp?: Resolver<Maybe<ResolversTypes['TrendingApp']>, ParentType, ContextType, RequireFields<QueryTrendingAppArgs, 'id'>>;
  Update?: Resolver<Maybe<ResolversTypes['Update']>, ParentType, ContextType, RequireFields<QueryUpdateArgs, 'id'>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  UserApp?: Resolver<Maybe<ResolversTypes['UserApp']>, ParentType, ContextType, RequireFields<QueryUserAppArgs, 'id'>>;
  UserProduct?: Resolver<Maybe<ResolversTypes['UserProduct']>, ParentType, ContextType, RequireFields<QueryUserProductArgs, 'id'>>;
  UserProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<QueryUserProfileArgs, 'id'>>;
  _allAppStatsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAppStatsMetaArgs>>;
  _allCategoriesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllCategoriesMetaArgs>>;
  _allFeaturedAppsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllFeaturedAppsMetaArgs>>;
  _allHomeCategoriesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllHomeCategoriesMetaArgs>>;
  _allHomepagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllHomepagesMetaArgs>>;
  _allProductDescriptionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllProductDescriptionsMetaArgs>>;
  _allProductsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllProductsMetaArgs>>;
  _allReviewsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllReviewsMetaArgs>>;
  _allSocialsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllSocialsMetaArgs>>;
  _allTrendingAppsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTrendingAppsMetaArgs>>;
  _allUpdatesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUpdatesMetaArgs>>;
  _allUserAppsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUserAppsMetaArgs>>;
  _allUserProductsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUserProductsMetaArgs>>;
  _allUserProfilesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUserProfilesMetaArgs>>;
  _allUsersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUsersMetaArgs>>;
  allAppStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppStat']>>>, ParentType, ContextType, Partial<QueryAllAppStatsArgs>>;
  allCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, Partial<QueryAllCategoriesArgs>>;
  allFeaturedApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeaturedApp']>>>, ParentType, ContextType, Partial<QueryAllFeaturedAppsArgs>>;
  allHomeCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomeCategory']>>>, ParentType, ContextType, Partial<QueryAllHomeCategoriesArgs>>;
  allHomepages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Homepage']>>>, ParentType, ContextType, Partial<QueryAllHomepagesArgs>>;
  allProductDescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductDescription']>>>, ParentType, ContextType, Partial<QueryAllProductDescriptionsArgs>>;
  allProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryAllProductsArgs>>;
  allReviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, Partial<QueryAllReviewsArgs>>;
  allSocials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Social']>>>, ParentType, ContextType, Partial<QueryAllSocialsArgs>>;
  allTrendingApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrendingApp']>>>, ParentType, ContextType, Partial<QueryAllTrendingAppsArgs>>;
  allUpdates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Update']>>>, ParentType, ContextType, Partial<QueryAllUpdatesArgs>>;
  allUserApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserApp']>>>, ParentType, ContextType, Partial<QueryAllUserAppsArgs>>;
  allUserProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserProduct']>>>, ParentType, ContextType, Partial<QueryAllUserProductsArgs>>;
  allUserProfiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserProfile']>>>, ParentType, ContextType, Partial<QueryAllUserProfilesArgs>>;
  allUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryAllUsersArgs>>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  Product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Social'] = ResolversParentTypes['Social']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  userBanner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrendingAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrendingApp'] = ResolversParentTypes['TrendingApp']> = {
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  bannerImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  social?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Update'] = ResolversParentTypes['Update']> = {
  Product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  Products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  Reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  TrendingApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrendingApp']>>>, ParentType, ContextType>;
  Updates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Update']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  userBanner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserApp'] = ResolversParentTypes['UserApp']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProduct'] = ResolversParentTypes['UserProduct']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  banner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  social?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AppStat?: AppStatResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  FeaturedApp?: FeaturedAppResolvers<ContextType>;
  HomeCategory?: HomeCategoryResolvers<ContextType>;
  Homepage?: HomepageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDescription?: ProductDescriptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
  TrendingApp?: TrendingAppResolvers<ContextType>;
  Update?: UpdateResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserApp?: UserAppResolvers<ContextType>;
  UserProduct?: UserProductResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
};

