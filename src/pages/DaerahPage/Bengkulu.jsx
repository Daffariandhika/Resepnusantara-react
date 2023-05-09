import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Bengkulu() {
  const recipes = [
    {
      title: "Pindang Patin",
      image: "/gallery/pindang-patin.jpg",
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
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Bengkulu</h1>
      <p className='deskripsi'>
        
      </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Bengkulu/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bengkulu;