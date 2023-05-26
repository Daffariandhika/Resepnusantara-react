import React from 'react';

function Perkedelnike() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Perkedel Nike</h2>

      <div className="recipe-description">
        <p>
        Berbeda dengan perkedel kebanyakan, perkedel khas Gorontalo ini merupakan perkedel yang terbuat dari ikan nike yaitu ikan yang berukuran kecil mirip seperti ikan teri.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/perkedel_nike.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>400 gram Ikan Nike</li>
            <li>5 sdm Tepung Terigu</li>
            <li>3 sdm Tepung Maizena</li>
            <li>3 sdm Tepung Bumbu Instant</li>
            <li>3 siung Bawang Putih</li>
            <li>2 siung Bawang Merah</li>
            <li>1/2 sdt Garam</li>
            <li>5 biji Cabe Rawit </li>
            <li>1 butir Telur</li>
            <li>Air</li>
            <li>Minyak goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan bahan-bahan, haluskan bawang putih, bawang merah dan cabe rawit</li>
        <h3>Langkah 2</h3>
            <li>Ini trio 3 tepung agar perkedelnya renyah</li>
        <h3>Langkah 3</h3>
            <li>Campurkan bawang putih, bawang merah dan cabe rawit yg sudah dihaluskan bersama ikan nike, telur, tepung terigu, tepung maizena, tepung bumbu instan, dan garam</li>
        <h3>Langkah 4</h3>
            <li>Tambahkan air secukupnya aduk hingga mengental. jangan terlalu cair yah</li>
        <h3>Langkah 5</h3>   
            <li>Goreng perkedel nike tipis-tipis kedalam minyak hingga tenggelam</li>
        <h3>Langkah 6</h3>   
            <li>Setelah kecokelatan angkat perkedel nike dan sajikan</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Perkedelnike;