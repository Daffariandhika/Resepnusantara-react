import React from 'react';

function Gulaikembaang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gulai Kemba'ang</h2>

      <div className="recipe-description">
        <p>
        Gulai kemba’ang adalah makanan khas Bengkulu yang dibuat dari bahan dasar iga sapi yang dimasak dengan aneka rempah. Gulai kemba’ang memiliki cita rasa yang sangat khas dengan aroma rempah yang cukup tajam.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/gulaikembaang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram iga sapi, dipotong-potong</li>
            <li>2 lembar daun salam</li>
            <li>400 ml santan dari 1/2 butir kelapa</li>
            <li>1 ikat (200 gram) daun pakis, disiangi</li>
            <li>5 lembar (100 gram) daun talas, direbus, diiris kasar</li>
            <li>2 sendok teh garam</li>
            <li>3 buah asam kandis</li>
            <li>3/4 sendok teh gula pasir</li>
            <li>100 gram kelapa parut, disangrai, dihaluskan</li>
            <li>2 sendok makan minyak untuk menumis</li>
            <li>BUMBU HALUS:</li>
            <li>8 butir bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>4 buah cabai merah</li>
            <li>2 cm lengkuas</li>
            <li>2 cm kunyit</li>
            <li>2 cm jahe</li>
            <li>3/4 sendok teh ketumbar</li>

          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus iga sapi dengan 800 ml air sampai empuk. Saring 600 ml air kaldunya. Didihkan lagi Panaskan minyak. Tumis bumbu halus dan daun salam sampai harum. Tuang ke rebusan iga. Tuang santan. Masak sampai mendidih dan matang.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan daun pakis, daun talas, garam, asam kandis, gula pasir, dan kelapa sangrai. </li>
        <h3>Langkah 3</h3>
            <li>Masak sampai matang. </li>
        <h3>Langkah 4</h3>
            <li>Angkat dan hidangkan untuk 5 porsi</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Gulai Kemba’ang adalah salah satu makanan khas Bengkulu yang populer, makanan ini dihidangkan dengan menggunakan santan sebagai kuahnya. Gulai ini dibuat dari iga sapi yang dimasak dengan bumbu khas Bengkulu. Kamu akan banyak menemukan makanan tradisional khas Bengkulu ini di waktu lebaran atau Bulan Ramadan.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gulaikembaang;