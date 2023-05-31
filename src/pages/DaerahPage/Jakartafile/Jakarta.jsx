import React from "react";
import RecipeCard from "../../../components/RecipeCard";
import { recipes } from "../../Recipes";

export default function Jakarta() {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.province === "Jakarta"
  )

  return (
    <div>
      <h1 className='judul daerah'>Jakarta</h1>
      <p className='deskripsi'>
      Makanan khas daerah Jakarta adalah sebuah perpaduan yang menarik antara beragam budaya kuliner yang ada di ibu kota Indonesia. Jakarta sebagai pusat kehidupan metropolitan yang sibuk dan multikultural, menawarkan berbagai hidangan yang memikat dengan rasa autentik dan sentuhan modern.
      </p>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}