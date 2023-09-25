import { useAppStore } from "airbnb/store/store";
import React from "react";

const Description = () => {
  const { description, setDescription } = useAppStore();
  return (
    <div className="flex items-center justify-center h-full text-airbnb-light-black">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">
          Describe your house in a few lines.
        </h2>
        <p>Tell your future clients what makes your place special.</p>
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          className="border border-gray-400 h-56 w-[50vw] rounded-lg active:border-gray-950 p-6 no-scrollbar"
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setDescription(e.target.value);
            }
          }}
        />
        <span>{description.length}/500</span>
      </div></div>
    </div>
  );
};

export default Description;
