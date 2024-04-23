export default function Input({ type = "text", id, error = false }) {
  return (
    <input
      type={`${type}`}
      id={id}
      className={`w-full border${error ? "-2" : ""} border-${
        error ? "red" : "gray"
      }-${
        error ? 600 : 300
      } rounded-md focus:outline-none focus:border-2 focus:border-blue-600 transition-all  p-2  font-normal text-gray-700 mt-2 text-sm md:text-base lg:text-lg`}
      required
    />
  );
}
