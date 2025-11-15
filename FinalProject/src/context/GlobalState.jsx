import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });
  const [shoppingList, setShoppingList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shoppingList")) || [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addToFavorites = (recipe) => {
    if (!favorites.some((r) => r.idMeal === recipe.idMeal)) {
      setFavorites((prev) => [...prev, recipe]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((r) => r.idMeal !== id));
  };

  const addToShoppingList = (item) => {
    if (!shoppingList.includes(item)) {
      setShoppingList((prev) => [...prev, item]);
    }
  };

  const removeFromShoppingList = (item) => {
    setShoppingList((prev) => prev.filter((x) => x !== item));
  };

  return (
    <GlobalContext.Provider
      value={{
        recipes,
        setRecipes,
        favorites,
        addToFavorites,
        removeFromFavorites,
        shoppingList,
        addToShoppingList,
        removeFromShoppingList,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}