import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "81c7c6e5c1094a0187d06654368699bb"

const Search = () => {
  const [query, setQuery] = useState("pizza");

  useEffect(()=> {
    async function fetchFood(){
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text" />
    </div>
  );
};

export default Search;
