import React from 'react';

function Habangbanjar() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Habang Banjar</h2>

      <div className="recipe-description">
        <p>
        Bumbu masak Habang merupakan bumbu yang sangat umum ditemukan dalam berbagai macam masakan khas suku Banjar. Habang dalam bahasa Banjar memiliki arti merah. Bumbu masak habang sesuai dengan namanya memiliki tampilan berwarna merah
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanselatan/habangbanjar.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1
ekor (800 g) ayam, potong 8 bagian</li>
            <li>1
sdt asam jawa, larutkan dengan 2 sdm air hangat</li>
            <li>1
L air</li>
            <li>2
sdm minyak, untuk menumis</li>
            <li>Bumbu Halus</li>
            <li>12
buah cabai merah kering, buang biji, rendam air hangat</li>
            <li>8
butir bawang merah</li>
            <li>5
siung bawang putih</li>
            <li>2
cm jahe</li>
            <li>2
sdt garam</li>
            <li>1 sdm Bango Kecap Manis</li>
            <li>1 sdm gula pasir</li>
            <li>1
cm kencur</li>
            <li>½
sdt terasi bakar</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Dalam mangkuk, lumuri ayam dengan air asam jawa. Diamkan di kulkas selama 10 menit.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak, tumis bumbu halus dengan Bango Kecap Manis hingga harum.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan ayam dan air, aduk rata. Masak hingga ayam matang dan air mengering.</li>
        <h3>Langkah 4</h3>
            <li>Angkat dan sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Habangbanjar;