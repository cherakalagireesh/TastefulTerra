import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discountCalc from "./discountCalc";

const ItemSlideTemplete2 = ({ data }) => {
  return (
    <div className="lg:w-[25rem] md:w-[20rem] w-[15rem] h-[10rem] md:h-[12rem] lg:h-[15rem]  flex  bg-white rounded-xl overflow-hidden">
      <div className=" w-[30rem] h-full relative rounded-l-xl">
        <img
          src={data.image}
          alt=""
          className="w-full h-full rounded-l-xl object-fill"
        />
        <span className="absolute bottom-0 p-2 md:p-4 font-extrabold text-sm md:text-lg lg:text-xl text-white">{`${
          data.discount
        }% OFF UPTO ₹ ${discountCalc(data.price, data.discount)}`}</span>
      </div>
      <div className="p-2 md:px-4 md:py-2 flex flex-col justify-center">
        <span className="font-medium text-sm md:text-base lg:text-lg ">
          {data.itemName}
        </span>
        <div className="text-xs md:text-sm lg:text-base flex gap-1 items-center">
          <FontAwesomeIcon icon={faStar} className="text-green-700" />
          <span>{data.rating}</span>
        </div>
        <span className="text-sm md:text-base font-medium">{`₹ ${data.price}`}</span>
        <p className="text-xs md:text-sm line-clamp-2 lg:line-clamp-3 text-gray-600">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ItemSlideTemplete2;
