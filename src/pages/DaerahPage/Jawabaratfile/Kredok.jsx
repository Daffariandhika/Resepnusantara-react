import React from 'react';

function Kredok() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kredok</h2>

      <div className="recipe-description">
        <p>
        Karedok merupakan makanan khas di kalangan masyarakat Sunda, termasuk Jawa Barat. Makanan tradisional karedok berupa sayuran mentah, seperti tauge, ketimun, kol, kacang panjang, daun kemangi, dan terong.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/kredok.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>100
g taoge</li>
            <li>100
g kacang panjang, iris</li>
            <li>75
g kol, iris</li>
            <li>1
ikat daun kemangi, petik</li>
            <li>2
buah terung lalap, iris</li>
            <li>2
buah mentimun, iris</li>
            <li>BUMBU HALUS:</li>
            <li>175
g kacang tanah, buang kulit dan goreng</li>
            <li>45
g gula merah</li>
            <li>1
siung bawang putih</li>
            <li>3
buah cabai rawit merah</li>
            <li>3
cm kencur</li>
            <li>2
sdm air asam jawa</li>
            <li>1
sdm
Bango Kecap Manis Light</li>
            <li>1
sdt garam</li>
          <li>100
ml air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan bumbu dan pindahkan bumbu halus ke dalam mangkuk besar.</li>
        <h3>Langkah 2</h3>
            <li>Tambahkan air ke dalam mangkuk, lalu tuangkan Bango Kecap Manis Light dan aduk hingga bumbu tercampur rata.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan semua sayuran. Aduk hingga rata dan hidangkan di piring saji.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kredok;