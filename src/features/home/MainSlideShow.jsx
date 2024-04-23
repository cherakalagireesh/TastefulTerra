import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MainSlide from "./MainSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const slides = [
  {
    slideNumber: 1,
    quote:
      "Indulge in the moment, savor the flavors, and create unforgettable memories.",
    content:
      "Welcome to TasteTrove, where every dish tells a story and every meal is an experience. Step into our cozy restaurant, where warm hospitality meets exquisite cuisine. From the moment you walk through our doors, prepare to embark on a culinary journey like no other.",
    backgroundImage: "cozy-restaurant-interior.jpg",
  },
  {
    slideNumber: 2,
    quote:
      "In the kitchen, we dance to the rhythm of spices, crafting each dish with love and passion.",
    content:
      "Meet our talented chefs, masters of their craft and creators of culinary magic. With skillful hands and creative minds, they transform fresh ingredients into works of art that delight the senses and nourish the soul.",
    backgroundImage: "chef-cooking.jpg",
  },
  {
    slideNumber: 3,
    quote:
      "At TasteTrove, dining is not just a meal; it's a symphony of flavors orchestrated to perfection.",
    content:
      "Take a seat at our beautifully set table and prepare to be enchanted by the harmony of flavors that awaits you. Our attentive staff is dedicated to ensuring that every aspect of your dining experience is impeccable, from the first bite to the last.",
    backgroundImage: "elegant-dining-table.jpg",
  },
  {
    slideNumber: 4,
    quote:
      "Our dishes are not just food; they're expressions of love, crafted with care and served with passion.",
    content:
      "Dive into a world of culinary delights with our signature dishes, each lovingly prepared to tantalize your taste buds and leave you craving more. From mouthwatering steaks to decadent desserts, every bite is a celebration of flavor and tradition.",
    backgroundImage: "sizzling-steak.jpg",
  },
  {
    slideNumber: 5,
    quote:
      "At TasteTrove, diversity is our strength, and every meal is an opportunity to come together and celebrate our shared humanity.",
    content:
      "Join us at the table and experience the joy of communal dining, where friends and strangers alike gather to share stories, laughter, and of course, delicious food. Our restaurant is a melting pot of cultures and cuisines, where everyone is welcome.",
    backgroundImage: "diverse-dining-group.jpg",
  },
  {
    slideNumber: 6,
    quote: "Life is uncertain. Eat dessert first.",
    content:
      "Indulge your sweet tooth with our irresistible selection of desserts, each more tempting than the last. From decadent cakes to creamy gelato, our dessert menu is sure to satisfy even the most discerning palate.",
    backgroundImage: "tempting-desserts.jpg",
  },
  {
    slideNumber: 7,
    quote:
      "At TasteTrove, dining is more than just sustenance; it's a celebration of friendship, laughter, and the simple joys of life.",
    content:
      "Gather your friends and loved ones and join us for a memorable dining experience filled with laughter, good conversation, and, of course, great food. Our restaurant is the perfect setting for creating lasting memories and strengthening bonds.",
    backgroundImage: "friends-dining.jpg",
  },
  {
    slideNumber: 8,
    quote:
      "We believe that good food starts with fresh ingredients, sourced locally and prepared with care.",
    content:
      "At TasteTrove, quality is our top priority, which is why we source the finest ingredients from local farmers and producers whenever possible. From farm-fresh produce to sustainably sourced seafood, we believe that every dish begins with the best ingredients.",
    backgroundImage: "farmers-market.jpg",
  },
  {
    slideNumber: 9,
    quote:
      "Sharing food is a universal language that transcends borders and brings people together in a spirit of warmth and generosity.",
    content:
      "Experience the joy of sharing a meal with loved ones as you sample our delectable dishes and savor the flavors of friendship. At TasteTrove, we believe that food has the power to create connections and foster a sense of community.",
    backgroundImage: "sharing-food.jpg",
  },
  {
    slideNumber: 10,
    quote:
      "In our kitchen, every dish is a labor of love, crafted with care and attention to detail to ensure that every bite is a moment to remember.",
    content:
      "Step behind the scenes and discover the heart and soul of TasteTrove, where our dedicated team works tirelessly to create culinary masterpieces that delight and inspire. From the kitchen to your table, we pour our passion into every dish we serve.",
    backgroundImage: "kitchen-scene.jpg",
  },
];

const MainSlideShow = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const handleNext = () => {
    setCurrSlide((currSlide) => currSlide + 1);
  };

  const handlePrev = () => {
    setCurrSlide((currSlide) => currSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((currSlide) => (currSlide % slides.length) + 1);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="w-full overflow-hidden relative rounded-xl">
      <div
        className={`flex`}
        style={{
          transform: `translateX(-${(currSlide - 1) * 10}%)`,
          transition: `all 1s`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <MainSlide key={index} data={slide} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-50">
        <button
          className={`flex gap-2 justify-center items-center ${
            currSlide === 1 ? "hidden" : ""
          }`}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="italic hidden md:block">Prev</span>
        </button>
        <div className="flex gap-2 md:gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className={`block ${
                index === currSlide - 1 ? "w-5" : "w-2"
              } h-2 rounded-full bg-gray-50 cursor-pointer`}
            ></span>
          ))}
        </div>
        <button
          className={`flex gap-4 justify-center items-center ${
            currSlide === 10 ? "hidden" : ""
          }`}
          onClick={handleNext}
        >
          <span className="italic hidden md:block">Next</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default MainSlideShow;
