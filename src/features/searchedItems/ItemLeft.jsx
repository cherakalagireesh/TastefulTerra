import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ItemLeft() {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
    console.log(showMore);
  }

  return (
    <div className="flex flex-col gap-2 w-4/6 items-start">
      <span className="text-sm font-medium">
        Tandoori Chicken Pizza (8inch){" "}
      </span>
      <span className="text-sm font-medium">
        <FontAwesomeIcon icon={faStar} className="text-gray-600" />
        <span className="text-gray-500 ml-2">3.4</span>
      </span>
      <span className="text-sm font-medium p-1 bg-green-500 rounded-md hover:bg-green-600 text-white ">
        ₹ 299
      </span>
      <p
        className={`text-xs text-gray-400  overflow-hidden ${
          showMore ? "" : "line-clamp-2"
        }`}
      >
        A flavorful fusion of Indian and Italian cuisine, this non-veg delight
        is a perfect blend of succulent tandoori chicken and mouthwatering pizza
        goodness.
      </p>
      <span
        className="text-sm text-gray-700 cursor-pointer italic "
        onClick={handleClick}
      >
        {`${showMore ? "Less" : "More"}`}
      </span>
    </div>
  );
}
