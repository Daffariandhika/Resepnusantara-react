import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../Recipes";

export default function Bali() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province.toLowerCase() === "bali"
  )

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