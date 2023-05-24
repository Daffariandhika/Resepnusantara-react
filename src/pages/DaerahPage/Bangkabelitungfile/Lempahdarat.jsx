import React from 'react';

function Lempahdarat() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lempah Darat</h2>

      <div className="recipe-description">
        <p>
        Bahan utama membuat sayur ini bisa berbagai macam dan berbeda-beda diantaranya ada daun papaya muda, akar keladi, pucuk idat, dan lain sebagainya. Sayur ini dimasak dengan rempah yang kaya dan kuat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/lempahdarat.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>4 batang keladi talas</li>
            <li>50 gr kol</li>
            <li>50 gr buncis</li>
            <li>1 buah terong ungu</li>
            <li>1 batang wortel</li>
            <li>1/2 buah jagung manis</li>
            <li>1/2 buah labu siam</li>
            <li>Segenggam daun melinjo</li>
            <li>1 liter air</li>
            <li>BUMBU HALUS:</li>
            <li>5 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>2 butir kemiri</li>
            <li>1 buah cabe merah</li>
            <li>1 sdm ebi</li>
            <li>2 sdm terasi bakar</li>
            <li>BAHAN PERASA:</li>
            <li>Gula, garam, kaldu jamur</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Bersihkan dan cuci bersih semua bahan. Saran nyucinya pake plastik atau sarung tangan terutama keladi talas, karena gatel.</li>
        <h3>Langkah 2</h3>
            <li>Haluskan bumbu, tambah terasi dan rebon. Saya pake ulekan</li>
        <h3>Langkah 3</h3>
            <li>Didihkan air hingga mendidih, kemudian masukkan bumbu halus dan sayuran. Masukkan garam, gula, dan kaldu jamur. Tes rasa</li>
        <h3>Langkah 4</h3>
            <li>Enak dimakan hangat ditemani ikan goreng</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Lempah darat dibuat dari berbagai macam sayur hasil perkebunan masyarakat. Yang uniknya, mereka memasak lempah dari sayuran yang tidak terlalu dibutuhkan dan diperhatikan. 
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lempahdarat;