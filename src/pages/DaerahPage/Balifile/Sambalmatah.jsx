import React from 'react';

function Sambalmatah() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambal Matah</h2>

      <div className="recipe-description">
        <p>
        Sambal matah sudah sangat populer di kalangan masyarakat dan wisatawan. Sambal yang satu ini sangat cocok untuk mendampingi makanan lain. Cita rasa pedas dari sambal matah dijamin akan membuat selera makan meningkat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/sambalmatah.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>8-10 buah Cabai rawit merah</li>
            <li>8 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>2 batang serai</li>
            <li>3 lembar daun jeruk</li>
            <li>4 sdm air jeruk limau</li>
            <li>1 sdt gula pasir</li>
            <li>1/2 sdt terasi bakar</li>
            <li>4 sdm minyak sayur</li>
            <li>1 sdt garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campur irisan cabai rawit merah, bawang merah dan putih, terasi, dan batang serai</li>
        <h3>Langkah 2</h3>
            <li>Tambahkan gula dan garam secukupnya</li>
        <h3>Langkah 3</h3>
            <li>Tambahkan daun jeruk dan air jeruk limau</li>
        <h3>Langkah 4</h3>
            <li>Setelah itu, tuang minyak sayur panas ke dalam campuran sambal</li>
        <h3>Langkah 5</h3>   
            <li>Aduk semua bahan sampai rata</li>
        <h3>Langkah 6</h3>   
            <li>Sambal matah siap disajikan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sambal matah adalah sambal tradisional Bali yang dapat ditemukan di seluruh daerah di Provinsi Bali. matah memiliki arti mentah. Sambal matah merupakan sambal yang berbahan mentah tanpa digerus (diulek). Bahan-bahan sambal matah yaitu: bawang merah, cabai merah, terasi, garam, sereh, jeruk lemo dan minyak kelapa. Nama sambal ini telah diubah demi diperkenalkan ke luar masyarakat Bali, nama asli sambal ini yakni sambel bawang namun karena menghindari persamaan dengan sambal bawang yang dikenal di luar Bali, maka sambal ini diberi nama sambal matah oleh pihak pariwisata. 
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambalmatah;