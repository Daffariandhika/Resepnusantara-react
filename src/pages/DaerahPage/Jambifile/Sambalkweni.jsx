import React from 'react';

function Sambalkweni() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambal Kweni</h2>

      <div className="recipe-description">
        <p>
        Orang Jambi menggunakan mangga kweni karena memiliki aroma harum, rasa asam yang khas dan tekstur dagingnya lembut dan padat. Sambal kweni paling cocok dijadikan sebagai pendamping santapan ikan bakar dan hidangan bakar-bakaran lainnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/sambal_kweni.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 buah mangga kweni ukuran sedang</li>
            <li>8 buah cabe merah keriting</li>
            <li>4 buah cabe rawit</li>
            <li>1/2 blok terasi ABC</li>
            <li>1/2 sdt garam</li>
            <li>1/2 sdt gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kupas dan cincang mangga Kweni</li>
        <h3>Langkah 2</h3>
            <li>Ulek cabe keriting dan rawit, tambahkan terasi yang sudah dibakar, guladan garam. Ulek kasar saja.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan kweni cincang, aduk rata.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambalkweni;