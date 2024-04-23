export default function FilterButton({ children }) {
  return (
    <button className="px-2 py-1 hover:bg-blue-600 rounded-md transition-all hover:text-white text-sm">
      {children}
    </button>
  );
}
