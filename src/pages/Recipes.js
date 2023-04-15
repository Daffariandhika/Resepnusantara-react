import Pencarian from "../components/Pencarian"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        }, 
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/g",
        }, 
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/gallery/",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/img/gallery/img_6.jpg",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/img/gallery/img_10.jpg",
            jenisMakanan: "/img/top-chiefs/img_6.jpg",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/img/gallery/img_5.jpg",
            jenisMakanan: "/gallery/indonesia.png",
        },
        {
            namaMakanan: "Nama Makanan",
            image: "/img/gallery/img_6.jpg",
            jenisMakanan: "/gallery/indonesia.png",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <Pencarian />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}