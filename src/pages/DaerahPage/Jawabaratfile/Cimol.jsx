import React from 'react';

function Cimol() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Cimol</h2>

      <div className="recipe-description">
        <p>
        Cimol adalah makanan ringan khas Sunda yang dibuat dari tepung kanji. Cimol berasal dari kata aci digemol yang artinya tepung kanji dibentuk bulat-bulat. Cimol biasanya dijual di pinggir jalan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/cimol.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr (12,5 sdm) tepung tapioka atau tepung kanji</li>
            <li>150 ml air</li>
            <li>4 siung bawang putih, haluskan</li>
            <li>1/2 sdt lada</li>
            <li>1/2 sdt kaldu bubuk</li>
            <li>1/4 sdt garam</li>
            <li>Bumbu barbeque (sesuai selera)</li>
            <li>Minyak untuk menggoreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Masak air bersama bawang putih sampai mendidih.</li>
        <h3>Langkah 2</h3>
            <li>Kemudian masukkan ke dalam tepung tapioka yang telah diberi garam, kaldu bubuk, dan lada, aduk menggunakan sendok atau centong hingga adonan kalis atau bisa dibentuk, setelah agak hangat dilanjutkan mengaduk dengan tangan (pastikan tangan bersih saat menguleni) bentuk bulat-bulat, sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Siapkan wajan, lalu tuang minyak goreng, masukkan cimol tadi baru nyalakan api kompor (ini yang membuat cimol anti meledak).</li>
        <h3>Langkah 4</h3>
            <li>Setelah minyak agak panas, aduk hingga cimol terasa ringan, goreng hingga matang, angkat dan tiriskan.</li>
        <h3>Langkah 5</h3>   
            <li>Taburi dengan bumbu barbeque atau sesuai selera, cimol siap untuk dinikmati.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Cimol;