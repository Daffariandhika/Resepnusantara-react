import React from "react";
import RecipeCard from "../../../components/RecipeCard";
import { recipes } from "../../Recipes";

export default function Bali() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province === "Bali"
  )

  return (
    <div>
      <h1 className='judul daerah'>Bali</h1>
      <p className='deskripsi'>
      Kuliner Bali merupakan salah satu yang paling terkenal di Indonesia, dengan hidangan-hidangan yang kaya akan rasa, aroma, dan keunikan. Berikut adalah deskripsi beberapa kuliner khas Bali yang populer
      </p>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}