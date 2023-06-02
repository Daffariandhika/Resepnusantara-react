import React from 'react';

function Dodolkandangan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Dodol Kandangan</h2>

      <div className="recipe-description">
        <p>
        Dodol Kandangan adalah makanan khas produksi masyarakat Kandangan, Hulu Sungai Selatan, Kalimantan Selatan, secara turun temurun. Bahan utama pembuatan penganan ini adalah beras ketan dan gula aren. Dodol kandangan banyak dikemas secara sederhana dengan rasa sangat manis.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanselatan/dodolkandangan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 bungkus agar2 coklat</li>
            <li>1 bungkus susu kental manis coklat</li>
            <li>1 bungkus susu bubuk</li>
            <li>200 ml santan kental</li>
            <li>200 ml air</li>
            <li>100 gr gula pasir</li>
            <li>50 gr kacang tanah goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campurkan semua bahan kecuali kacang tanah goreng</li>
        <h3>Langkah 2</h3>
            <li>Masak dan aduk2 sampai mengental</li>
        <h3>Langkah 3</h3>
            <li>Setelah kental, angkat dan taruh di wadah kemudian taburin kacang tanah yg sudah diblender kasar diatasnya</li>
        <h3>Langkah 4</h3>
            <li>Setelah dingin potong - potong dodol dan bungkus dengan plastik</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Dodolkandangan;