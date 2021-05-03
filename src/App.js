import "./App.css";
import Meal from "./Components/Meal";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3200/");
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
    <div>
      {isLoading ? (
        "Is Loading..."
      ) : (
        <>
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
          <img
            src={data.restaurant.picture}
            alt=""
            className="img-restaurant"
          />
          <div>
            <h2>{data.categories[0].name}</h2>

            {/*MAP OVER THE DATA */}
            {data.categories.map((elem, index) => {
              return (
                <>
                  <h2>{elem.name}</h2>;
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
                      /> /*meal.title*/
                    );
                  })}
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
