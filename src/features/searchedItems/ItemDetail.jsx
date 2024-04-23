export default function ItemDetail() {
  return (
    <div className="md:w-[45rem] bg-white shadow-xl rounded-xl p-4 flex gap-2 text-sm  justify-center md:justify-between items-center flex-wrap">
      <img
        src="/public/cat-img-2.jpeg"
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <span>Tandoori Chicken Pizza (8inch)</span>
      <span>₹ 200</span>
      <span>Qty : 5</span>
      <span className="px-2 bg-green-500 rounded-full text-white ">
        Total - ₹ 1300
      </span>
      <button className="px-2 p-1 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all">
        Remove
      </button>
    </div>
  );
}
