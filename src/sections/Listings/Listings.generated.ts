import * as Types from '../../types';

import gql from 'graphql-tag';
export type ListingsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ListingsQuery = { __typename?: 'Query', listings: Array<{ __typename?: 'Listing', id: string, title: string, image: string, address: string, price: number, numOfGuests: number, numOfBeds: number, numOfBaths: number, rating: number }> };

export type DeleteListingMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteListingMutation = { __typename?: 'Mutation', deleteListing: { __typename?: 'Listing', id: string } };


export const Listings = gql`
    query Listings {
  listings {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numOfBaths
    rating
  }
}
    `;
export const DeleteListing = gql`
    mutation DeleteListing($id: ID!) {
  deleteListing(id: $id) {
    id
  }
}
    `;