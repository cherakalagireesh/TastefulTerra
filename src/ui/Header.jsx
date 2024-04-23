import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Search from "./Search";
import HeaderMenu from "./HeaderMenu";

export default function Header({ handleToggle }) {
  return (
    <header className=" bg-white flex justify-between items-center lg:justify-evenly gap-2 p-2 shadow-lg rounded-xl ">
      <div
        className="w-10 h-10  hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer hidden md:flex justify-center items-center lg:hidden rounded-md"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} className="text-lg" />
      </div>
      <div className="flex relative md:hidden">
        <span className="w-10 h-6 bg-blue-600 rounded-full text-white grid place-items-center text-sm">
          T T
        </span>
      </div>
      <Search />
      <HeaderMenu />
    </header>
  );
}
