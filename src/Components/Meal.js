const Meal = ({
  id,
  title,
  description,
  price,
  picture,
  popular,
  basket,
  setBasket,
  presentArticleId,
  setPresentArticleId,
}) => {
  const handleOnClick = () => {
    if (basket.length === 0) {
      const newBasket = [...basket];
      newBasket.push({ id: id, title: title, price: price, quantity: 1 });
      setBasket(newBasket);
    } else {
      let theIndex = -1;

      const newBasket = [...basket];

      newBasket.map((elem, index) => {
        if (elem.id === id) {
          theIndex = index;
        }
      });

      if (theIndex === -1) {
        newBasket.push({ id: id, title: title, price: price, quantity: 1 });
        setBasket(newBasket);
      } else {
        newBasket[theIndex].quantity += 1;
        setBasket(newBasket);
      }

      console.log("index==>", theIndex);
    }
  };

  return (
    <div className="meal" onClick={handleOnClick}>
      <div
        className={`${!description ? "no-description" : "with-description"}`}
      >
        <h3> {title} </h3>
        {description && <p>{description}</p>}
        <div>
          <span>{price}€</span>
          {popular && <span>popular</span>}
        </div>
      </div>

      {picture && <img src={picture} alt="" />}
    </div>
  );
};

export default Meal;
