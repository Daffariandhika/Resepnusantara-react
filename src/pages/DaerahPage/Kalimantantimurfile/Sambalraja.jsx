import React from 'react';

function Sambalraja() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambal Raja</h2>

      <div className="recipe-description">
        <p>
        Sambal raja dari Kutai ini sendiri sebenarnya tidak selalu disebut sebagai sambal raja. Sajian pedas ini umum juga disebut sebagai sambal kutai - sebuah nomenklatur yang lebih generik. Sambalnya tetap sederhana dan membumi, tetapi disajikan dengan telur dan sayuran yang digoreng untuk memberi sentuhan keistimewaan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantimur/sambalraja.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 buah terong, potong dadu</li>
            <li>10 lonjor kacang panjang, potong 2 cm</li>
            <li>10 siung bawang merah, belah 4</li>
            <li>Haluskan :</li>
            <li>10 buah cabe rawit</li>
            <li>10 buah cabe merah besar, buang biji</li>
            <li>1 bks terasi kecil</li>
            <li>2 buah jeruk limau</li>
            <li>1/2 sdt garam</li>
            <li>1 sdm gula pasir</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Goreng kacang panjang, terong dan bawang merah sebentar dengan minyak panas.Tiriskan.</li>
        <h3>Langkah 2</h3>
            <li>Ulek cabe rawit, cabe merah, terasi, garam dan gula pasir. Beri perasan jeruk limau. (Kulit jeruk jangan di buang, iris halus kulit jeruk)</li>
        <h3>Langkah 3</h3>
            <li>Tumis sambal hingga harum, masukkan kacang panjang, terong dan bawang merah yang telah di goreng tadi. Aduk rata sebelum di angkat masukkan irisan kulit jeruk limau. Aduk rata. Matikan api.</li>
        <h3>Langkah 4</h3>
            <li>Sambal Raja Kutai siap di sajikan</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambalraja;