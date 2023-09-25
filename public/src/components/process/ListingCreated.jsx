import { createListingAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ListingCreated = () => {
  const router = useRouter();
  const {
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmenities,
    images,
    title,
    description,
    price,
  } = useAppStore();

  useEffect(() => {
    createListingAPI({
      listingCreatedBy: { id: userInfo?.id },
      locationType: locationType.name,
      placeType: placeType.title,
      mapData,
      locationData,
      placeSpace,
      placeAmenities,
      images,
      title,
      description,
      price,
    });
  }, [
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmenities,
    images,
    title,
    description,
    price,
  ]);
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Awesome! Listing Created!</h2>
        <p>
          Your listing has been created. You can now view it in your dashboard.
        </p>
        <div className="flex gap-5">
          <button
            className="bg-[#222222] py-2 mt-5 px-5 text-white text-base font-medium rounded-full cursor-pointer"
            onClick={() => router.push("/")}
          >
            Go to Home
          </button>
          <button
            className="bg-airbnb-gradient py-2 mt-5 px-5 text-white text-base font-medium rounded-full cursor-pointer"
            onClick={() => router.push("/my-listings")}
          >
            View Dashboard
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default ListingCreated;
