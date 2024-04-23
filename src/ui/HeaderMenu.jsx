import { useState } from "react";

import {
  faEllipsisVertical,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderMenu() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="text-sm md:text-base relative">
      <div
        className="w-10 h-10  hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer flex justify-center items-center rounded-md md:hidden"
        onClick={handleToggle}
      >
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          onClick={handleToggle}
          className="text-lg"
        />
      </div>

      <div
        className={`md:flex gap-2 absolute top-full right-0 flex-col bg-white w-44 p-2 shadow-xl rounded-lg md:relative md:top-0 md:right-0 md:flex-row md:bg-none md:w-auto md:p-0 md:shadow-none md:rounded-none ${
          toggle ? "" : "hidden transition-all "
        } text-xs md:text-sm`}
      >
        <div className="flex gap-2 h-10 items-center px-2 hover:bg-gray-100 rounded-md transition-all cursor-pointer">
          <img
            src="/public/image.jpg"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span>cab001</span>
        </div>
        <div className="flex gap-2 h-10 items-center px-2 hover:bg-gray-100 rounded-md transition-all cursor-pointer">
          <img
            src="/public/image.jpg"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span>gireesh yadav</span>
        </div>
        <div className="flex gap-2 h-10 items-center px-2 hover:bg-gray-100 rounded-md transition-all cursor-pointer">
          <FontAwesomeIcon icon={faSignOut} className="text-blue-600" />
          <span>SignOut</span>
        </div>
      </div>
    </div>
  );
}
