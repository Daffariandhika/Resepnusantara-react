import React from 'react';

function Ikanasinricha() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ikan Asin Richa</h2>

      <div className="recipe-description">
        <p>
        Ikan Asin Richa merupakan salah satu makanan tradisional yang berasal dari Kota Tarakan, Kalimantan Utara. Kota Tarakan adalah tempat yang sangat mudah untuk mendapatkan berbagai macam makanan laut, salah satunya adalah ikan asin. Ikan asin khas tarakan ini merupakan salah satu produk unggulan yang sudah di eksport ke Negara tetangga.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanutara/ikanasinricha.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>2 ekor ikan asin, cuci dan bersihkan</li>
            <li>5 butir bawang merah</li>
            <li>10 buah cabai merah keriting</li>
            <li>10 lembar daun jeruk, iris halus</li>
            <li>5 butir cabai rawit</li>
            <li>1 genggam daun kemangi</li>
            <li>1 sendok teh kaldu bubuk</li>
            <li>2 sendok makan minyak goreng untuk menumis</li>
            <li>1/2 sendok makan gula pasir</li>
            <li>1 sendok teh garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan cabai rawit, cabai merha keriting dan bawang merah, tumis dengan minyak panas hingga harum.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan irisan daun jeruk, gula, garam dan kaldu bubuk. Campurkan seluruhnya hingga rata</li>
        <h3>Langkah 3</h3>
            <li>Masukkan ikan asin kedalam wajan, aduk agar bumbu meresap. Masak hingga kering dan meresap.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan daun kemangi hingga daunnya layu. Jika sudah matang, angkat dan tiriskan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ikanasinricha;