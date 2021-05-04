const Meal = ({
  id,
  title,
  description,
  price,
  picture,
  popular,
  basket,
  setBasket,
  articleId,
  setArticleId,
}) => {
  const handleOnClick = () => {
    if (basket.length > 0) {
      setArticleId(id);
      for (let i = 0; i < basket.length; i++) {
        {
          /*  ligne problématique*/
        }
        const index = basket.indexOf(basket[i].id === id);

        console.log("index===>", index, basket[i].id, id);
      }
    } else {
      // For the first loop when ARRAy newBasket is empty
      console.log("loop empty");
      const newBasket = [...basket];

      newBasket.push({ id: id, title: title, price: price, quantity: 1 });
      setBasket(newBasket);
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
