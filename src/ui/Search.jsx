import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <form className="h-9 flex gap-2 ">
      <input
        type="search"
        placeholder="Search..."
        className="bg-gray-100 h-full rounded-full px-2 focus:border focus:outline-none focus:border-blue-700 text-xs md:text-sm  placeholder:tracking-wider transition-all tracking-wider max-w-md"
      />
      <button
        type="submit"
        className="w-9 h-full rounded-full bg-blue-600 hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
    </form>
  );
}
