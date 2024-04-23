import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";

export default function Item() {
  return (
    <div className=" w-full bg-white shadow-xl md:rounded-xl rounded-lg md:w-[47%] xl:w-[32%] flex gap-2 p-4">
      <ItemLeft />
      <ItemRight />
    </div>
  );
}
