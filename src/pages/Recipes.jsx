import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "",
            image: "/gallery/",
            desc: "",
        }, 
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        }, 
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/",
            desc: "",
        },
        {
            title: "",
            image: "/gallery/rendang.jpg",
            desc: "",
        },
        {
            title: "Gudeg",
            image: "/gallery/gudeg.jpg",
            desc: "Gudeg adalah salah satu makanan tradisional khas Yogyakarta dan Jawa Tengah, Indonesia. Makanan ini terbuat dari nangka muda yang dimasak dengan berbagai bumbu rempah dan gula merah sehingga mempunyai cita rasa manis dan sedikit gurih.",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}