import React from "react";
import { server } from "../../lib/api";

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
      rating
    }
  }
`;
interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchLinstings = async () => {
    const {data} = await server.fetch({ query: LISTINGS });
    console.log(data);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchLinstings}>Query Lisitngs</button>
    </div>
  );
};
