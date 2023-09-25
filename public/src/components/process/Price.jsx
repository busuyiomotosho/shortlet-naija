import { useAppStore } from "airbnb/store/store";
import React from "react";

const Price = () => {
  const { price, setPrice } = useAppStore();
  return (
    <div className="flex items-center justify-center h-full text-airbnb-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Set your price</h2>
          <p>
            Set how much guest should pay per night, this can also be changed
            later.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            className="border border-gray-400 w-[50vw] rounded-lg active:border-gray-950 p-6 no-scrollbar text-4xl"
            value={price}
            onChange={(e) => {
              if (e.target.value) {
                setPrice(parseInt(e.target.value));
              } else setPrice(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
