export default function Button({ children, color = "blue", type = "button" }) {
  return (
    <button
      type={type}
      className={`w-full bg-${color}-500 hover:bg-${color}-600 transition-all font-medium text-white rounded-md text-sm sm:text-base lg:text-lg p-3 sm:px-4 lg:px-6 lg:py-3 mt-3`}
    >
      {children}
    </button>
  );
}
