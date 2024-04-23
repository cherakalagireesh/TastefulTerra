export default function SortBysWrapper({ children }) {
  return (
    <div className="p-1 bg-white shadow-lg rounded-lg flex gap-2 flex-wrap justify-center">
      {children}
    </div>
  );
}
