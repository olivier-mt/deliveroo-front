const Meal = ({ id, title, description, price, picture, popular }) => {
  return (
    <div className="meal ">
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
