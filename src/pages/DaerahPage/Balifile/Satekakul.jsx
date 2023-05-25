import React from 'react';

function Satekakul() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Kakul</h2>

      <div className="recipe-description">
        <p>
        Sate kaku merupakan kuliner tradisional Bali yang berasal dari daerah Ubud. Sate kakul menggunakan bahan utama berupa siput dan memiliki cita rasa yang khas, tidak kalah dengan daging ayam ataupun sapi.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/satekakul.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>400 gr kerang darah</li>
            <li>2 batang serai</li>
            <li>1 sdm air asam jawa</li>
            <li>1/2 sdt garam</li>
            <li>400 ml air</li>
            <li>25 tusuk sate</li>
            <li>6 siung bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>2 cm jahe</li>
            <li>1 cm kencur</li>
            <li>2 buah kemiri sangrai</li>
            <li>1 sdt terasi</li>
            <li>1 sachet Saus Tiram</li>
            <li>2 sdm minyak sayur</li>
            <li>100 gr kacang tanah</li>
            <li>50 gr kelapa sangrai</li>
            <li>1 sdm kecap manis</li>
            <li>1 sdt garam</li>
            <li>200 ml air panas</li>
            <li>1 bungkus BonCabe</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus kerang dengan serai, air asam jawa dan garam. Masak hingga matang, tiriskan.</li>
        <h3>Langkah 2</h3>
            <li>Campurkan kerang dengan bumbu halus, aduk rata dan diamkan selama 15 menit</li>
        <h3>Langkah 3</h3>
            <li>Tusuk kerang dengan tusuk sate dan bakar diatas teflon hingga matang.</li>
        <h3>Langkah 4</h3>
            <li>Cara membuat Saus, tumis bawang putih sampai harum.</li>
        <h3>Langkah 5</h3>   
            <li>Masukkan kacang tanah dan kelapa sangrai. Bersamaan dengan kecap manis, garam dan air.</li>
        <h3>Langkah 6</h3>   
            <li>Masak hingga matang dan tambahkan BonCabe level 10, aduk rata. Matikan api.</li>
        <h3>Langkah 7</h3>   
            <li>Sajikan Sate Kakul dapat disajikan dengan sausnya.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Tak ada sejarah yang terlalu spesifik untuk sate kakul. namun ini merupakan makanan khas Bali yang banyak dijumpai dikarenakan mudahnya ditemukan keong atau siput sawah.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satekakul;