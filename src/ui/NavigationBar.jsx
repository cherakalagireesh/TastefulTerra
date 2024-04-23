import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar({ handleToggle, toggle }) {
  return (
    <aside
      className={` bg-white w-full  md:w-[15rem] md:h-full rounded-xl shadow-xl md:absolute md:top-0 md:left-0 lg:relative lg:translate-x-0 p-1 md:p-2 ${
        toggle ? "" : "md:-translate-x-[120%]"
      } transition-all `}
    >
      <ul className="flex md:flex-col justify-evenly items-center w-full ">
        <div
          className="w-10 h-10  hover:bg-gray-100 hover:text-blue-500 transition-all cursor-pointer hidden md:flex justify-center items-center lg:hidden rounded-md self-end"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <NavLogo />
        <li>
          <NavLink icon={"faHome"} name={"Home"} />
        </li>
        <li>
          <NavLink icon={"faUtensils"} name={"Menu"} />
        </li>
        <li>
          <NavLink icon={"faCartShopping"} name={"Cart"} />
        </li>
        <li>
          <NavLink icon={"faHistory"} name={"History"} />
        </li>
        <li>
          <NavLink icon={"faStar"} name={"Reviews"} />
        </li>
      </ul>
    </aside>
  );
}
