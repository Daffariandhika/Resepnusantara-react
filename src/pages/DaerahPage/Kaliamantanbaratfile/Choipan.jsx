import React from 'react';

function Choipan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Choipan</h2>

      <div className="recipe-description">
        <p>
        Choi pan merupakan hidangan Tionghoa yang dikenal di beberapa daerah seperti Bangka-Belitung dan Kalimantan Barat. Choi pan merupakan istilah bahasa Hakka yang berarti "kue yang berisi sayuran". Dalam bahasa Tiochiu hidangan ini disebut chai kue yang artinya kurang lebih sama
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanbarat/choipan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>140 gr tepung beras</li>
            <li>3 sdm tepung sagu</li>
            <li>450 gr air (ditimbang)</li>
            <li>Sedikit garam</li>
            <li>2 sdm minyak goreng</li>
            <li>Isian:</li>
            <li>1 bh bengkuang, parut</li>
            <li> 1/2 btg wortel , parut</li>
            <li> 1 btg daun seledri</li>
            <li> 2 siung bawang putih + 1 sdm ebi dihaluskan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1 membuat kulit</h3>
            <li>Campur semua bahan di atas. Aduk rata. Lalu masak di atas kompor dengan wajan antilengket. Aduk terus sampai menggumpal. Matikan api. Lalu aduk hingga membentuk adonan yang licin.</li>
        <h3>Langkah 2</h3>
            <li>. Adonan siap dibungkus. Ambil kira-kira 1 sdm adonan. Pipihkan lalu beri isian. Bungkus. Jangan lupa kedua tangan dibalurin dengan tepung sagu.</li>
        <h3>Langkah 3</h3>
            <li>Kukus selama 10 menit. Sajikan dgn sambal.</li>
        <h3>Langkah 4 isian</h3>
            <li>Tumis bumbu yang dihaluskan sampai wangi, masukkan bengkuang, wortel aduk rata.</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan penyedap jamur, sedikit garam dan lada. Masukkan seledri lalu angkat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Choipan;