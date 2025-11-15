const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (query) => {
	try {
		const res = await fetch(`${BASE_URL}/search.php?s=${query}`)
		const data = await res.json()
		return data.meals || []
	} catch {
		return []
	}
}

export const fetchRecipeByid = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
		const data = await res.json()
		return data.meals[0]
	} catch {
		return null
	}
}