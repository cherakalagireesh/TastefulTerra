import React from "react";

export default function FormRow({ children, label }) {
  const labelName = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="w-full mt-3">
      <label
        htmlFor={`${labelName}`}
        className="text-xs sm:text-sm md:text-sm lg:text-lg mt-4 text-gray-700 font-medium"
      >
        {labelName}
      </label>
      {children}
    </div>
  );
}
