import { createSlice } from "@reduxjs/toolkit";
// Retrieving the search term - to filter the state based on the search term
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// Slice Object created
///////////////////////////////////////
export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.filter((recipe) => recipe.id !== action.payload.id);
    },
  },
});

// Selectors
///////////////////////////////////////
// Selects only the favorite recipes slice of state
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

// Selects only the favorite recipes matching the search
export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Exports needs to precise actions (selectors) and reducer (slice)
///////////////////////////////////////
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
