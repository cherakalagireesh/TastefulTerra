import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import todayOffers from "./todayOffers.js";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ItemSlideTemplete1 from "./ItemSlideTemplete1.jsx";
import ItemSlideTemplete2 from "./ItemsSlideTemplete2.jsx";
import ItemsSlideTemplete3 from "./ItemsSlideTemplete3.jsx";
import data from "./data.js";

const templete1 = (description) => {
  return (
    <>
      <div className="flex justify-between px-2 md:px-4">
        <p className="font-medium text-base md:text-lg lg:text-xl">
          {description}
        </p>
        <div className="flex gap-9 md:gap-10">
          <button>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-base md:text-xl"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-base md:text-xl"
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-2 md:gap-4">
          {todayOffers.map((todayOffer, index) => (
            <ItemSlideTemplete1 data={todayOffer} key={index} />
          ))}
        </div>
      </div>
      <div className="flex gap-4 self-center bg-gray-200 w-[10rem] h-2 rounded-full">
        <span className="w-4 h-2 rounded-full block bg-gray-700"></span>
      </div>
    </>
  );
};

const templete2 = () => {
  return (
    <>
      <div className="flex overflow-hidden relative">
        <div className="flex gap-2 md:gap-4">
          {todayOffers.map((todayOffer, index) => (
            <ItemSlideTemplete2 data={todayOffer} key={index} />
          ))}
        </div>
        <button className=" absolute top-0 left-0 w-8 md:w-12 h-full">
          <span className="w-full h-full bg-black opacity-25 block rounded-l-xl"></span>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className=" font-bold text-base md:text-xl text-white absolute top-1/2 lef-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
        <button className="absolute top-0 right-0 w-8 md:w-12 h-full">
          <span className="w-full h-full bg-black opacity-25 block rounded-r-xl"></span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className=" font-bold text-base md:text-xl text-white absolute top-1/2 lef-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </div>
      <div className="flex gap-4 self-center bg-gray-200 w-[10rem] h-2 rounded-full">
        <span className="w-4 h-2 rounded-full block bg-gray-700"></span>
      </div>
    </>
  );
};

const templete3 = (description) => {
  return (
    <>
      <div className="flex justify-between px-2 md:px-4">
        <p className="font-medium text-base md:text-lg lg:text-xl">
          {description}
        </p>
        <div className="flex gap-9 md:gap-10">
          <button>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-base md:text-xl"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-base md:text-xl"
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-2 md:gap-4">
          {data.map((dt, index) => (
            <ItemsSlideTemplete3 data={dt} key={index} />
          ))}
        </div>
      </div>
      <div className="flex gap-4 self-center bg-gray-200 w-[10rem] h-2 rounded-full">
        <span className="w-4 h-2 rounded-full block bg-gray-700"></span>
      </div>
    </>
  );
};

const ItemsSlideShow = ({ templete, description }) => {
  return (
    <div className=" flex flex-col gap-2 lg:gap-4">
      {templete === "templete2" ? (
        <div className="flex justify-between px-2 md:px-4">
          <p className="font-medium text-base md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      ) : (
        ""
      )}
      {
        // {templete === "templete1" ? templete1(description) : templete2()}
        // templete3(description)
        templete1()
      }
    </div>
  );
};

export default ItemsSlideShow;
