import React from 'react';

function Bubursekoi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bubur Sekoi</h2>

      <div className="recipe-description">
        <p>
        Makanan khas Bengkulu ini merupakan jenis bubur manis karena dibuat dari bahan dasar biji sekoi atau jewawut yang dimasak dengan santan, jahe, daun pandan, gula pasir, dan gula merah.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/bubursekoi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr sekoi </li>
            <li>400 ml air</li>
            <li>100 ml santan cair</li>
            <li>150 ml santan kental</li>
            <li>3 cm jahe (geprek)</li>
            <li>2 helai daun pandan</li>
            <li>1/4 sdt garam</li>
            <li>2 sdm gula putih (optional)</li>
            <li>Secukupnya gula merah</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih sekoi</li>
        <h3>Langkah 2</h3>
            <li>Panaskan air masukkan gula merah, daun pandan dan garam. Aduk-aduk. Masukkan sekoi lalu aduk lagi hingga menjadi bubur dan mengental. Masukkan santan cair. Aduk-aduk. Cicipi</li>
        <h3>Langkah 3</h3>
            <li>Kuah : Santan kental direbus tersendiri, tambahkan sedikit garam, dan daun pandan hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Hidangkan bubur sekoi dengan menuangkan santan kental di atasnya.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Bubur sekoi umumnya hanya dijual saat Bulan Ramadhan karena bubur ini kaya akan vitamin dan sangat baik sebagai menu berbuka puasa.Bubur Sekoi, Hidangan Buka Puasa Kaya Nutrisi Khas Bengkulu.Bubur yang terbuat dari biji jewawut ini cukup diminati oleh masyarakat Kota Bengkulu karena citarasa yang unik serta lezat.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bubursekoi;