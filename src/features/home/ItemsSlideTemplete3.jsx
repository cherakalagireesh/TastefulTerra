const ItemsSlideTemplete3 = ({ data }) => {
  return (
    <div className="lg:w-[12rem] md:w-[10rem] w-[8rem] h-[8rem] md:h-[10rem] lg:h-[12rem]  flex  rounded-xl overflow-hidden">
      <div className=" w-[30rem] h-full relative rounded-l-xl">
        <img
          src={data.image}
          alt=""
          className="w-full h-full rounded-l-xl object-fill"
        />
      </div>
    </div>
  );
};

export default ItemsSlideTemplete3;
