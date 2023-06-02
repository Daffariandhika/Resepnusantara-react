import React from 'react';

function Sambalgamiudang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambal Gami Udang</h2>

      <div className="recipe-description">
        <p>
        Gami yang berarti sambal ini adalah salah satu hidangan khas dari Bontang, Kalimantan Timur. Dibuat menggunakan cobek tanah liat, untuk mendapatkan cita rasa dan aroma unik tanah liat. Rasa pedas cabai dan gurihnya udang berpadu apik dalam sebuah hidangan sambal lezat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantimur/sambalgamiudang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>6 buah cabai merah keriting, potong-potong</li>
            <li>10 buah cabai rawit merah</li>
            <li>6 butir bawang merah, iris-iris</li>
            <li>1 sdt terasi bakar</li>
            <li>½ sdt garam</li>
            <li>1 sdt gula pasir</li>
            <li>1 buah tomat, potong-potong</li>
            <li>250 g udang, kupas, tinggalkan ekornya</li>
            <li>4 sdm minyak goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Dalam cobek tanah liat, gerus kasar cabai merah, cabai rawit, bawang merah, terasi, garam dan gula pasir.</li>
        <h3>Langkah 2</h3>
            <li>Tambahkan tomat, gerus kasar. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan minyak dalam wajan. Tumis sambal hingga harum, masukkan udang. Masak hingga udang matang. Angkat. Sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambalgamiudang;