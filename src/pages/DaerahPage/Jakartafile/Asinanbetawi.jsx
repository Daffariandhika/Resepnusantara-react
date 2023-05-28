import React from 'react';

function Asinanbetawi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Asinan Betawi</h2>

      <div className="recipe-description">
        <p>
        Asinan betawi biasanya menggunakan kuah dengan bumbu kacang, Selain itu ciri khas dari asinan betawi adalah penggunaan sawi asin, air gula, serta bumbu kacangnya yang menjadi pembeda diantara asinan lainnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/asinan_betawi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>150 gr taoge</li>
            <li>150 gr kol yang diiris.</li>
            <li>6 lembar selada keriting.</li>
            <li>100 gr sawi asin</li>
            <li>100 gr timun</li>
            <li>30 gr kacang tanah goreng</li>
            <li>100 gr tahu putih</li>
            <li>Bahan bumbu kacang:</li>
            <li>60 gr kacang tanah</li>
            <li>5 buah cabai keriting</li>
            <li>100 gr gula merah</li>
            <li>2 sdm ebi</li>
            <li>2 sdt cuka beras</li>
            <li>1 sdt garam</li>
            <li>220 ml air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Langkah pertama bersihkan semua bahan sayuran dan potong sesuai dengan selera, lalu sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>2.	Kemudian buat bumbu kacang dengan menghaluskan kacang tanah, cabai keriting, gula merah, air asam jawa, ebi, cuka beras, garam, dan air hingga halus dan merata.</li>
        <h3>Langkah 3</h3>
            <li>3.	Kemudian siapkan piring, masukkan semua sayuran, lalu tuang bumbu kacang dan aduk hingga merata. Lalu tambahkan asinan dengan kerupuk</li>
        <h3>Langkah 4</h3>
            <li>4.	Asinan betawi siap disajikan. Itulah cara mudah membuat asinan betawi ala rumahan yang khas dan nikmat.</li>
        </ul>
      </div>


      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Asinanbetawi;