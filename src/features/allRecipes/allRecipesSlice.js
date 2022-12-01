// Retrieving all the data (like an API)
import allRecipesData from "../../../data.js";
// To update
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// Function to retrieve all the recipes data (from API)
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

// Empty initial state
const initialState = [];

// Reducers integration to
// allRecipes as the initial state
const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    // To load the data
    case "allRecipes/loadData":
      return action.payload;
    // To add a recipe to favorites
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    // To remove a recipe from favorites
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};

// Retrive the allRecipes slice of state
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  // Retrive the searchTerm slice of state
  const searchTerm = selectSearchTerm(state);

  // Getting all the recipes matching the search
  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default allRecipesReducer;
