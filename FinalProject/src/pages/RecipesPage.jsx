import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../services/api";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

const RecipesPage = () => {
	const {recipes, setRecipes, setLoading, addToFavorites} = useContext(GlobalContext)
	const [search, setSearch] = useState('')

	useEffect(() => {
		const load = async () => {
			setLoading(true)
			const data = await fetchRecipes(search)
			setRecipes(data || [])
			setLoading(false)
		}
		load()
	}, [search, setRecipes, setLoading])

	return (
		<div className="container">
			<SearchBar search={search} setSearch={setSearch}/>
			<RecipeList recipes={recipes} onAddToFavorites={addToFavorites}/>
		</div>
	)
}

export default RecipesPage