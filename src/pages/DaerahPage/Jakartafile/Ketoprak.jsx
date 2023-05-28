import React from 'react';

function Ketoprak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ketoprak</h2>

      <div className="recipe-description">
        <p>
        Ketupat yang dicampur berbagai sayur dan dibalut dengan saus kacang yang didominasi rasa manis dari kecap dengan pelengkap taburan bawang merah.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/ketoprak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>2 buah lontong, dipotong-potong</li>
            <li>1 kepal bihun, direbus sebentar lalu ditiriskan</li>
            <li>1 kepal tauge, direbus sebentar</li>
            <li>2 buah tahu goreng</li>
            <li>Bumbu Kacang:</li>
            <li>3 sdm kacang tanah goreng, dihaluskan</li>
            <li>1 siung bawang putih</li>
            <li>2 buah cabai rawit</li>
            <li>1/4 balok gula Jawa</li>
            <li>5 sdm air</li>
            <li>1/2 sdt garam</li>
            <li>Bahan Pelengkap:</li>
            <li>telur rebus</li>
            <li>bawang goreng</li>
            <li>kerupuk</li>
            <li>kecap manis</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Ulek bawang putih, cabai, gula Jawa, dan garam. Tambahkan kacang. Ulek sampai halus, lalu tambahkan air</li>
        <h3>Langkah 2</h3>
            <li>2.	Sajikan lontong, bihun, tauge, dan tahu dengan siraman bumbu kacang.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tambahkan kecap, bawang goreng, telur, dan kerupuk. Ketoprak Betawi siap dinikmati.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ketoprak;