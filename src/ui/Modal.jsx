export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen z-10 h-screen backdrop-blur-[.2rem] ">
      {children}
    </div>
  );
}
