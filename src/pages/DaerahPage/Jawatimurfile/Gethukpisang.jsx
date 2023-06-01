import React from 'react';

function Gethukpisang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gethuk Pisang</h2>

      <div className="recipe-description">
        <p>
        Getuk pisang adalah salah satu makanan khas Kediri. Tidak seperti getuk pada umumnya yang biasa terbuat dari singkong, ubi atau sukun, getuk pisang ini terbuat dari pisang. Pisang yang digunakan merupakan jenis pisang raja nangka karena memiliki citarasa yang khas, berbeda dengan pisang pada umumnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/gethukpisang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 sisir pisang kapok setengah matang</li>
            <li>25 gr tepung beras</li>
            <li>40 gr tepung tapioka</li>
            <li>1 sdt vanili</li>
            <li>Sejumput garam</li>
            <li>Daun pisang secukupnya</li>
            <li>6 sdm gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kukus pisang menggunakan kukusan yang telah dipanaskan terlebih dahulu hingga pisang matang. Kukus kurang lebih selama 20 menit.</li>
        <h3>Langkah 2</h3>
            <li>Setelah pisang matang, keluarkan dan kupas kulit pisang. Kemudian haluskan menggunakan tumbuh atau garpu.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan pisang yang telah dihaluskan ke dalam wadah, masukkan tepung tapioka, tepung beras, gula pasir, vanili dan garam. Campur adonan hingga merata.</li>
        <h3>Langkah 4</h3>
            <li>Bungkus adonan menyerupai lontong. Tusuk kedua ujung menggunakan lidi. Lakukan pada adonan yang masih tersisa.</li>
        <h3>Langkah 5</h3>   
            <li>Tata ke dalam panci kukus yang telah dipanaskan terlebih dahulu. Kukus selama 25-30 menit dengan api sedang.</li>
        <h3>Langkah 6</h3>   
            <li>Angkat gethuk pisang, biarkan dingin.</li>
        <h3>Langkah 7</h3>   
            <li>Setelah dingin, potong gethuk dan sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gethukpisang;