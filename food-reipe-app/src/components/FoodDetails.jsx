import React, { useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  console.log("ID", foodId);
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "eebd576b9a97466bb95811ee9a1fb0c6";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log("details", data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      FoodDetails{foodId}
      {food.title}
      <img src={food.image} alt=""></img>
    </div>
  );
};

export default FoodDetails;
