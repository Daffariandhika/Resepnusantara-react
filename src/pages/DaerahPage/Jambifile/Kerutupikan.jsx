import React from 'react';

function Kerutupikan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kerutup Ikan</h2>

      <div className="recipe-description">
        <p>
        Ada banyak sekali berbagai macam menu olahan ikan air tawar, salah satunya adalah kerutup ikan khas Jambi. Mungkin banyak orang belum terlalu familiar dengan makanan ini, namun sebenarnya mengolah kerutup ikan cukup sederhana. Ikan yang digunakan juga bisa beraneka ragam, disesuaikan saja. Cara memasaknya juga unik, disebut kerutup karena ikan yang dimasak mengeluarkan suara kerutup-kerutup. Ini dia resepnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/kerutup_ikan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>2 ekor ikan nila</li>
            <li>1 buah jeruk nipis</li>
            <li>1 sdt garam</li>
            <li>Bumbu iris:</li>
            <li>3 siung bawang merah</li>
            <li>2 buah cabe merah besar</li>
            <li>Bumbu halus:</li>
            <li>3 siung bawang merah</li>
            <li>2 siung bawang putih</li>
            <li>2 buah cabai rawit</li>
            <li>2 butir kemiri</li>
            <li>2 sdm air asam jawa</li>
            <li>1 cm kunyit</li>
            <li>1/2 sdt ketumbar</li>
            <li>garam, gula dan kaldu bubuk</li>
            <li>Bahan pembungkus:</li>
            <li>Daun pisang secukupnya</li>
            <li>tali untuk mengikat</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih ikan, buang isi perutnya. Lumuri dengan air jeruk nipis dann garam. Diamkan selama 15 menit. Cuci bersih.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan daun pisang di atas api hingga layu sehingga mudah dibentuk. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Campurkan bumbu halus dengan bumbu iris. Masukkan ikan dan lumuri merata dengan bumbu. Simpan di dalam kulkas selama 30 menit agar bumbu meresap.</li>
        <h3>Langkah 4</h3>
            <li>Keluarkan ikan, bungkus dengan daun pisang bersama bumbunya. Ikat dengan tali ujung-ujungnya.</li>
        <h3>Langkah 5</h3>   
            <li>Panggang selama 10 menit agar ikan setengah matang. Angkat.</li>
        <h3>Langkah 6</h3>   
            <li>Tuang sedikit minyak ke dalam minyak. Masukkan bungkusan ikan.</li>
        <h3>Langkah 7</h3>   
            <li>Tutup, dan masak kerutup ikan hingga matang. Tandanya adalah daun pisang sudah mulai gosong.</li>
        <h3>Langkah 8</h3>   
            <li>Angkat dan buka bungkusan. Sajikan kerutup ikan dengan nasi hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kerutupikan;