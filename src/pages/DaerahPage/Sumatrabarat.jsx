import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../Recipes";

export default function Sumatrabarat() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province === "Sumatra Barat"
  )

  return (
    <div>
      <h1 className='judul daerah'>Sumatra Barat</h1>
      <p className='deskripsi'>
      Cita Rasa kuliner Sumatra Barat umumnya kaya, pedas, gurih, dan beraroma, dengan penggunaan rempah-rempah yang melimpah sebagai ciri khasnya.
      </p>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}