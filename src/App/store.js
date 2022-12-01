// Function to set up state
import { configureStore } from "@reduxjs/toolkit";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";

// Setting-up the state with three layers
export default configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  },
});
