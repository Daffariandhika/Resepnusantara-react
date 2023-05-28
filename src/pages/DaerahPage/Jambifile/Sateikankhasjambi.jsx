import React from 'react';

function Sateikankhasjambi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Ikan khas Jambi</h2>

      <div className="recipe-description">
        <p>
        Sate ikan khas Jambi tidak diolah dengan ditusuk dan dibakar, melainkan dengan menghaluskan daging ikan, lalu dibungkus daun pisang dan direbus.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/sate_ikan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gram daging ikan kakap, dihaluskan</li>
            <li>150 ml santan dari 1 butir kelapa</li>
            <li>1 butir telur ayam, dikocok lepas</li>
            <li>daun pisang, untuk membungkus</li>
            <li>Bumbu halus:</li>
            <li>4 butir bawang merah, digoreng</li>
            <li>2 siung bawang putih, digoreng</li>
            <li>1/2 sendok teh ketumbar</li>
            <li>2 cm kunyit, dibakar, diiris</li>
            <li>1 batang serai, diambil putihnya</li>
            <li>3/4 sendok teh garam</li>
            <li>3/4 sendok teh gula pasir</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campur daging ikan, santan, telur, dan bumbu halus. Aduk rata.</li>
        <h3>Langkah 2</h3>
            <li>Ambil daun pisang. Beri adonan. Bungkus tum. Kukus 25 menit dengan api sedang sampai matang.</li>
        <h3>Langkah 3</h3>
            <li>Untuk kurang lebih 13 bungkus</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sateikankhasjambi;