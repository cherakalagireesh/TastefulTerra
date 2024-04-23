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

export default function Main() {
  console.log(items);
  return (
    <main className="h-main-sm md:h-main-md lg:h-main-lg overflow-y-auto">
      <Container>
        <Home />
        {/* <SearchedItems /> */}
        {/* <Menu /> */}
        {/* <Cabins /> */}
        {/* <Modal>
          <CabinDetails />
        </Modal> */}
        {/* <Spinner /> */}
        {/* <Reviews /> */}
      </Container>
    </main>
  );
}
