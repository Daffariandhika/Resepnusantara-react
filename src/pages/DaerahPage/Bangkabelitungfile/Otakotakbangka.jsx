import React from 'react';

function Otakotakbangka() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Otak-otak Bangka</h2>

      <div className="recipe-description">
        <p>
        Makanan khas Bangka Belitung ini adalah salah satu kuliner yang memanfaatkan hasil laut. Otak-otak dibuat dari campuran daging ikan, tepung dan bumbu-bumbu rempah yang akan menambah kenikmatan cita rasanya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/otakotakbangka.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram ikan kakap giling</li>
            <li>150 gram tepung sagu</li>
            <li>2 bungkus santan kara 2x65 ml</li>
            <li>50 ml Air</li>
            <li>2 siung bawang putih halus</li>
            <li>3 butir putih telur</li>
            <li>6 siung bawang merah di iris</li>
            <li>2 Batang daun bawang di iris</li>
            <li>2 sdt garam halus</li>
            <li>secukupnya Lada bubuk, kaldu bubuk Secukupnya daun pisang yg sudah di lemaskan terlebih dahulu</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan bahan,
Masukkan daging ikan ke wadah pastikan tidak ada yg menggumpal lalu campurkan putih telur dan santan aduk hingga rata
</li>
        <h3>Langkah 2</h3>
            <li>Tambahkan garam dan kaldu bubuk aduk rata, tambahkan lagi bawang putih halus, bawang iris aduk rata, tambahkan tepung sagu bertahap aduk rata, tambahkan lagi tepung sagu hingga habis</li>
        <h3>Langkah 3</h3>
            <li>Aduk hingga rata.</li>
        <h3>Langkah 4</h3>
            <li>Siapkan daun pisang yang sudah dilemaskan di atas api kompor, ambil 1 sdm adonan, lalu gulung dan saya tutup kedua sisi dengan staples necis atau bisa dengan lidi
Lanjutkan membungkus hingga adonan habis.
</li>
        <h3>Langkah 5</h3>   
            <li>Panggang diteplon hingga matang, sajikan bersama cuko pempek</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Otak-otak adalah camilan lezat yang terbuat dari bahan dasar ikan. Makanan ini biasanya disajikan dengan saos kacang dan sambal. Makanan ini disebut otak-otak, karena memiliki warna dan tekstur yang mirip dengan otak, walaupun bahan dasarnya bukan dari otak.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Otakotakbangka;