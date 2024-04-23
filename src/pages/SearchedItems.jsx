import Filters from "../ui/Filters";
import SortBys from "../ui/SortBys";
import Items from "../features/searchedItems/Items";
import ViewItemsDetails from "../features/searchedItems/ViewItemsDetails";
import Pagination from "../ui/Pagination";

export default function SearchedItems() {
  return (
    <div className="flex flex-col gap-4  w-full">
      <div className="flex gap-2 self-center flex-wrap-reverse justify-end items-center">
        <Filters />
        <SortBys />
      </div>
      <Items />
      <Pagination />
      <div className="self-center flex gap-2">
        <button className="bg-blue-600 p-2 rounded-md text-white text-sm hover:bg-blue-700 transition-all">
          View Details
        </button>
        <button className="bg-red-600 p-2 rounded-md text-white text-sm hover:bg-red-700 transition-all">
          Add Cart
        </button>
      </div>
      <ViewItemsDetails />
    </div>
  );
}
