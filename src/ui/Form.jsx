export default function Form({ children }) {
  return (
    <form className="max-w-sm md:max-w-md lg:max-w-lg rounded-md  bg-white flex flex-col justify-center items-center px-6 pb-6  shadow-lg">
      {children}
    </form>
  );
}
