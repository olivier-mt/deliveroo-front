const Basket = ({ basket, setBasket }) => {
  return (
    <div className="basket">
      {basket.length === 0 ? (
        "Votre panier est vide"
      ) : (
        <div>
          {basket.map((elem) => {
            const { id, title, price, quantity } = elem;
            return (
              <div>
                <span>{title}</span> <span>{price}</span>{" "}
                <span>{`quantity:${quantity}`}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Basket;
