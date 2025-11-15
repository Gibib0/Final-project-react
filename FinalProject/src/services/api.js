const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (query) => {
	try {
		const res = await fetch(`${BASE_URL}/search.php?s=${query}`)
		const data = await res.json()
		return data.meals || []
	} catch (err) {
		console.error("fetchRecipes error:", err);
		return []
	}
}

export const fetchRecipeById = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
		const data = await res.json()
		return data.meals[0]
	} catch (err) {
		console.error("fetchRecipeById error:", err);
		return null
	}
}