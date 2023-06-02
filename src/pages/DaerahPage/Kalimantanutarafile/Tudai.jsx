import React from 'react';

function Tudai() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Tudai</h2>

      <div className="recipe-description">
        <p>
        TUDAI adalah sebutan nama yang diberikan masyarakat Kalimantan Utara untuk kerang darah Anadara Granosa.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanutara/tudai.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg Tudai kupas</li>
            <li>15 biji Bawang merah</li>
            <li>5 biji Bawang putih</li>
            <li>20-30 biji Lombok kecil</li>
            <li>3 biji Lombok keriting</li>
            <li>1 biji Jeruk</li>
            <li>3 biji Tomat</li>
            <li>2 sendok makan Gula merah</li>
            <li>Garam</li>
            <li>1-2 sachet Penyedap rasa royco</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Tumis bawang merah, bawang putih, lombok kecil, lombok keriting, dan tomat sampai harum.</li>
        <h3>Langkah 2</h3>
            <li>Masukan tuday kupas yg sudah dicuci bersih, tambahkan air, gula merah, penyedap rasa, garam dan perasan air jeruk nipis.</li>
        <h3>Langkah 3</h3>
            <li>Aduk rata, tutup wajan, tunggu sampe kering dan bau amisnya hilang.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Tudai;