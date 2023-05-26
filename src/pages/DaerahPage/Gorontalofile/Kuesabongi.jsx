import React from 'react';

function Kuesabongi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Sabongi</h2>

      <div className="recipe-description">
        <p>
        Camilan dari bahan singkong ini punya rasa gurih manis yang bikin nagih. Penasaran seperti apa rasanya?
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/kue_sabongi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 g singkong</li>
            <li>2 buah pisang kepok matang</li>
            <li>2 siung bawang putih</li>
            <li>1 sdm gula pasir</li>
            <li>1/2 sdt garam</li>
            <li>Minyak </li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Parut singkong dan potong-potong memanjang buah pisang.</li>
        <h3>Langkah 2</h3>
            <li>2.	Haluskan bawang putih bersama gula dan garam. Campurkan dengan singkong parut.</li>
        <h3>Langkah 3</h3>
            <li>3.	Ambil secukupnya, pipihkan dan isi dengan pisang kepok. Lakukan hingga adonan habis.</li>
        <h3>Langkah 4</h3>
            <li>4.	Goreng hingga matang kecokelatan. Angkat dan sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuesabongi;