import React from 'react';

function Lempetikan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lempet Ikan</h2>

      <div className="recipe-description">
        <p>
        Lempet adalah makanan khas Bali yang terbuat dari ikan yang sudah diberi bumbu dan dibungkus dengan daun pisang. Lalu, lempet dipanggang di atas bara api hingga matang dan siap disajikan
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/lempetikan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>10 ekor ikan tongkol ukuran sedang</li>
            <li>65 ml Kara</li>
            <li>2 bh Gula merah</li>
            <li>1 bungkus Masako sapi</li>
            <li>secukupnya Garam</li>
            <li>10 bh bawang merah ukuran sedang</li>
            <li>5 siung besar bawang putih</li>
            <li>4 bh cabe merah besar</li>
            <li>20 bh cabe merah kecil</li>
            <li>Terasi abc kecil</li>
            <li>Daun pisang</li>
            <li>Staples</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci&bersihkan ikan dari tulangnya kemudian hancurkan daging ikan dgn blender/chopper</li>
        <h3>Langkah 2</h3>
            <li>Setelah ikan dihancurkan blender bumbu-bumbu sampai halus</li>
        <h3>Langkah 3</h3>
            <li>Lalu aduk ikan dan bumbu dalam wadah dgn menggunakan sendok atau spatula</li>
        <h3>Langkah 4</h3>
            <li>Jgn lupa beri santan masako dan garam sedikit</li>
        <h3>Langkah 5</h3>   
            <li>Kemudian ambil beberapa sendok ikan yg sudah di bumbui masukkan ke dalam daun pisang trus gulung dan beri staples</li>
        <h3>Langkah 6</h3>   
            <li>Setelah itu panggang ikan yg sdh di bungkus daun diatas panggangan yg sdh dipanaskan diatas kompor...panggang sampai warna daun kecoklatan</li>
        <h3>Langkah 7</h3>   
            <li>Lalu balik daun agar matang sempurna setelah itu baru angkat ikan dari panggangan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lempetikan;