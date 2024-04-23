export default function ExitButton({ children, className = "" }) {
  return (
    <button
      type="button"
      className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md bg-blue-500 hover:bg-blue-600 text-sm md:text-base lg:text-lg text-white ${className}`}
    >
      {children}
    </button>
  );
}
