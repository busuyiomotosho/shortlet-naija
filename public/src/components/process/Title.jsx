import { useAppStore } from "airbnb/store/store";
import React from "react";

const Title = () => {
  const { title, setTitle } = useAppStore();
  return (
    <div className="flex items-center justify-center h-full text-airbnb-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">
            What would you like to name your house?
          </h2>
          <p>
            Short titles are the best. Feel free to have fun with it, you can
            always update it later.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="border border-gray-400 w-[50vw] rounded-lg active:border-gray-950 p-6 no-scrollbar text-4xl"
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= 32) {
                setTitle(e.target.value);
              }
            }}
          />
          <span>{title.length}/32</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
