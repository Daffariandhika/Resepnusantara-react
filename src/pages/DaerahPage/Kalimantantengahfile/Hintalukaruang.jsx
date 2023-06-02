import React from 'react';

function Hintalukaruang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Hintalu Karuang</h2>

      <div className="recipe-description">
        <p>
        Dalam Bahasa Indonesia, hintalu berarti telur sedangkan karuang adalah nama burung yang hidup di hutan-hutan Kalimantan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/hintalukaruang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Bahan bola-bola :</li>
            <li>200 gr tepung ketan</li>
            <li>75 gr tepung beras</li>
            <li>1 sdt air kapur sirih</li>
            <li>secukupnya air matang</li>
            <li>Bahan kuah :</li>
            <li>200 gr gula merah</li>
            <li>200 ml air</li>
            <li>750 ml santan sedang</li>
            <li>1 butir telur (kocok lepas)</li>
            <li>150 gr gula pasir</li>
            <li>2 lembar daun pandan</li>
            <li>2 sdm tepung beras (larutkan dgn sedikit air)</li>
            <li>1/2 sdt garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Buat dulu bahan bola-bola, campur tepung ketan, tepung beras dan air kapur sirih, tambahkan air sedikit demi sedikit sambil diaduk hingga kalis dan bisa dibentuk.</li>
        <h3>Langkah 2</h3>
            <li>Bentuk bulat-bulat sebesar kelereng dan letakkan dinampan yang sudah ditaburi sedikit tepung ketan, lakukan hingga adonan habis. Sisihkan</li>
        <h3>Langkah 3</h3>
            <li>Membuat kuah, rebus gula merah, gula pasir dan air hingga mendidih dan gula merah mencair, angkat dan saring. Rebus santan, daun pandan, garam dan air rebusan gula merah hingga mendidih, sambil diaduk ya agar santan tidak pecah.</li>
        <h3>Langkah 4</h3>
            <li>Setelah mendidih kecilkan api dan masukkan telur, aduk rata dan biarkan hingga berserabut. Kemudian masukkan bola-bola dan masak hingga mengapung. Terakhir masukkan larutan tepung beras dan aduk rata, biarkan mendidih sebentar dan matikan api. Bubur hintalu karuang siap disajikan</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Hintalukaruang;