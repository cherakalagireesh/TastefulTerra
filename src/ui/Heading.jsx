export default function Heading({ children }) {
  return (
    <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-gray-700 mb-6">
      {children}
    </h1>
  );
}
