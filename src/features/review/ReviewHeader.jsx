import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ReviewHeader() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="w-[3rem] h-[3rem] rounded-full mr-4">
          <img
            src="\public\image.jpg"
            alt=""
            className="w-full h-full rounded-full object-fill"
          />
        </div>
        <div className="flex flex-col text-[12px] font-medium">
          <span className="flex divide-x divide-gray-300 ">
            <span className="mr-1 ">gireesh</span>
            <span className="pl-1">c-101</span>
          </span>
          <span className="flex divide-x divide-gray-300">
            <span className="mr-1">photos</span>
            <span className="pl-1">101</span>
          </span>
        </div>
      </div>
      <div className="relative">
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className={`w-5 h-5  p-1 rounded-md hover:bg-slate-50 cursor-pointer ${
            toggle ? "bg-slate-50" : ""
          }`}
          onClick={handleToggle}
        />
        <div
          className={`absolute top-7 right-2 w-[7rem] border flex flex-col rounded-md shadow-lg py-2 px-1 text-sm ${
            toggle ? " opacity-100 transition-all" : "opacity-0"
          }`}
        >
          <button type="button" className="hover:bg-slate-50 py-1">
            Edit
          </button>
          <button type="button" className="hover:bg-slate-50  py-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
