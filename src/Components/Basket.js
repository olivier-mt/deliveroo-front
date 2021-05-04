import Counter from "./Counter";
const Basket = ({ basket, setBasket }) => {
  return (
    <div className="basket">
      <div
        className={basket.length > 0 ? "basket-button-on" : "basket-button-off"}
      >
        Valider mon panier
      </div>
      {basket.length === 0 ? (
        "Votre panier est vide"
      ) : (
        <div>
          {basket.map((elem, index) => {
            const { id, title, price, quantity } = elem;

            return (
              <>
                <div className="items">
                  <Counter
                    basket={basket}
                    setBasket={setBasket}
                    quantity={quantity}
                    index={index}
                  />
                  <span>{title}</span> <span>{price}</span>{" "}
                  <span>{`quantity:${quantity}`}</span>
                </div>
              </>
            );
          })}
        </div>
      )}
      <div>
        <div>
          {basket.length > 0 &&
            `${"Sous Total"} ${basket
              .map((elem) => {
                return elem.price * elem.quantity;
              })
              .reduce((acc, curr) => {
                return (acc += curr);
              })}              
              `}
          {basket.length > 0 && <div>Frai de livraison : 2,50e</div>}
        </div>
      </div>
      <div>
        {basket.length > 0 &&
          `${"Total"} ${basket
            .map((elem) => {
              return elem.price * elem.quantity;
            })
            .reduce((acc, curr) => {
              return (acc += curr);
            }, 2.5)}`}
      </div>
    </div>
  );
};

export default Basket;
