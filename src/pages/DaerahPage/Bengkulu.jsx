import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../Recipes";

export default function Bengkulu() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province.toLowerCase() === "bengkulu"
  );

  return (
    <div>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}