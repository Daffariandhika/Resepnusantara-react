import React from 'react';

function Geguduhpisang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Geguduh Pisang</h2>

      <div className="recipe-description">
        <p>
        Geguduh adalah salah satu camilan tradisional Lampung yang bercita rasa manis. Bahan baku utama geguduh adalah pisang kepok. Pisang tersebut akan dihaluskan sampai lembut atau kasar kemudian ditambah dengan tepung terigu, lalu diaduk hingga merata
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/geguduhpisang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>4 buah pisang kepok</li>
            <li>6 sdm tepung terigu</li>
            <li>2 sdm keju parut</li>
            <li>1 sdm tepung maizena</li>
            <li>1 sdm kental manis putih</li>
            <li>1 sdt gula pasir</li>
            <li>1/4 sdt baking powder</li>
            <li>1/4 sdt vanili bubuk</li>
            <li>sejumput kayu manis</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan pisang dengan garpu atau blender. Tuang ke dalam wadah.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan tepung terigu, maizena, keju, kental manis, vanili, kayu manis dan baking powder</li>
        <h3>Langkah 3</h3>
            <li>Jika semua bahan sudah tercampur, panaskan minyak.</li>
        <h3>Langkah 4</h3>
            <li>Goreng setiap satu sendok hingga matang dan kecokelatan. Angkat</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Geguduhpisang;