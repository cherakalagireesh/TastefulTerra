export default function Container({ children }) {
  return (
    <div className=" lg:max-w-[1280px] container mx-auto flex flex-col justify-center lg:gap-4 lg:py-4 gap-2 p-2 lg:px-0 ">
      {children}
    </div>
  );
}
