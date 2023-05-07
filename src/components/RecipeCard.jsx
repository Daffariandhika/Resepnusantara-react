import { Link } from 'react-router-dom';
import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <Link to={`/${recipe.title}`} className="view-btn">Lihat Resep</Link>
            </div>
        </div>
    )
}
