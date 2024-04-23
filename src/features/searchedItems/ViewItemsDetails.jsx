import ItemDetail from "./ItemDetail";

export default function ViewItemsDetails() {
  return (
    <div className=" flex justify-center flex-wrap gap-3 p-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <ItemDetail />
      ))}
    </div>
  );
}
