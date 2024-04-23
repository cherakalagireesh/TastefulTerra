import FilterButton from "./FilterButton";
import FilterWrapper from "./FilterWrapper";

export default function Filters() {
  return (
    <FilterWrapper>
      <FilterButton>All</FilterButton>
      <FilterButton>Available</FilterButton>
      <FilterButton>Unavailable</FilterButton>
    </FilterWrapper>
  );
}
