export default function Button({ children }) {
  return (
    <button
      type="submit"
      className={
        "w-full bg-blue-500 hover:bg-blue-600 transition-all font-medium text-white rounded-md text-sm md:text-base lg:text-lg p-2 mt-3"
      }
    >
      {children}
    </button>
  );
}
