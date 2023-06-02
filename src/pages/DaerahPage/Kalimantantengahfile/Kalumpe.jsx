import React from 'react';

function Kalumpe() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kalumpe</h2>

      <div className="recipe-description">
        <p>
        Kalumpe atau Karuang adalah salah satu masakan khas Dayak, Kalimantan Tengah yang berbahan dasar daun singkong. Daun singkong yang digunakan adalaha daun yang ditumbuk halus menggunakan lesung/lisung. Nama Kalumpe digunakan oleh masyarakat Dayak Maanyan sedangkan penyebutan Karuang dalam bahasa Dayak Ngaju
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/kalumpe.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ikat daun singkong, tumbuk</li>
            <li>1 bungkus santan sasa</li>
            <li>1 ruas lengkoas</li>
            <li>2 lembar daun salam</li>
            <li>secukupnya garam, gula dan knor</li>
            <li>Bumbu halus:</li>
            <li>4 siung bawang merah</li>
            <li>2 siung bawang putih</li>
            <li>3 biji cabe rawit merah</li>
            <li>4 biji cabe merah keriting</li>
            <li>1 batang sereh, ambil putihnya</li>
            <li>1 ruas jahe</li>
            <li>1/2 sdt merica</li>
            <li>1/2 buah tomat</li>
            <li>1 butir kemiri, sangrai</li>
            <li>1/2 sdm terasi, bakar</li>
            <li>Pelengkap:</li>
            <li>Kacang tanah goreng</li>
            <li>Ikan teri atau ikan asin</li>
            <li>Sambal terasi</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan bahan blender bumbu halus dan tumbuk daun singkong. Lalu goreng kacang tanah dan ikan teri kemudian sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Tumis bumbu halus tambahkan lengkoas dan daun salam masak sampai harum dan matang. Tuang santan dan air, aduk merata masak sampai santan mendidih. Masukan tumbukan daun singkong, aduk merata beri garam, gula dan knorr masak sampai matang.</li>
        <h3>Langkah 3</h3>
            <li>Siapkan mangkuk tuang kalumpe dan sajikan dengan pelengkapnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kalumpe;