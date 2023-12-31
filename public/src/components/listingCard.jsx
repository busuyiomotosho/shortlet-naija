import Image from "next/image";
import React from "react";

const ListingCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="flex items-center justify-center cursor-pointer w-full">
        <div className="flex flex-col gap-2">
          <div className="relative w-64 h-56">
            <Image
              src={data.images[0]}
              fill
              alt="listing"
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h3>{data.title}</h3>
            <span>₦{data.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
