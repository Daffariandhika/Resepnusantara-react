import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../Recipes";

export default function Yogyakarta() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province === "Yogyakarta"
  );

  return (
    <div>
      <h1 className='judul daerah'>Yogyakarta</h1>
      <p className='deskripsi'>
        
      </p>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}