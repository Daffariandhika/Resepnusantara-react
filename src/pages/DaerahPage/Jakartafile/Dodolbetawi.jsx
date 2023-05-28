import React from 'react';

function Dodolbetawi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Dodol Betawi</h2>

      <div className="recipe-description">
        <p>
        Dodol Betawi bercitarasa manis, berwarna hitam kecoklatan, dan teksturnya yang lengket.Varian rasa dodol Betawi hanya ada 3, yaitu ketan putih, durian, dan ketan hitam.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/dodol_betawi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr tepung beras</li>
            <li>1 liter santan kental dari 2 buah kelapa tua</li>
            <li>1,5 kg gula merah</li>
            <li>100 gr pasir</li>
            <li>4 lembar daun pandan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Masak gula pasir, gula merah, santan, daun pandan, sambil terus diaduk supaya santan tidak pecah Masak hingga mendidih dan gula larut lalu saring</li>
        <h3>Langkah 2</h3>
            <li>2.	Kemudian masak lagi bersama tepung beras ketan Aduk hingga rata dengan api kecil Masak hingga matang dan mengental serta tidak lengket di wajan, proses memasaknya kurang lebih 5 jam.</li>
        <h3>Langkah 3</h3>
            <li>3.	Kemas dalam wadah plastik, potong-potong dodol Betawi dan siap untuk dihidangkan untuk para kerabat saat lebaran.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Dodolbetawi;