import React from "react";

import { AllRecipes } from "../features/allRecipes/AllRecipes.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes.js";

export function App() {
  return (
    <main>
      <section>
        {/* Component to have a searchbar */}
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        {/* Component displaying favorite recipes */}
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        {/* Component displaying all recipes */}
        <AllRecipes />
      </section>
    </main>
  );
}
