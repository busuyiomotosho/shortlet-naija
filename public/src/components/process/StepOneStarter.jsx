import React from "react";

const StepOneStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <div className="text-2xl">Step 1</div>
          <h1 className="text-4xl">
            <strong>Tell us about your place</strong>
          </h1>
          <p className="text-xl">
            In this step, we need you to give us as much details about your
            property. For example, will guests be booking the entire place or
            just a room. Also, give us the location and state how many guests
            are allowed in the property.
          </p>
        </div>
        <div>
          <video src="/home.mp4" autoPlay loop controls={false} />
        </div>
      </div>
    </div>
  );
};

export default StepOneStarter;
