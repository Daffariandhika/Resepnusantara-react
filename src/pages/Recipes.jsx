import { useState } from "react";
import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const recipes = [
    {
      title: "Gudeg",
      image: "/gallery/yogyakarta/gudeg.jpg",
      desc: "",
    },
    {
      title: "Klepon",
      image: "/gallery/jawatengah/klepon.jpg",
      desc: "",
    },
    {
      title: "Nasi Tiwul",
      image: "/gallery/jawatengah/nasi-tiwul.jpg",
      desc: "",
    },
    {
      title: "Salad Buah",
      image: "/gallery/salad-buah.jpg",
      desc: "",
    },
    {
      title: "Sate Ayam",
      image: "/gallery/sate-ayam.jpg",
      desc: "",
    },
    {
      title: "Sate Kambing",
      image: "/gallery/sate-kambing.jpg",
      desc: "",
    },
    {
      title: "Cakwe",
      image: "/gallery/cakwe.jpg",
      desc: "",
    },
    {
      title: "Rendang",
      image: "/gallery/rendang.jpg",
      desc: "",
    },
    {
      title: "Babi Guling",
      image: "/gallery/bali/babi-guling.jpg",
      desc: "",
    },
    {
      title: "Nasi Gurih",
      image: "/gallery/aceh/nasi-gurih.jpg",
      desc: "",
    },
    {
      title: "Roti Cane",
      image: "/gallery/aceh/roti-cane.jpg",
      desc: "",
    },
    {
      title: "Lempah Kuning",
      image: "/gallery/bangkabelitung/lempah-kuning.jpg",
      desc: "",
    },
    {
      title: "Soto Aceh",
      image: "/gallery/aceh/soto-aceh.jpg",
      desc: "",
    },
    {
      title: "Sate Matang",
      image: "/gallery/aceh/sate-matang.jpg",
      desc: "",
    },
  ].sort(() => Math.random() - 0.5)

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const limitedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes.slice(0, 12);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="recipes-container">
        {limitedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
