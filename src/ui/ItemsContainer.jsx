const ItemsContainer = ({ children }) => {
  return (
    <div className=" w-full flex justify-center flex-wrap lg:gap-4 lg:py-4 gap-2 ">
      {children}
    </div>
  );
};

export default ItemsContainer;
