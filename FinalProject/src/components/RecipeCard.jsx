import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
	const navigate = useNavigate();

	return (
		<div className="recipe-card" onClick={() => navigate('/recipe/${recipe.idMeal')}>
			<img src={recipe.strMealThumb} alt={recipe.strMeal} />
			<div className="info">
				<h3>{recipe.strMeal}</h3>
				<p>{recipe.strCategory}</p>
			</div>
		</div>
	)
}

export default RecipeCard