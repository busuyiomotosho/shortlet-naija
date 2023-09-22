"use client";
import Description from "airbnb/components/process/Description";
import FloorPlan from "airbnb/components/process/FloorPlan";
import Images from "airbnb/components/process/Images";
import ListingCreated from "airbnb/components/process/ListingCreated";
import ListingPlaceType from "airbnb/components/process/ListingPlaceType";
import ListingTypeSelector from "airbnb/components/process/ListingTypeSelector";
import Overview from "airbnb/components/process/Overview";
import PlaceDetails from "airbnb/components/process/PlaceDetails";
import PlaceLocation from "airbnb/components/process/PlaceLocation";
import Price from "airbnb/components/process/Price";
import ProcessAmenities from "airbnb/components/process/ProcessAmenities";
import StepOneStarter from "airbnb/components/process/StepOneStarter";
import StepThreeStarter from "airbnb/components/process/StepThreeStarter";
import StepTwoStarter from "airbnb/components/process/StepTwoStarter";
import Title from "airbnb/components/process/Title";
import AirBnbLogoShort from "airbnb/svg/airbnb-logo-short";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceLocation />;
      case 5:
        return <PlaceDetails />;
      case 6:
        return <FloorPlan />;
      case 7:
        return <StepTwoStarter />;
      case 8:
        return <ProcessAmenities />;
      case 9:
        return <Images />;
      case 10:
        return <Title />;
      case 11:
        return <Description />;
      case 12:
        return <StepThreeStarter />;
      case 13:
        return <Price />;
      case 14:
        return <ListingCreated />;
      default:
        return <></>;
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="grid grid-rows-new-listing h-[100vh]">
      <header className="flex items-center px-20 justify-between">
        <div className="cursor-pointer">
          <AirBnbLogoShort />
        </div>
        {step <= 13 && (
          <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
            Save & Exit
          </button>
        )}
      </header>
      {getComponent()}
      <footer
        className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${
          step > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {step >= 1 && (
          <button
            className="py-2 mt-5 px-5 text-airbnb-light-black underline hover:bg-gray-200 text-base font-medium rounded-full cursor-pointer"
            onClick={handlePrevious}
          >
            Back
          </button>
        )}
        {step !== 0 ? (
          <button
            className="bg-[#222222] py-2 mt-5 px-5 text-white text-base font-medium rounded-full cursor-pointer"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-airbnb-gradient py-2 mt-5 px-5 text-white text-base font-medium rounded-full cursor-pointer"
            onClick={handleNext}
          >
            Get Started
          </button>
        )}
      </footer>
    </div>
  );
};

export default page;
