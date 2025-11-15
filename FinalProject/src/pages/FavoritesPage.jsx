import React from "react";
import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import GlobalContext from "../context/GlobalContext";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, addToFavorites } = useContext(GlobalContext);

  return (
    <div className="container">
      <h2>Favorites</h2>

      {favorites.length === 0 ? (
        <div className="empty-state">No favorite recipes yet</div>
      ) : (
        <div className="grid">
          {favorites.map((item) => (
            <div key={item.idMeal} className="favorite-item">
              <RecipeCard recipe={item} onAddToFavorites={addToFavorites} />
              <button className="btn-outline" onClick={() => removeFromFavorites(item.idMeal)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage