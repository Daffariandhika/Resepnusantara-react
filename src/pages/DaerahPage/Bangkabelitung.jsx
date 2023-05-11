import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Bangkabelitung() {
  const recipes = [
    {
      title: "Kue Rintak",
      image: "/gallery/belitung/kuerintak.jpg",
      desc: "Jenis Kue ini di racik dari bahan baku tepung sagu, santan kental dan telur. Kue nya memang cukup alot namun mempunyai rasa yang enak dan juga otentik.",
    },
    {
      title: "Lakso Bangka",
      image: "/gallery/belitung/laksobangka.jpg",
      desc: "Lakso merupakan sebuah kuliner yang diciptakan dari perpaduan antara masakan Melayu dengan Tionghoa. Kuliner ini sendiri terdiri dari mie putih yang berbahan dasar sagu dan tepung beras.",
    },
    {
      title: "Lempah Darat",
      image: "/gallery/belitung/lempahdarat.jpg",
      desc: ". Bahan utama membuat sayur ini bisa berbagai macam dan berbeda-beda diantaranya ada daun papaya muda, akar keladi, pucuk idat, dan lain sebagainya. Sayur ini dimasak dengan rempah yang kaya dan kuat.",
    },
    {
      title: "Lepet Bangka",
      image: "/gallery/belitung/lepetbangka.jpg",
      desc: "Lapet dari Bangka Belitung dibuat dari beras ketan yang dikukus dalam wadah. Yang uniknya, wadahnya terbuat dari daun kelapa yang masih muda atau janur.",
    },
    {
      title: "Lokan",
      image: "/gallery/belitung/lokan.jpg",
      desc: "Lokan adalah kerang yang biasa hidup di daerah rawa atau muara sungai yang berpapasan dengan laut. yang cukup direbus dengan serai dan ada yang dijadikan kuah kuning atau pun bumbu saus tiram. ",
    },
    {
      title: "Martabak Bangka",
      image: "/gallery/belitung/martabakbangka.jpg",
      desc: "Makanan manis yang tak pernah salah di lidah masyarakat. dengan toping beraneka ragam membuat ledakan rasa didalam mulut.",
    },
    {
      title: "Mie Koba",
      image: "/gallery/belitung/miekoba.jpg",
      desc: "Terdapat satu lagi olahan mie yang berasal dari Bangka Belitung, yaitu mie Koba. Mie Koba merupakan sejenis mie yang di dalamnya terdapat isian ikan tenggiri.",
    },
    {
      title: "Otak-otak Bangka",
      image: "/gallery/belitung/otakotakbangka.jpg",
      desc: "Makanan khas Bangka Belitung ini adalah salah satu kuliner yang memanfaatkan hasil laut. Otak-otak dibuat dari campuran daging ikan, tepung dan bumbu-bumbu rempah yang akan menambah kenikmatan cita rasanya.",
    },
    {
      title: "Sambelikung",
      image: "/gallery/belitung/sambelikung.jpg",
      desc: "Sambal lingkung adalah sejenis abon atau serundeng yang terbuat dari ikan, santan kelapa, dan rempah-rempah lainnya. Biasanya sambal lingkung dapat dengan mudah dijumpai di momen-momen lebaran.",
    },
    {
      title: "Soto Bangka",
      image: "/gallery/belitung/sotobangka.jpg",
      desc: "Meski bumbunya banyak, soto Belitung termasuk sajian sederhana. Soto Belitung biasanya dibuat dengan dua kuah: kuah santan dan kuah bening.",
    },
    {
      title: "Lempah Kuning",
      image: "/gallery/belitung/lempah-kuning.jpg",
      desc: "Biasanya lempah kuning terbuat dari ikan kakap merah dan ikan tenggiri. Cara pembuatannya sendiri ikan tersebut dimasak dengan bumbu berwarna kuning yang berasal dari kunyit.",
    },
  
    
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Bangka Belitung</h1>
      <p className='deskripsi'>
        Deskripsi Kuliner
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