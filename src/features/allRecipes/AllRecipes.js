import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// To be checked
// Function to add a recipe
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice.js";
// Function to call API (loadData) and select filtered recipes to display
import { loadData, selectFilteredAllRecipes } from "./allRecipesSlice.js";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = () => {
  // useSelector : function provided by redux to...
  const allRecipes = useSelector(selectFilteredAllRecipes);
  // function to send data retrieved to state
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };

  // To de on first render
  useEffect(onFirstRender, [dispatch]);

  // Function to add a receipe to the favorites
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {/* Displaying all recipes */}
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
