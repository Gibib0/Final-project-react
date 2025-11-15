import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { fetchRecipeById } from "../services/api"
import GlobalContext from "../context/GlobalContext"

const RecipeDetail = () => {
  const { id } = useParams()
  const { addToFavorites } = useContext(GlobalContext)
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  const [added, setAdded] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const data = await fetchRecipeById(id)
      setRecipe(data)
      setLoading(false)
    };
    load()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!recipe) return <p>Recipe is not found</p>

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingr = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingr && ingr.trim()) {
      ingredients.push({ name: ingr.trim(), measure: (measure || "").trim() })
    }
  }

  const handleAdd = () => {
    addToFavorites(recipe)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="container">
      <div className="detail-container">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />

        <h2>{recipe.strMeal}</h2>

        <button className={`btn favorite-btn ${added ? "added" : ""}`} onClick={handleAdd}>
          {added ? "✔ Added" : "Add to Favorites"}
        </button>

        <h3 className="section-title">Ingredients</h3>
        <ul className="ingredients-list">
          {ingredients.map((ing, index) => (
            <li key={index}>
              <span>{ing.name}</span>
              <span>{ing.measure}</span>
            </li>
          ))}
        </ul>

        <h3 className="section-title">Instructions</h3>
        <p className="instructions">{recipe.strInstructions}</p>
      </div>
    </div>
  )
}

export default RecipeDetail
