import React from 'react';

function Seblak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Seblak</h2>

      <div className="recipe-description">
        <p>
        Seblak adalah masakan khas Sunda yang berasal dari wilayah Parahyangan dengan cita rasa gurih dan pedas. Terbuat dari kerupuk yang terdiri dari bawang putih dengan kencur.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/seblak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>100 gram kerupuk</li>
            <li>7 lembar daun caisim/sawi hijau</li>
            <li>5 butir bakso sapi</li>
            <li>1 butir telur</li>
            <li>air</li>
            <li>garam dan gula</li>
            <li>Bumbu yang dihaluskan</li>
            <li>2 ruas kencur</li>
            <li>2 butir bawang merah</li>
            <li>1 butir bawang putih</li>
            <li>5 buah cabe rawit merah </li>
            <li>3 buah cabe keriting merah</li>
            <li>anda dapat menambahkan isian apapun sesuai selera</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Pertama, rendam dulu kerupuk dengan air biasa (kira-kira 30 menit) biar pas dimasak cepat lembek dan ga keras, lalu potong2 daun caisim dan bakso sapi sesuai selera</li>
        <h3>Langkah 2</h3>
            <li>Haluskan bumbu lalu tumis sampai harum, setelah harum tambahkan air kira-kira 1 gelas (mau dibanyakin airnya jg gpp klo mau berkuah kayak yg aku bikin), tunggu air sampai mendidih</li>
        <h3>Langkah 3</h3>
            <li>Masukan telur yg sebelumnya sudah di kocok lepas</li>
        <h3>Langkah 4</h3>
            <li>Selanjutnya masukan kerupuk, bakso dan caisim, serta gula dan garam, masak hingga matang dan sajikan selagi hangat </li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Seblak;