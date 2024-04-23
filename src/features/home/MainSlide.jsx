const MainSlide = ({ data }) => {
  //   const data = {
  //     slideNumber: 1,
  //     quote:
  //       "Indulge in the moment, savor the flavors, and create unforgettable memories.",
  //     content:
  //       "Welcome to TasteTrove, where every dish tells a story and every meal is an experience. Step into our cozy restaurant, where warm hospitality meets exquisite cuisine. From the moment you walk through our doors, prepare to embark on a culinary journey like no other.",
  //     backgroundImage: "/public/cozy-restaurant-interior.jpg",
  //   };

  return (
    <div className="w-[100%] lg:h-[30rem] rounded-xl relative shadow-lg ">
      <img
        src={data.backgroundImage}
        alt=""
        className="w-full h-full object-fill rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-gray-200 pb-8 md:p-12 lg:p-16 rounded-xl">
        <div className="text-center p-8">
          <p className="text-xl md:text-xl lg:text-2xl font-bold md:mb-4 mb-2 line-clamp-3 md:line-clamp-none">
            {data.quote}
          </p>
          <p className="text-sm md:text-base lg:text-lg line-clamp-3  md:line-clamp-none">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSlide;
