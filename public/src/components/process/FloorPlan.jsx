import { useAppStore } from "airbnb/store/store";
import React from "react";

const FloorPlan = () => {
  const { placeSpace, setPlaceSpace } = useAppStore();

  const handleIncrement = (type) =>
    setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] + 1 });

  const handleDecrement = (type) =>
    setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] - 1 });
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-4xl">
            Share some basics about your place
          </h2>
          <p>Some other details, such as bed types, can be added later.</p>
        </div>
        <div className="flex flex-col w-[45vw] gap-5">
          {Object.keys(placeSpace).map((place) => (
            <div
              key={place}
              className="flex justify-between w-[full] text-lg items-center"
            >
              <span className="capitalize">{place}</span>
              <div className="flex gap-10 items-center justify-between w-48">
                <button
                  className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
                  onClick={() => handleDecrement(place)}
                >
                  -
                </button>
                <button>{placeSpace[place]}</button>
                <button
                  className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
                  onClick={() => handleIncrement(place)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
