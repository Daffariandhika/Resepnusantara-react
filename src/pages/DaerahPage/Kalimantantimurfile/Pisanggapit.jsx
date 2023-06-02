import React from 'react';

function Pisanggapit() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Pisang Gapit</h2>

      <div className="recipe-description">
        <p>
        Resep pisang gapit yang enak dan lembut cukup praktis dibuat. Saat ini, kuliner asal Kalimantan ini mudah ditemui di berbagai daerah di Indonesia. Rasanya yang manis dan enak, membuat pisang gapit digemari semua kalangan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantimur/pisanggapit.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Pisang kepok setengah matang</li>
            <li>Margarin</li>
            <li>Topping :</li>
            <li>Topping :</li>
            <li>Susu kental manis</li>
            <li>Saus:</li>
            <li>500 ml santan (dari 1/2 butir kelapa)</li>
            <li>100 gram gula merah</li>
            <li>3 sdm gula pasir (sesuai selera)</li>
            <li>2 lembar daun pandan, simpulkan</li>
            <li>1 sdm maizena (larutkan dg sedikit air)</li>
            <li>1/2 sdt garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Saus: campur santan, gula merah & gula putih dlm panci, masak dg api kecil sampai gula larut, masukkan daun pandan & garam, aduk2 agar santan tdk pecah, masukkan maizena, aduk sampai kental, matikan api, dinginkan.</li>
        <h3>Langkah 2</h3>
            <li>Tekan pisang beserta kulit dg bantuan telenan, buka kulitnya lalu panggang diatas teflon yg sdh dioles margarin sampai matang kedua sisinya, angkat, potong2, sajikan dg saus gula merah, parutan keju & susu kental manis (bila suka)</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Pisanggapit;