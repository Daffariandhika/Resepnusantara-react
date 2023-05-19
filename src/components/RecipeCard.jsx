import { Link } from 'react-router-dom';
import CustomImage from "./CustomImage"

export default function RecipeCard({ recipe, provinceFilter }) {
  // Apply province filter if provided
  const shouldDisplay =
    !provinceFilter || recipe.province === provinceFilter;

  if (!shouldDisplay) {
    return null; // Don't render the card if province doesn't match filter
  }

  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-province">{recipe.province}</p>
        <p className="recipe-desc">{recipe.desc}</p>
        <Link to={recipe.path} className="view-btn">
          Lihat Resep
        </Link>
      </div>
    </div>
  )
}