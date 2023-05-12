import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Banten() {
  const recipes = [
    {
      title: "Angeun Lada",
      image: "/gallery/banten/angeunlada.jpg",
      desc: "Angeun lada termasuk salah satu makanan khas Banten yang sering dijadikan menu saat merayakan hari-hari besar. jika anda menyukai pedas maka makanan ini cocok untuk anda",
    },
    {
      title: "Ketan Bintul",
      image: "/gallery/banten/ketanbintul.jpg",
      desc: "Konon ketan bintul ini sudah menjadi makanan favorit para Sultan Banten sejak zaman dahulu. Bahkan hingga sekarang pun selalu tersaji di meja makan keturunan para Sultan Banten saat Ramadhan.",
    },
    {
      title: "Kue Jojorong",
      image: "/gallery/banten/kuejojorong.jpg",
      desc: "Ciri khas dari makanan khas Banten ini adalah teksturnya yang lembut dan lumer di mulut dengan rasa gurih dan manis. Kue satu ini banyak dijual di pasar tradisional dan sering dijadikan sebagai menu sarapan masyarakat Banten.",
    },
    {
      title: "Laksa",
      image: "/gallery/banten/laksa.jpg",
      desc: "Laksa adalah makanan yang cukup banyak dijumpai, dengan rasa gurih dari rebusan daging dan kuatnya rempah yang bercampur dengan santan sangat meningkatkan selera makan.",
    },
    {
      title: "Leumeung",
      image: "/gallery//banten/leumeung.jpg",
      desc: "Makanan khas Banten untuk oleh-oleh lainnya yang bisa menjadi pilihan adalah leumeung. Kudapan ini terbuat dari beras ketan dan santan.",
    },
    {
      title: "Nasi Bakar Sumsum",
      image: "/gallery/banten/nasibakarsumsum.jpg",
      desc: "Nasi bakar yang telah dicampur rempah dan lemak dari sumsum kemudian dibakar dengan dibalut daun pisang yang menambah aroma khas makanan ini.",
    },
    {
      title: "Pecak Bandeng",
      image: "/gallery/banten/pecakbandeng.jpg",
      desc: "Pecak bandeng adalah salah satu makanan khas Serang, ibu kota Banten, yang bisa dengan mudah  temui di Jakarta. Nah, makanan satu ini umumnya dibuat untuk makanan para petani saat berada di sawah untuk makan siang. Hanya 2 bahan utamanya, yaitu pecak dan ikan bandeng.",
    },
    {
      title: "Sambal Buroq",
      image: "/gallery/banten/sambalburoq.jpg",
      desc: "Sambal buroq yakni hidangan wajib untuk acara besar di daerah Banten. Terutama acara menuju Lebaran Haji. Cocok disantap dengan nasi hangat ataupun nasi bakar sum-sum.",
    },
    {
      title: "Sate Bandeng",
      image: "/gallery/banten/satebandeng.jpg",
      desc: "Sate Bandeng dibuat dari ikan bandeng yang dihilangkan durinya, dagingnya dibumbui dan dimasukkan kembali ke kulitnya, lalu ditusuk atau dijepit tusukan tangkai bambu, lalu dibakar di atas bara arang",
    },
    {
      title: "Sayur Besan",
      image: "/gallery/banten/sayurbesan.jpg",
      desc: "Dinamakan Sayur Besan karena dihidangkan saat pernikahan dari pihak mempelai wanita kepada orang tua mempelai pria",
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Banten</h1>
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
              <Link className="view-btn" to={`/Banten/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banten;