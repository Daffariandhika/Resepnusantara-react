import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Yogyakarta() {
  const recipes = [
    {
      title: "Gudeg",
      image: "/gallery/gudeg.jpg",
      desc: "",
    },
    {
      title: "Sate Klathak",
      image: "/gallery/sate-klathak.jpg",
      desc: "",
    },
    {
      title: "Bakmi Jawa",
      image: "/gallery/bakmi-jawa.jpg",
      desc: "",
    },
    {
      title: "Soto",
      image: "/gallery/soto.jpg",
      desc: "",
    },
    {
      title: "Es Dawet",
      image: "/gallery/es-dawet.jpg",
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
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Yogyakarta</h1>
      <p className='deskripsi'>
        Kuliner Yogyakarta adalah salah satu yang terkenal di Indonesia, dengan berbagai macam hidangan yang khas dan lezat. Beberapa hidangan yang terkenal dari kuliner Yogyakarta antara lain: Gudeg, Sate Klathak, Bakmi Jawa, Soto dan Es Dawet
      </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Yogyakarta/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Yogyakarta;