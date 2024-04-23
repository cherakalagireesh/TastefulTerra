import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const images = [
  { id: 1, url: "public/image.jpg" },
  { id: 2, url: "public/image.jpg" },
  { id: 3, url: "public/image.jpg" },
  { id: 4, url: "public/image.jpg" },
  { id: 5, url: "public/image.jpg" },
  { id: 6, url: "public/image.jpg" },
  { id: 7, url: "public/image.jpg" },
  { id: 8, url: "public/image.jpg" },
  { id: 9, url: "public/image.jpg" },
];

console.log(images[0].url);

export default function ReviewSlide() {
  const [val, setVal] = useState(0);

  function handlePrev() {
    setVal(val === 0 ? 0 : val - 1);
    console.log(val);
  }

  function handleNext() {
    setVal(val === images.length - 1 ? images.length - 1 : val + 1);
    console.log(val);
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-2 -translate-x-[${val * 7.5}rem]  transition-all`}
        style={{ width: `${images.length * 7.5}rem` }}
      >
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=""
              key={index}
              className="w-[7rem] h-[7rem] rounded-md "
            />
          );
        })}
      </div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="absolute top-1/2 left-0 -translate-y-1/2 border p-2 text-sm md:text-base lg:text-lg rounded-full ml-1 bg-slate-50 cursor-pointer"
        onClick={handlePrev}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 border p-2 text-sm md:text-base lg:text-lg rounded-full mr-1 bg-slate-50 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
