import React, { useState } from "react"
import GlobalContext from "./GlobalContext"

const GlobalProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [loading, setLoading] = useState(false)

  const addToFavorites = (recipe) => {
  if (!favorites.some((item) => item.idMeal === recipe.idMeal)) {
    setFavorites([...favorites, recipe])
  }
};

  const addToShoppingList = (item) => {
    setShoppingList([...shoppingList, item])
  }

  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((x) => x !== item))
  }

  const removeFromFavorites = (idMeal) => {
  setFavorites(favorites.filter((item) => item.idMeal !== idMeal));
}

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

export default GlobalProvider
