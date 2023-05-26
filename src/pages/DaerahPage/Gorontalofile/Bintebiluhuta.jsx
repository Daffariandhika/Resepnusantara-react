import React from 'react';

function Bintebiluhuta() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Binte Biluhuta</h2>

      <div className="recipe-description">
        <p>
        Sajian binte biluhuta menjadi salah satu makanan khas Gorontalo yang terkenal. Dalam bahasa Indonesia, binte biluhuta berarti jagung yang disiram. Binte biluhuta memiliki cita rasa manis, asin dan pedas.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/binte_biluhuta.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 buah jagung manis ukuran sedang</li>
            <li>1/4 butir kelapa yg agak muda. (Parut)</li>
            <li>200 gr ikan asar / ikan tuna (suwir)</li>
            <li>200 gr udang </li>
            <li>2 batang daun pre (rajang kasar)</li>
            <li>1/4 sdt Penyedap</li>
            <li>1 sdm air perasan jeruk nipis</li>
            <li>1 liter air</li>
            <li>BAHAN HALUS:</li>
            <li>4 buah cabe rawit</li>
            <li>2 siung bawang putih</li>
            <li>1 sdt garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus air bersamaan dengan jagung</li>
        <h3>Langkah 2</h3>
            <li>Masukkan bumbu yg dihaluskan</li>
        <h3>Langkah 3</h3>
            <li>Setelah jagung berubah warna, masukkan ikan suwir beserta udang. Masak kurleb 5 menit.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan penyedap, kemudian kelapa yg sudah diparut aduk.</li>
        <h3>Langkah 5</h3>   
            <li>Next Masukkan daun pre dan air perasan jeruk nipis. Koreksi rasa.</li>
        <h3>Langkah 6</h3>   
            <li>Siap dihidangkan dengan nasi panas</li>
    
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bintebiluhuta;