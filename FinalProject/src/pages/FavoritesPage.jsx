import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { GlobalContext } from "../context/GlobalState";

const FavoritesPage = () => {
	const {favorites} = useContext(GlobalContext)

	return (
		<div className="container">
			<h2>Favorites</h2>

			{favorites.length === 0 ? (
				<div className="empty-state">No favorites recipes yet</div>
			) : (
				<div className="grid">
					{favorites.map((item) => (
						<RecipeCard key = {item.idMeal} recipe={item} />
					))}
				</div>
			)}
		</div>
	)
}

export default FavoritesPage