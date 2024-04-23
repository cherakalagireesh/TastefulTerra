const Spinner = () => {
  return (
    <div>
      Spinner
      {Array.from({ length: 5 }).map((_, index) => (
        <Line key={index} />
      ))}
    </div>
  );
};

const Line = () => <div></div>;

export default Spinner;
