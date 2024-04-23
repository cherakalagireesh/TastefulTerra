import FilterButton from "../ui/FilterButton";
import FilterWrapper from "../ui/FilterWrapper";
import Select from "../ui/Select";
import SortBysWrapper from "../ui/SortBysWrapper";

export default function Cabins() {
  const cabinCategories = [
    {
      name: "Standard Cabin",
      description: "Comfortable cabins for individuals or couples.",
      minCapacity: 1,
      maxCapacity: 2,
      occupancy: "Single or Couple",
      cabinNo: "CAB001",
      cost: 150, // Cost per night (in your currency)
      image: "url_of_standard_cabin_image.jpg",
    },
    {
      name: "Deluxe Cabin",
      description: "Luxurious suites with premium amenities.",
      minCapacity: 2,
      maxCapacity: 4,
      occupancy: "Couple or Small Family",
      cabinNo: "CAB002",
      cost: 300, // Cost per night (in your currency)
      image: "url_of_deluxe_suite_image.jpg",
    },
    {
      name: "Family Cabin",
      description: "Spacious cabins for families or small groups.",
      minCapacity: 3,
      maxCapacity: 6,
      occupancy: "Family or Group",
      cabinNo: "CAB003",
      cost: 400, // Cost per night (in your currency)
      image: "url_of_family_cabin_image.jpg",
    },
    {
      name: "Luxury Cabin",
      description: "Extravagant villas with private amenities.",
      minCapacity: 6,
      maxCapacity: 10,
      occupancy: "Large Group",
      cabinNo: "CAB004",
      cost: 500, // Cost per night (in your currency)
      image: "url_of_luxury_villa_image.jpg",
    },
  ];

  const categoryOptions = [
    "Standard Cabin",
    "Family Cabin",
    "Deluxe Cabin",
    "Luxury Cabin",
  ];

  return (
    <div>
      <div>
        <FilterWrapper>
          <FilterButton>All</FilterButton>
          <FilterButton>Booked</FilterButton>
          <FilterButton>Unbooked</FilterButton>
        </FilterWrapper>
        <SortBysWrapper>
          <Select options={categoryOptions} />
        </SortBysWrapper>
      </div>

      <div></div>
    </div>
  );
}
