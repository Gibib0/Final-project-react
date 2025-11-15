import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";
import FavoritesPage from "./pages/FavoritesPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<RecipesPage />} />
      <Route path='/recipe/:id' element={<RecipeDetail />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/shopping-list' element={<ShoppingListPage />} />
      <Route path='/search' element={<SearchResults />} />
    </Routes>
    </>
  )
}

export default App