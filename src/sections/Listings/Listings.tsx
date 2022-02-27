import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, Avatar, Button, List, Spin } from "antd";
import {
  LISTINGS,
  DELETE_LISTING,
  ListingsQuery,
  DeleteListingMutation,
  DeleteListingMutationVariables,
} from "./Listings.generated";
import { ListingsSkeleton } from "./components";
import "./styles/Listing.css";

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const { data, loading, error, refetch } = useQuery<ListingsQuery>(LISTINGS);

  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError },
  ] = useMutation<DeleteListingMutation, DeleteListingMutationVariables>(
    DELETE_LISTING
  );

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ variables: { id } });
    refetch();
  };

  const listings = data ? data.listings : null;

  const listingsList = listings ? (
    <List
      itemLayout="horizontal"
      dataSource={listings}
      renderItem={(listing) => (
        <List.Item
          actions={[
            <Button
              danger={true}
              type="primary"
              onClick={() => handleDeleteListing(listing.id)}
            >
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={listing.title}
            description={listing.address}
            avatar={<Avatar src={listing.image} shape="square" size={48} />}
          />
        </List.Item>
      )}
    />
  ) : null;

  if (loading) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} error={true} />
      </div>
    );
  }

  const deleteListingErrorAlert = deleteListingError ? (
    <Alert
      type="error"
      message="Uh oh! Something went wrong - please try again later:("
      className="listings__alert"
    />
  ) : null;

  return (
    <div className="listings">
      <Spin spinning={deleteListingLoading}>
        {deleteListingErrorAlert}
        <h2>{title}</h2>
        {listingsList}
      </Spin>
    </div>
  );
};
