import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../Recipes";

export default function Aceh() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province === "Aceh"
  )

  return (
    <div>
      <h1 className='judul daerah'>Aceh</h1>
      <p className='deskripsi'>
      Kuliner Aceh merupakan perpaduan unik antara cita rasa rempah-rempah yang kaya dan pengaruh masakan Melayu yang kental. Berikut adalah beberapa sajian kuliner khas Aceh yang patut dicoba
      </p>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}