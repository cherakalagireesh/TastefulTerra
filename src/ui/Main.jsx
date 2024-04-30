import SearchedItems from "../pages/SearchedItems.jsx";
import Container from "./Container.jsx";
import Menu from "../pages/Menu.jsx";
import Modal from "./Modal.jsx";
import CabinDetails from "./CabinDetails.jsx";
import Cabins from "../pages/Cabins.jsx";
import Spinner from "./Spinner.jsx";
import Reviews from "../pages/Reviews.jsx";
import Home from "../pages/Home.jsx";
import items from "../Data/items.js";
import Loader from "./Loader.jsx";
import Message from "./Message.jsx";
import Button from "./Button.jsx";

export default function Main() {
  console.log(items);
  return (
    <main className="h-main-sm md:h-main-md lg:h-main-lg overflow-y-auto relative overflow-hidden">
      <Container>
        <Home />
        <SearchedItems />
        <Menu />
        <Cabins />
        {/* <Modal>
          <CabinDetails />
        </Modal> */}
        {/* <Spinner /> */}
        {/* <Reviews /> */}
        {/* <Loader /> */}
        <Message status={true}>Successfully Login🥇</Message>
        <Button color="red"> Login</Button>
      </Container>
    </main>
  );
}
