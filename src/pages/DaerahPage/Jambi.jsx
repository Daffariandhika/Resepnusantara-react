import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Jambi() {
  const recipes = [
    {
      title: "Daging Masak Itam",
      image: "/gallery/jambi/daging_masakitam.jpg",
      desc: "Kuliner berbahan dasar daging sapi ini seperti yang sudah diduga, menggunakan kecap manis untuk bumbu hitamnya. Perpaduan rasa gurih manis yang berpadu rempah-rempah Nusantara.",
    },
    {
      title: "Gulai Tepek Ikan",
      image: "/gallery/jambi/gulai_tepek.jpg",
      desc: "Gulai tepek ini sangat unik karena dibuat dari bahan utama berupa bakso ikan (fishcake) dan nanas yang dipotong-potong kotak dan dibumbui dengan bumbu gulai.",
    },
    {
      title: "Kerutup Ikan",
      image: "/gallery/jambi/kerutup_ikan.jpg",
      desc: "Olahan berbahan dasar ikan segar yang dimasak dengan balutan daun pisang dan dibumbui dengan rempah yang kuat menghilangkan rasa amis ikan.",
    },
    {
      title: "Kue Padamaran",
      image: "/gallery/jambi/kue_padamaran.jpg",
      desc: "Kue padamaran mungkin bisa jadi alternatif kue sederhana namun enak untuk dibuat sendiri di rumah. Kue padamaran adalah kue tradisional dari Jambi yang sekilas mirip dengan kue talam.",
    },
    {
      title: "Lakso Jambi",
      image: "/gallery/jambi/lakso_jambi.jpg",
      desc: "Lakso merupakan makanan warisan Melayu yang bisa ditemukan di Jambi dan beberapa daerah di Sumatera. Lakso menyerupai mi yang dibuat dari tepung sagu.",
    },
    {
      title: "Nasi Minyak",
      image: "/gallery/jambi/nasi_minyak.jpg",
      desc: "Nasi minyak adalah salah satu sajian otentik Jambi, yang biasanya dijadikan hidangan untuk acara-acara tertentu. Meski namanya nasi minyak, nasi minyak tidak oily dan punya aroma khas menggugah selera.",
    },
    {
      title: "Sambal Kweni",
      image: "/gallery/jambi/sambal_kweni.jpg",
      desc: "Orang Jambi menggunakan mangga kweni karena memiliki aroma harum, rasa asam yang khas dan tekstur dagingnya lembut dan padat. Sambal kweni paling cocok dijadikan sebagai pendamping santapan ikan bakar dan hidangan bakar-bakaran lainnya.",
    },
    {
      title: "Sate Ikan Khas Jambi",
      image: "/gallery/jambi/sate_ikan.jpg",
      desc: "Sate ikan khas Jambi tidak diolah dengan ditusuk dan dibakar, melainkan dengan menghaluskan daging ikan, lalu dibungkus daun pisang dan direbus.",
    },
    {
      title: "Sate Tempe Rangkayo Hitam",
      image: "/gallery/jambi/sate_tempe.jpg",
      desc: "Tempe yang direndam rempah-rempah perpaduan bumbu ini membuat tempe menjadi lebih gurih dan beraroma nikmat. Sementara warna hitamnya merupakan campuran kecap manis. ",
    },
    {
      title: "Tempoyak Ikan Patin",
      image: "/gallery/jambi/tempoyak_ikan.jpg",
      desc: "Tempoyak adalah hasil fermentasi dari buah durian. Ya, Jambi memang salah satu daerah penghasil durian. Di Jambi, ikan patin diolah dengan tempoyak yang dicampur rempah-rempah Cita rasanya segar dan nikmat, perpaduan antara rasa pedas, manis dan asam yang menyatu.",
    },
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Jambi</h1>
      <p className='deskripsi'>
        deskiripsi kuliner daerah
         </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Jambi/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jambi;