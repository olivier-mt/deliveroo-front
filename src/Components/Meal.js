const Meal = ({ id, title, description, price, picture, popular }) => {
  return (
    <div className="meal">
      <h3> {title} </h3>
      <p>{description}</p>
      <span>{price}€</span>
      {picture && <img src={picture} alt="" />}
      {popular && "popular"}
    </div>
  );
};

export default Meal;
