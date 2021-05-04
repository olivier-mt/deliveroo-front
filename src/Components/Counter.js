const Counter = ({ basket, setBasket, quantity, index }) => {
  const handlePlus = () => {
    const newBasket = [...basket];

    newBasket[index].quantity += 1;

    setBasket(newBasket);
  };

  const handleMinus = () => {
    const newBasket = [...basket];

    newBasket[index].quantity -= 1;

    {
      newBasket[index].quantity === 0 && newBasket.splice(index, 1);
    }

    setBasket(newBasket);
  };

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <span>{quantity}</span>
      <button onClick={handlePlus}>+</button>
    </>
  );
};

export default Counter;
