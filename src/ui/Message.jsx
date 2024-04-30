import { useEffect, useState } from "react";

const Message = ({ children, status = true }) => {
  const [isVisible, setVisible] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const visibleTimeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    const widthInterval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(widthInterval);
          return prevWidth;
        }
        return prevWidth + 0.5;
      });
    }, 10);

    return () => {
      clearInterval(visibleTimeout);
      clearInterval(widthInterval);
    };
  }, []);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-2 absolute right-2 top-2 md:right-4 md:top-4 text-sm md:text-base font-medium transition-all  translate-x-[110%] ${
        isVisible ? "translate-x-[0%]" : ""
      }`}
    >
      {children}
      <span
        className={`block w-full h-1 bg-${
          status ? "green" : "red"
        }-600 mt-2 rounded-full`}
        style={{ width: `${width}%` }}
      ></span>
    </div>
  );
};

export default Message;
