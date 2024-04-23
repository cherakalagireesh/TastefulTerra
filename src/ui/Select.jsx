export default function Select({ options }) {
  return (
    <select className=" rounded-md transition-all px-2 py-1 hover:border-blue-600 text-sm ">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
