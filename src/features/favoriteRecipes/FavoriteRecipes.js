import React from "react";
// To select a slice and be able to dispatch actions or content
import { useSelector, useDispatch } from "react-redux";

// Acting on favorite recipes
import {
  removeRecipe, // removing a favorite recipe
  selectFilteredFavoriteRecipes, // favorite recipes filtered based on search
} from "./favoriteRecipesSlice.js";

// Component import
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

export const FavoriteRecipes = () => {
  // Selecting the relevant favorite recipes
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  // Function to dispatch an action to the state
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function - creating a react component for each recipe
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
