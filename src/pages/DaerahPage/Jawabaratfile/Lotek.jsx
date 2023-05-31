import React from 'react';

function Lotek() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lotek</h2>

      <div className="recipe-description">
        <p>
        lotek merupakan makanan khas sunda yang terbuat dari campuran sayur-sayuran yang dibumbui dengan saus kacang, dan jika dilihat sepintas mirip dengan gado-gado.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/lotek.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>100
g taoge, siangi</li>
            <li>1
buah labu siam, kupas, potong kotak 2 cm</li>
            <li>200
g kangkung, siangi</li>
            <li>100
g kacang panjang, potong 4 cm</li>
            <li>100
g kol, potong kasar</li>
            <li>4
buah tahu goreng</li>
            <li>4
potong tempe goreng
air, untuk merebus</li>
            <li>BUMBU LOTEK:</li>
            <li>100
g kacang tanah goreng</li>
            <li>10
buah cabai rawit merah</li>
            <li>50
g gula merah</li>
            <li>4
cm kencur</li>
            <li>1
sdt garam</li>
            <li>1
siung bawang putih</li>
            <li>½
sdm asam jawa, larutkan dengan 1 sdm air panas</li>
            <li>1
sdt
Royco Kaldu Jamur</li>
            <li>200
ml air</li>
            <li>
Bango Kecap Manis</li>
            <li>bawang goreng</li>
            <li>2
buah jeruk limau dan kerupuk</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Bumbu lotek: Haluskan kacang tanah, cabai rawit, bawang putih, kencur, dan gula merah. Tambahkan air, asam jawa, dan Royco Kaldu Jamur, aduk rata. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Didihkan air, rebus atau blansir semua sayuran secara bergantian. Tiriskan. Sisihkan. </li>
        <h3>Langkah 3</h3>
            <li>Masukkan semua bahan sayuran, tahu, dan tempe dalam mangkuk besar. Tuang bumbu lotek, aduk rata. </li>
        <h3>Langkah 4</h3>
            <li>Sendokkan ke dalam piring saji. Tambahkan bawang goreng, kerupuk, dan perasan jeruk limau. Sajikan dengan Bango Kecap Manis.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lotek;