export default function CabinDetails() {
  const cabinCategories = [
    {
      name: "Standard Cabin",
      description: "Cozy cabins for solo travelers or couples.",
      minCapacity: 1,
      maxCapacity: 2,
      occupancy: "Owner(s) or Couple",
      cabinNo: "CAB001",
      cost: 100, // Cost per night (in your currency)
      currentBooking: {
        owner: "John Doe",
        coMembers: ["Jane Doe"],
      },
    },
    {
      name: "Family Cabin",
      description: "Spacious cabins for families or small groups.",
      minCapacity: 3,
      maxCapacity: 6,
      occupancy: "Family or Group",
      cabinNo: "CAB002",
      cost: 200, // Cost per night (in your currency)
      currentBooking: {
        owner: "Smith Family",
        coMembers: ["John Smith", "Emily Smith", "David Smith"],
      },
    },
    {
      name: "Deluxe Suite",
      description: "Luxurious suites with premium amenities.",
      minCapacity: 2,
      maxCapacity: 4,
      occupancy: "Couple or Small Family",
      cabinNo: "CAB003",
      cost: 300, // Cost per night (in your currency)
      currentBooking: {
        owner: "Alice Johnson",
        coMembers: ["John Smith", "Emily Smith", "David Smith"],
      },
    },
    // Add more cabin categories here
  ];

  console.log(cabinCategories);

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
