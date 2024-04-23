import Select from "./Select";
import SortBysWrapper from "./SortBysWrapper";

export default function SortBys() {
  // Sort by Date
  const sortByDateOptions = ["Newest First", "Oldest First"];

  // Sort by Rating
  const sortByRatingOptions = ["Highest Rated", "Lowest Rated"];

  // Sort by Price
  const sortByPriceOptions = [
    "Price (Low to High)",
    "Price (High to Low)",
    "Price Range(500 below)",
    "Price Range(500 - 1000)",
    "Price Range(1000 below)",
  ];

  return (
    <SortBysWrapper>
      <Select options={sortByPriceOptions} />
      <Select options={sortByRatingOptions} />
      <Select options={sortByDateOptions} />
    </SortBysWrapper>
  );
}
