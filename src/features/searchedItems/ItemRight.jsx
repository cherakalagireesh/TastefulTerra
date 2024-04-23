import { useState } from "react";

export default function ItemRight() {
  const [isAdd, setIsAdd] = useState(false);
  let [count, setCount] = useState(0);

  function handleLeftClick() {
    setCount(() => count--);
  }

  function handleRightClick() {
    setCount(() => count++);
  }

  function handleClick() {
    setIsAdd(!isAdd);
  }

  return (
    <div className="w-2/6 flex flex-col gap-2 justify-center items-center ">
      <img
        src="/public/item.webp"
        alt=""
        className="w-full md:w-4/5 object-fill rounded-lg shadow-xl"
      />
      <div>
        {isAdd ? (
          <div className=" w-[6rem]   text-center text-white text-sm   transition-all flex ">
            <button
              type="button "
              className={`bg-blue-500 hover:bg-blue-600 w-1/3 p-1 transition-all rounded-tl-md rounded-bl-md ${
                count === 0 ? "cursor-not-allowed" : ""
              }`}
              onClick={handleLeftClick}
            >
              -
            </button>
            <span className="w-1/3 p-1 bg-blue-500 ">
              {count <= 0 ? 0 : count}
            </span>
            <button
              type="button"
              className="w-1/3 p-1 hover:bg-blue-600 bg-blue-500 transition-all rounded-tr-md rounded-br-md"
              onClick={handleRightClick}
            >
              +
            </button>
          </div>
        ) : (
          <span
            className="bg-blue-500 w-[5rem] block p-1 text-center text-white rounded-md text-sm cursor-pointer hover:bg-blue-600 transition-all"
            onClick={handleClick}
          >
            Add
          </span>
        )}
      </div>
    </div>
  );
}
