import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../../components/CustomImage';

function Gorontalo() {
  const recipes = [
    {
      title: "Ayam Iloni",
      image: "/gallery/gorontalo/ayam_iloni.jpg",
      desc: "Keunikan ayam bakar iloni terletak pada cara mengolahnya. Jika ayam bakar pada umumnya dipanggang setelah dibersihkan, ayam iloni harus ditambahkan bumbu khas terlebih dahulu sehingga meresap ke dalam daging dan dicampur dengan santan.",
    },
    {
      title: "Bilenthango",
      image: "/gallery/gorontalo/bilenthango.jpg",
      desc: "Keunikan dari kuliner khas Gorontalo satu ini adalah proses pengolahannya yang terletak pada keberadaan daun pisang yang digunakan sebagai alas minyak dan ikan ketika digoreng",
    },
    {
      title: "Binte Biluhuta",
      image: "/gallery/gorontalo/binte_biluhuta.jpg",
      desc: "Sajian binte biluhuta menjadi salah satu makanan khas Gorontalo yang terkenal. Dalam bahasa Indonesia, binte biluhuta berarti jagung yang disiram. ",
    },
    {
      title: "Es Brenebon",
      image: "/gallery/gorontalo/es_brenebon.jpg",
      desc: "Es brenebon sendiri merupakan es kacang merah yang dipadu dengan gula merah dan cokelat. Rasanya manis unik dan menyegarkan.",
    },
    {
      title: "Ilabulo",
      image: "/gallery/gorontalo/ilabulo.jpg",
      desc: "Sekilas mirip sekali dengan otak-otak tapi dibuatnya dari ati ampela ayam, bisa juga ditambahkan jeroan lain dan kulit ayamnya. Rasanya yang khas dengan asin gurih pedas tentu bikin nagih.",
    },
    {
      title: "Kue Karawo",
      image: "/gallery/gorontalo/kue_karawo.jpg",
      desc: "Kue karawo merupakan kue kering yang hanya bisa ditemui di Gorontalo. Layaknya kue kering lainnya, kue karawo juga memiliki aneka varian rasa seperti rasa keju, coklat, kopi, atau strawberry.",
    },
    {
      title: "Kue Sabongi",
      image: "/gallery/gorontalo/kue_sabongi.jpg",
      desc: "Camilan dari bahan singkong ini punya rasa gurih manis yang bikin nagih. Penasaran seperti apa rasanya?",
    },
    {
      title: "Perkedel Nike",
      image: "/gallery/gorontalo/perkedel_nike.jpg",
      desc: "Berbeda dengan perkedel kebanyakan, perkedel khas Gorontalo ini merupakan perkedel yang terbuat dari ikan nike yaitu ikan yang berukuran kecil mirip seperti ikan teri.",
    },
    {
      title: "Sayur Putungo",
      image: "/gallery/gorontalo/sayur_putungo.jpg",
      desc: "lebih umum dikenal sebagai sayur ontong atau jantung pisang di Pulau Jawa. Sayur putungo ini merupakan sajian yang juga menjadi makanan khas Gorontalo",
    },
    {
      title: "Tili Aya",
      image: "/gallery/gorontalo/tili_aya.jpg",
      desc: "kue tili aya yang ternyata bahannya sangat sederhana dan manisnya bikin nagih. Tidak harus pergi ke Gorontalo jika ingin mencicipinya, ini resep kue tili aya yang bisa kamu coba di rumah.",
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1 className='judul daerah'>Gorontalo</h1>
      <p className='deskripsi'>
      Makanan khas Gorontalo menawarkan kombinasi unik dari cita rasa yang lezat, beragam bahan lokal yang segar, dan kekayaan tradisi kuliner yang kaya. Dikemas dengan sentuhan budaya dan kearifan lokal, makanan khas daerah ini membangkitkan sensasi autentik yang memanjakan lidah dan menyelami kekayaan kuliner Gorontalo.
        </p>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <Link className="view-btn" to={`/Gorontalo/${recipe.title}`}>Lihat Resep</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gorontalo;