import React from "react";

const FormInput = ({
  name,
  type = "text",
  value,
  setValue,
  autofill,
  placeholder,
  isListing = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      autoComplete={autofill}
      onChange={(e) =>
        isListing ? setValue(name, e.target.value) : setValue(e.target.value)
      }
      className="border border-gray-300 px-2 py-4 rounded-md w-full"
    />
  );
};

export default FormInput;
