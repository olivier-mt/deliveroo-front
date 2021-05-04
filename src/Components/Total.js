const Total = ({ basket }) => {
  const total = 0;

  basket.map((elem) => {
    total += elem.price * elem.quantity;
  });

  return <div>{total}</div>;
};

export default Total;
