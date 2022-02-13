export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Listing = {
  __typename?: 'Listing';
  address: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  numOfBaths: Scalars['Int'];
  numOfBeds: Scalars['Int'];
  numOfGuests: Scalars['Int'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteListing: Listing;
};


export type MutationDeleteListingArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  listings: Array<Listing>;
};
