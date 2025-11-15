import React from "react"
import { useLocation } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"

const SearchResults = () => {
  const location = useLocation()
  const results = location.state?.results || []

  return (
    <div className="page-container container">
      <h1 className="page-title">Searching results</h1>

      {results.length === 0 ? (
        <p className="empty-message">No recipes found</p>
      ) : (
        <div className="recipes-grid">
          {results.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
