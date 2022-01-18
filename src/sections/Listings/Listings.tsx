import React from "react";
import { server } from "../../lib/api";
import {
  DeleteListingData,
  DeleteListingVariables,
  ListingsData,
} from "./types";

const LISTINGS = `
  query Listings{
    listings{
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

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!){
    deleteListing(id: $id){
      id
    }
  }
`;
interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchLinstings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  };
  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
      variables: {
        id: "61e31f3cf3593309e5185566",
      },
    });

    console.log(data);
  };
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchLinstings}>Query Listings</button>
      <button onClick={deleteListing}>Delete a Listing</button>
    </div>
  );
};
