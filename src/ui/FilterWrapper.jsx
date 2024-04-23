export default function FilterWrapper({ children }) {
  return (
    <div className="p-1 bg-white shadow-lg rounded-lg flex gap-2 justify-between">
      {children}
    </div>
  );
}
