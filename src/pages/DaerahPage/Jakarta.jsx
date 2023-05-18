import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Jakarta() {
  const recipes = [
    {
      title: "Asinan Betawi",
      image: "/gallery/jakarta/asinan_betawi.jpg",
      desc: "ciri khas dari asinan betawi adalah penggunaan sawi asin, air gula, serta bumbu kacangnya yang menjadi pembeda diantara asinan lainnya.",
    },
    {
      title: "Dodol Betawi",
      image: "/gallery/jakarta/dodol_betawi.jpg",
      desc: "Dodol Betawi bercitarasa manis, berwarna hitam kecoklatan, dan teksturnya yang lengket.Varian rasa dodol Betawi hanya ada 3, yaitu ketan putih, durian, dan ketan hitam.",
    },
    {
      title: "Kerak Telor",
      image: "/gallery/jakarta/kerak_telor.jpg",
      desc: "Sajian ini terdiri dari telur dihadapkan pada panas arang hingga jadi mirip kerak dan tampak agak gosong, lalu diberi bawang goreng dan serundeng.",
    },
    {
      title: "Ketoprak",
      image: "/gallery/jakarta/ketoprak.jpg",
      desc: "Ketupat yang dicampur berbagai sayur dan dibalut dengan saus kacang yang didominasi rasa manis dari kecap dengan pelengkap taburan bawang merah.",
    },
    {
      title: "Laksa Betawi",
      image: "/gallery/jakarta/laksa_betawi.jpg",
      desc: "Rasa kuahnya yang gurih dengan sedikit asam sangat menggugah selera",
    },
    {
      title: "Roti Buaya",
      image: "/gallery/jakarta/roti_buaya.jpg",
      desc: "Roti buaya adalah makanan khas Jakarta yang kerap disajikan saat upacara adat terutama ketika prosesi acara pernikahan tradisional orang Betawi",
    },
    {
      title: "Sayur Babanci",
      image: "/gallery/jakarta/sayur_babanci.jpg",
      desc: "Makanan khas Jakarta ini kerap disajikan saat buka puasa dan Lebaran. Uniknya, meski namanya sayur babanci, ternyata justru tak ada sayurannya.",
    },
    {
      title: "Semur Jengkol",
      image: "/gallery/jakarta/semur_jengkol.jpg",
      desc: "Olahan santan yang seringnya didominasi rasa manis gurih yang menimbulkan minyak di permukaan selalu menggoda di kala lapar tiba. Olahan sayur ini sangat mudah ditemukan di warteg atau rumah makan di Jakarta dan sekitarnya.",
    },
    {
      title: "Soto Betawi",
      image: "/gallery/jakarta/soto_betawi.jpg",
      desc: "Soto ini menjadi unik karena memiliki kuah kental yang membedakan dari soto dari daerah lainnya yang biasa menggunakan kuah bening. Salah satu ciri khas soto Betawi yakni adanya jeroan.",
    },
    {
      title: "Soto Tangkar",
      image: "/gallery/jakarta/soto_tangkar.jpg",
      desc: "Soto ini berarti iga yang dimasak dengan rempah-rempah, biasanya disajikan dengan emping dan sambal.",
    },
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Jakarta</h1>
      <p className='deskripsi'>
      Makanan khas daerah Jakarta adalah sebuah perpaduan yang menarik antara beragam budaya kuliner yang ada di ibu kota Indonesia. Jakarta sebagai pusat kehidupan metropolitan yang sibuk dan multikultural, menawarkan berbagai hidangan yang memikat dengan rasa autentik dan sentuhan modern.
      </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Jakarta/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jakarta;