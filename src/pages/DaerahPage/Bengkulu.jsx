import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Bengkulu() {
  const recipes = [
    {
      title: "Bagar Hiu",
      image: "/gallery/bengkulu/bagarhiu.jpg",
      desc: "Bagar hiu menjadi salah satu makanan khas Bengkulu yang pernah dicicip oleh presiden pertama Indonesia yakni Ir. Soekarno.",
    },
    {
      title: "Bolu Koja",
      image: "/gallery/bengkulu/bolukoja.jpg",
      desc: "Sama seperti kue bolu pada umumnya, bolu koja memiliki tekstur yang sangat lembut. Namun, uniknya kue bolu ini menggunakan agar-agar sebagai bahan campurannya (walau tak semua).",
    },
    {
      title: "Bubur Sekoi",
      image: "/gallery/bengkulu/bubursekoi.jpg",
      desc: "Makanan khas Bengkulu ini merupakan jenis bubur manis karena dibuat dari bahan dasar biji sekoi atau jewawut yang dimasak dengan santan, jahe, daun pandan, gula pasir, dan gula merah.",
    },
    {
      title: "Gulai Kemba'ang",
      image: "/gallery/bengkulu/gulaikembaang.jpg",
      desc: "Gulai kemba`ang adalah makanan khas Bengkulu yang dibuat dari bahan dasar iga sapi yang dimasak dengan aneka rempah. Gulai kemba’ang memiliki cita rasa yang sangat khas dengan aroma rempah yang cukup tajam.",
    },
    {
      title: "Gulai Pisang",
      image: "/gallery/bengkulu/gulaipisang.jpg",
      desc: "Gulai memang biasanya dibuat dari bahan dasar ayam, ikan, daging, telur, tempe, hingga tahu. Gulai pisang dibuat dari bahan dasar pisang lalu dimasak dengan bumbu gulai.",
    },
    {
      title: "Kue Bay Tat",
      image: "/gallery/bengkulu/kuebaytat.jpg",
      desc: "Bay Tat adalah Kue Tart berukuran besar khas Bengkulu. Makanan ini dipercaya pada zaman dahulu menjadi makanan para raja dan bangsawan Bengkulu.",
    },
    {
      title: "Kue Lepek Biniti",
      image: "/gallery/bengkulu/kuelepekbiniti.jpg",
      desc: "Kue lepek binti merupakan penganan yang terbuat dari bahan dasar ketan dengan isian gilingan daging sapi.",
    },
    {
      title: "Manisan Terong",
      image: "/gallery/bengkulu/manisanterong.jpg",
      desc: "Keunikan hidangan ini ialah terong yang termasuk jenis sayuran sangat jarang dijadikan sebagai manisan karena biasanya olahan manisan dibuat dari bahan dasar buah-buahan.",
    },
    {
      title: "Pendap",
      image: "/gallery/bengkulu/pendap.jpg",
      desc: "Pendap adalah makanan khas Bengkulu yang terbuat dari bahan dasar ikan. Jenis ikan yang digunakan bisa apa saja, yakni ikan air tawar maupun ikan air laut.",
    },
    {
      title: "Rebung asam undak liling",
      image: "/gallery/bengkulu/rebungasamundakliling.jpg",
      desc: "Makanan bersantan ini terbuat dari rebung atau tunas bambu muda.Rebung akan diolah menjadi gulai dan dipadukan dengan keong sawah (liling).",
    },
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Bengkulu</h1>
      <p className='deskripsi'>
      Makanan khas daerah Bengkulu menawarkan sebuah perpaduan yang menggugah selera antara cita rasa yang kaya dan bumbu-bumbu tradisional yang lezat. Salah satu ciri khas makanan Bengkulu adalah keberlimpahan ikan segar yang ditangkap langsung dari Laut Bengkulu. Rasa segar dan manisnya daging ikan seperti patin, lele, dan belida diolah dengan kepiawaian sehingga menghasilkan hidangan yang menggugah selera.
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