import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/api";
import { GlobalContext } from "../context/GlobalState";

const RecipeDetail = () => {
	const {id} = useParams()
	const {addToFavorites} = useContext(GlobalContext)
	const [recipe, setRecipe] = useState(null)

	useEffect(() => {
		const load = async () => {
			const data = await fetchRecipeById(id)
			setRecipe(data)
		}
		load()
	}, [id])

	if (!recipe) return <p>Loading...</p>

	const ingredients = Object.keys(recipe)
		.filter((key) => key.includes('Ingrediens') && recipe[key])
		.map((key, i) => `${recipe[key]} - ${recipe['strMeasure' + (i + 1)]}`)

	return (
		<div className="container">
			<div className="detail-container">
				<img src={recipe.strMealThumb} alt={recipe.strMeal} />

				<h2>{recipe.strMeal}</h2>

				<button className="btn" onClick={() => addToFavorites(recipe)}>Add to Favorites</button>

				<h3 className="section-title">Ingredients</h3>
				<ul className="ingredients-list">
					{ingredients.map((ing, index) => (
						<li key={index}>{ing}</li>
					))}
				</ul>

				<h3 className="section-title">Instructions</h3>
				<p className="instructions">{recipe.strInstructions}</p>
			</div>
		</div>
	)
}

export default RecipeDetail