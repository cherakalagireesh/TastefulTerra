import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discountCalc from "./discountCalc";

const ItemSlideTemplete1 = ({ data }) => {
  return (
    <div className="lg:w-[18rem] md:w-[15rem] w-[12rem] h-[15rem] md:h-[20rem] lg:h-[25rem] flex flex-col bg-white  rounded-xl overflow-hidden">
      <div className="w-full h-[60%] relative rounded-t-xl ">
        <img
          src={data.image}
          alt=""
          className="w-full h-full rounded-t-xl object-fill"
        />
        <span className="absolute bottom-0 p-2 md:p-4 font-extrabold text-sm md:text-lg lg:text-xl text-white">{`${
          data.discount
        }% OFF UPTO ₹ ${discountCalc(data.price, data.discount)}`}</span>
      </div>
      <div className="p-2 md:px-4 md:py-2 flex flex-col ">
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

export default ItemSlideTemplete1;
