import React from "react";

const Loader = () => {
  return (
    <div
      class="self-center items-center inline-block h-10 w-10  md:h-9 md:w-9 lg:h-10 lg:w-10  animate-spin rounded-full border-4 md:border-[5px] border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] border-blue-700"
      role="status"
    ></div>
  );
};

export default Loader;
