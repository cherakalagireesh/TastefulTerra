export default function ReviewDescription() {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Provident, fuga nulla ipsum vero est officia vitae eos adipisci non, amet explicabo tempore quam eum totam velit deleniti debitis inventore! Explicabo unde odit ad atque reiciendis quis alias magnam accusamus, \n ullam expedita possimus laborum nisi ducimus quam ea sunt, dolores odio.".split(
      "\n"
    );

  return (
    <div className="flex flex-col gap-2">
      {description.map((para) => (
        <p className="text-xs md:text-sm lg:text-md text-justify">{para}</p>
      ))}
    </div>
  );
}
