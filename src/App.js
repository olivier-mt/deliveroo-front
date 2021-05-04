import "./App.css";
import Meal from "./Components/Meal";
import Basket from "./Components/Basket";
import axios from "axios";
import Logo from "./logo-deliveroo.png";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [subtotal, setSubTotal] = useState();

  console.log("basket==>", basket);

  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://olivier-deliveroo-back.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };

      fetchData();
    }, []);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <header>
        <div className="center">
          <img src={Logo} alt="" className="logo" />
        </div>
      </header>
      {isLoading ? (
        "Is Loading..."
      ) : (
        <>
          <div className="first-part center">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>

            <img
              src={data.restaurant.picture}
              alt=""
              className="img-restaurant"
            />
          </div>

          <div className="main">
            <Basket
              basket={basket}
              setBasket={setBasket}
              subtotal={subtotal}
              setSubTotal={setSubTotal}
            />
            {/*MAP OVER THE DATA */}

            {data.categories.map((elem, index) => {
              return (
                <>
                  {elem.meals.length > 0 && <h2>{elem.name}</h2>}

                  <div className="meal-container">
                    {elem.meals.map((meal, index) => {
                      const {
                        id,
                        title,
                        description,
                        price,
                        picture,
                        popular,
                      } = meal;
                      return (
                        <Meal
                          title={title}
                          description={description}
                          price={price}
                          picture={picture}
                          popular={popular}
                          id={id}
                          basket={basket}
                          setBasket={setBasket}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default App;
