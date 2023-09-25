import { useAppStore } from "airbnb/store/store";
import React from "react";
import ListingCard from "../listingCard";

const ListView = () => {
  const { listings } = useAppStore();
  return (
    <div className="grid grid-cols-5 px-20 gap-10 py-10 justify-start items-start">
      {listings.map((listing, index) => (
        <ListingCard key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default ListView;
