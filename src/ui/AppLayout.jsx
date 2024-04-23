import { useState } from "react";

import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Main from "./Main";

const AppLayout = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="w-full h-screen flex md:gap-4 bg-gray-50 lg:p-4 flex-col-reverse justify-between md:flex-row ">
      <NavigationBar handleToggle={handleToggle} toggle={toggle} />
      <div className="w-full lg:w-div">
        <Header handleToggle={handleToggle} toggle={toggle} />
        <Main />
      </div>
    </div>
  );
};

export default AppLayout;
