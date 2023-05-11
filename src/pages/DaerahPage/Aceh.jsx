import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Aceh() {
  const recipes = [
    {
      title: "Mie Aceh",
      image: "../gallery/aceh/mieaceh.jpg",
      desc: "hidangan khas Aceh yang memiliki cita rasa kaya akan perpaduan rempah Nusantara",
    },
    {
      title: "Ayam Tangkap",
      image: "/gallery/aceh/ayamtangkap.jpg",
      desc: "Ayam yang digoreng dengan rempah dan daun pandan, memadukan gurihnya ayam dan aroma rempah dan daun pandan yang kuat",
    },
    {
      title: "Gulai Keueng",
      image: "/gallery/aceh/gulaikeueng.jpg",
      desc: "Gule Masam Keeung atau gulai asam pedas adalah hidangan khas Aceh yang terkenal dengan rasa pedas, asam, dan gurihnya.",
    },
    {
      title: "Keumamah",
      image: "/gallery/aceh/keumamah.jpg",
      desc: "salah satu kuliner tradisional masyarakat Aceh yang dibuat dari bahan baku ikan, yaitu tongkol dan cakalang. Keumamah terkenal juga dengan nama ikan kayu karena keras seperti kayu.",
    },
    {
      title: "Kuah Pliek U",
      image: "/gallery/aceh/kuahpliek-u.jpg",
      desc: "Pliek u merupakan salah satu hidangan yang merangkap sebagai bumbu di Aceh. Pliek u berasal dari ampas kering sisa minyak kelapa tua yang telah melalui beberapa kali proses pemerasan.",
    },
    {
      title: "Nasi Gurih",
      image: "/gallery/aceh/nasi-gurih.jpg",
      desc: "Sejenis nasi uduk yang berasal dari aceh, perbedaan terletak pada lauk yang dipakai yang biasanya terdapat kari ayam atau rendang",
    },
    {
      title: "Roti Cane",
      image: "/gallery/aceh/roti-cane.jpg",
      desc: "hidangan Aceh yang diinfluensi budaya India. berbahan dasar tepung cocok untuk dijadikan makanan pokok",
    },
    {
      title: "Sate Matang",
      image: "/gallery/aceh/sate-matang.jpg",
      desc: "Sate khas aceh dengan potongan daging yang tebal yang disajikan dengan sambal kacang yang khas gurih pedas",
    },
    {
      title: "Soto Aceh",
      image: "/gallery/aceh/soto-aceh.jpg",
      desc: "Hidangan kuah kaya rempah khas aceh yang menyegarkan dan terasa berani karena perpaduan santan dan sambal",
    },
    {
      title: "Timphan",
      image: "/gallery/aceh/timphan.jpg",
      desc: "kue legit berbahan dasar tepung beras dan dapat diisi dengan berbagai macam toping manis",
    },
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'></h1>
      <p className='deskripsi'>
        
      </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Aceh/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aceh;