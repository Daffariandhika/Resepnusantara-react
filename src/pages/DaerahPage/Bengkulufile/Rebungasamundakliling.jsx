import React from 'react';

function Rebungasamundakliling() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Rebung Asam Undak Liling</h2>

      <div className="recipe-description">
        <p>
        Gulai Rebung Asam Undak Liling merupakan salah satu kuliner khas dari daerah Bengkulu. Makanan bersantan ini terbuat dari rebung atau tunas bambu muda.Rebung akan diolah menjadi gulai dan dipadukan dengan keong sawah (liling).
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/rebungasamundakliling.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Rebung</li>
            <li>Liling / keong sawah bisa diganti ikan</li>
            <li>santah dari 1 buah kelapa</li>
            <li>1 cm jahe, memarkan</li>
            <li>1 batang serai, memarkan</li>
            <li>1 batang daun bawang, potong</li>
            <li>BUMBU HALUS:</li>
            <li>8 buah cabai keriting</li>
            <li>3 siung bawang merah</li>
            <li>3 cm lengkuas</li>
            <li>2 siung bawang putih</li>
            <li>2 cm kunyit</li>
            <li>1 sdm garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Masukkan bumbu yang dihaluskan dan serai serta jahe ke dalam wajan.</li>
        <h3>Langkah 2</h3>
            <li>2.	Masukkan santan sambil diaduk hingga mulai mendidih, lalu masukkan rebung asam.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tambahkan Liling atau ikan, setelah matang tambahkan daun bawang, aduk sebentar lalu angkat dan hidangkan.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        tidak ada sejarah pasti mengenai makanan satu ini. Namun, Gulai Rebung Asam Undak Liling merupakan salah satu kuliner khas dari daerah Bengkulu. Makanan bersantan ini terbuat dari rebung atau tunas bambu muda.Rebung akan diolah menjadi gulai dan dipadukan dengan keong sawah (liling).
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Rebungasamundakliling;