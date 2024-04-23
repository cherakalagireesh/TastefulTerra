export default function MainNav({ children }) {
  return (
    <ul className="flex md:flex-col justify-evenly items-center w-full ">
      {children}
    </ul>
  );
}
