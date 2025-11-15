import React from "react";
import { useLocation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const SearchResults = () => {
	const location = useLocation()
	const stateResults = location.state?.results || [];
	const { recipes } = useContext(GlobalContext);
	const results = location.ststae?.results || []

	return (
		<div className="page-container container">
			<h1 className="page-title">Searching results</h1>

			{results.length === 0 ? (
				<p className="empty-message">No recipes found</p>
			) : (
				<div className="recipes-grid">
					{results.map((recipe) => (
						<RecipeCard key={recipe.id} recipe={recipe} />
					))}
				</div>
			)}
		</div>
	)
}

export default SearchResults