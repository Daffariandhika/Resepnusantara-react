import React from 'react';

function Kopisingkawang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kopi Singkawang</h2>

      <div className="recipe-description">
        <p>
        kopi khas robusta tradisional dari Kalimantan Barat, berbagai sajian kopi dibuat dengan cita rasa yang nikmat. namun yang istimewa dari kopi ini ialah ketika kita menikmatinya langsung di tempatnya yang terkenal yaitu di tengah-tengah kawasan kota tua Singkawang, Kalimantan Barat, Toko Kopi Nikmat. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanbarat/kopisingkawang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Kopi robusta khas Kalimantan Barat</li>
            <li></li>
            <li>air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus air hingga mendidih,sekitar 100 drajat Celcius</li>
        <h3>Langkah 2</h3>
            <li>matikan kompor dan tunggu suhu air menurun sampai 80 drajat Celcius</li>
        <h3>Langkah 3</h3>
            <li>Seduh kopi</li>
        <h3>Langkah 4</h3>
            <li>untuk penambahan gula atau susu opsional</li>
        </ul>
      </div>
      
      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kopisingkawang;