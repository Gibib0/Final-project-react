import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onAddToFavorites }) => {
	if (!recipes || recipes.length === 0) return <p>No recipes found</p>

	return (
		<div className="grid">
			{recipes.map((r) => (
				<RecipeCard key={r.idMeal} recipe={r} onAddToFavorites={onAddToFavorites} />
			))}
		</div>
	)
}

export default RecipeList