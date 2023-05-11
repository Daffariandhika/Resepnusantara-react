import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Bali() {
  const recipes = [
    {
      title: "Ayam Betutu",
      image: "/gallery/bali/ayambetutu.jpg",
      desc: "Ayam betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali. Daging ayam yang lembut dipadukan dengan bumbu yang kaya akan rempah.",
    },
    {
      title: "Bebek Betutu",
      image: "/gallery/bali/bebekbetutu.jpg",
      desc: "Bebek Betutu juga merupakan salah satu makanan khas Bali yang wajib kamu coba. Hidangan ini menggunakan bahan utama bebek yang dimasak dengan bumbu betutu khas Bali.",
    },
    {
      title: "Babi Guling",
      image: "/gallery/bali/babi-guling.jpg",
      desc: "Babi panggang khas bali bercitarasa dominan gurih, kaya akan lemak yang meleleh sehingga lumer di mulut",
    },
    {
      title: "Jakut Urap",
      image: "/gallery/bali/jakuturap.jpg",
      desc: "Jukut urap sering ditemukan dalam sajian nasi campur. Jukut urap terdiri dari berbagai sayuran yang disiram dengan bumbu khas Bali.",
    },
    {
      title: "Lempet Ikan",
      image: "/gallery/bali/lempetikan.jpg",
      desc: "Lempet adalah makanan khas Bali yang terbuat dari ikan yang sudah diberi bumbu dan dibungkus dengan daun pisang.",
    },
    {
      title: "Nasi Jinggo",
      image: "/gallery/bali/nasi-jinggo.jpg",
      desc: "",
    },
    {
      title: "Sambal Matah",
      image: "/gallery/bali/sambalmatah.jpg",
      desc: "Rasanya yang pedas dari cabai rawit yang diiris kasar dan segar dari Jeruk nipis dipadukan dengan sereh yang aromatik.",
    },
    {
      title: "Sate Kakul",
      image: "/gallery/bali/satekakul.jpg",
      desc: "Sate kaku merupakan kuliner tradisional Bali yang berasal dari daerah Ubud. Sate kakul menggunakan bahan utama berupa siput dan memiliki cita rasa yang khas",
    },
    {
      title: "Sate Lilit",
      image: "/gallery/bali/satelilit.jpg",
      desc: "Sate lilit terbuat dari daging ayam atau ikan yang digiling. Daging ini kemudian dicampur dengan parutan kelapa dan dililit pada batang bambu atau sereh.",
    },
    {
      title: "Sate Pelecing",
      image: "/gallery/bali/satepelecing.jpg",
      desc: "Sate ini dimasak dengan bumbu khas Bali yang bernama plecing yang terbuat dari kemiri, terasi, tomat, bawang putih, dan beberapa bumbu lainnya.",
    },
    {
      title: "Serapah Daging",
      image: "/gallery/bali/serapahdaging.jpg",
      desc: "Serapah adalah sejenis lauk setengah basah yang terbuat dari daging yang dibumbui dengan aneka rempah, santan, dan tepung beras sebagai pengental.",
    },
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Bali</h1>
      <p className='deskripsi'>
        Kuliner Bali memiliki keunikan dan cita rasa yang khas dan beragam. Makanan khas Bali umumnya menggunakan bumbu-bumbu tradisional seperti bawang merah, bawang putih, jahe, kunyit, kemiri, serai, cabai, dan rempah-rempah lainnya. Beberapa hidangan khas Bali yang populer antara lain:
      </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Bali/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bali;