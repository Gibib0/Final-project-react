import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = ({children}) => {
	const [recipes, setRecipes] = useState([])
	const [favorites, setFavorites] = useState([])
	const [shoppingList, setShoppingList] = useState([])
	const [loading, setLoading] = useState(false)

	const addToFavorites = (recipe) => {
				if (!favorites.some((r) => r.idMeal === recipe.idMeal)) {
					setFavorites([...favorites, recipe]);
				}
	}

	const addToShoppingList = (item) => {
		setShoppingList([...shoppingList, item])
	}

	const removeFromShoppingList = (item) => {
		setShoppingList(shoppingList.filter((x) => x !== item))
	}
	 return (
		<GlobalContext.Provider value={{recipes, setRecipes, favorites, addToFavorites, shoppingList, addToShoppingList, removeFromShoppingList, loading, setLoading}}>{children}</GlobalContext.Provider>
	 )
}

export default GlobalState