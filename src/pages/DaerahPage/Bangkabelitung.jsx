import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Bangkabelitung() {
  const recipes = [
    {
      title: "",
      image: "/gallery/belitung/kuerintak.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/laksobangka.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/lempahdarat.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/lepetbangka.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/lokan.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/martabakbangka.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/miekoba.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/otakotakbangka.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/sambelikung.jpg",
      desc: "",
    },
    {
      title: "",
      image: "/gallery/belitung/sotobangka.jpg",
      desc: "",
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Bangka Belitung</h1>
      <p className='deskripsi'>
        kuliner bangka belitung adalah 
        </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Bangka Belitung/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bangkabelitung;