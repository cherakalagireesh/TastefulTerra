import Category from "../features/menu/Category";
import categoriesTable from "../Data/categoriesTable.js";

export default function Menu() {
  return (
    <div className=" lg:max-w-[1280px] container mx-auto flex justify-center flex-wrap gap-3 p-2 ">
      {categoriesTable.map((data) => {
        return <Category data={data} key={data.category_id} />;
      })}
    </div>
  );
}
