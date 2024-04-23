import MainSlideShow from "../features/home/MainSlideShow";
import ItemsSlideShow from "../features/home/ItemsSlideShow";
import Item from "../features/searchedItems/Item";

const Home = () => {
  return (
    <>
      <MainSlideShow />
      {/* <ItemsSlideShow
        templete={"templete3"}
        description={"What's On Your Mind"}
      /> */}
      {/* <ItemsSlideShow templete={"templete1"} description={"Today's Offer"} /> */}
      {/* <ItemsSlideShow templete={"templete2"} description={"Special Offer"} /> */}
      <ItemsSlideShow templete={"templete1"} description={"80% Off Above"} />
      <ItemsSlideShow templete={"templete2"} description={"50% - 80% Off"} />
      <ItemsSlideShow templete={"templete1"} description={"50% Below"} />
    </>
  );
};

export default Home;
