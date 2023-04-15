import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.namaMakanan} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.jenisMakanan} alt=""/>
                <p className="recipe-title">{recipe.namaMakanan}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">Lihat Resep</a>
            </div>
        </div>
    )
}