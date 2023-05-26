import React from 'react';

function Esbrenebon() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Es Brenebon</h2>

      <div className="recipe-description">
        <p>
        Es brenebon sendiri merupakan es kacang merah yang dipadu dengan gula merah dan cokelat. Rasanya manis unik dan menyegarkan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/es_brenebon.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr kacang merah</li>
            <li>5 sdm kental manis coklat</li>
            <li>es batu, serut</li>
            <li>Bahan sirup:</li>
            <li>500 ml air</li>
            <li>200 gr gula merah</li>
            <li>100 gr gula pasir</li>
            <li>2 lbr daun pandan</li>
            <li>1/4 sdt garam</li>
            <li>1/4 sdt vanili bubuk</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Rendam kacang merah dengan air bersih selama semalam agar empuk. Cuci dan bilas setelahnya.</li>
        <h3>Langkah 2</h3>
            <li>2.	Rebus air dan masak kacang merah hingga empuk. Buang air rebusan pertama. Tiriskan.</li>
        <h3>Langkah 3</h3>
            <li>3.	Rebus air untuk sirup, masukkan semua bahan dan masak hingga larut dan mendidih. Masukkan kacang merah dan masak hingga mengental. Angkat dan biarkan dingin.</li>
        <h3>Langkah 4</h3>
            <li>4.	Untuk penyajian, siapkan es serut di dalam mangkuk.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Tuang brenebon kacang merah ke dalam mangkuk dan tumpuk lagi dengan es serut. Tuang kental manis di atasnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Esbrenebon;