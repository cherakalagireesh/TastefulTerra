import {
  faArrowLeft,
  faCartShopping,
  faClipboardList,
  faHistory,
  faHome,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavLink({ icon, name }) {
  const iconObject = {
    faArrowLeft,
    faClipboardList,
    faHistory,
    faHome,
    faStar,
    faUtensils,
    faCartShopping,
  };

  return (
    <a
      href="a.html"
      className="flex justify-evenly md:justify-start md:ps-6 md:gap-4 items-center flex-col md:flex-row hover:bg-blue-700 hover:text-white md:w-[12rem] md:mt-3 md:h-10 rounded-md font-medium transition-all text-xs md:text-base h-12 text-gray-500 "
    >
      <FontAwesomeIcon
        icon={iconObject[icon]}
        className="w-4 h-4 md:w-5 md:h-5"
      />
      <span>{name}</span>
    </a>
  );
}
