import React from 'react';

function Nasitiwul() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Tiwul</h2>

      <div className="recipe-description">
        <p>
        Tiwul atau Sego tiwul adalah panganan pokok khas Jawa sebagai pengganti nasi yang berbahan dasar ketela pohon atau singkong.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatengah/nasi-tiwul.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gr tepung gaplek</li>
            <li>200 ml air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Tuangkan tepung gaplek ke dalam tampah bambu, kemudian beri sedikit air.</li>
        <h3>Langkah 2</h3>
            <li>Goyangkan tampah dengan gerakan memutar hingga tepung membentuk butiran kecil.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan kukusan, lalu kukus tiwul selama 15 menit. Setelah 15 menit, aduk-aduk agar matang rata. Kemudian kukus lagi hingga matang.</li>
        <h3>Langkah 4</h3>
            <li>Nah, jika sudah matang, angkat dan sajikan dengan sayur lodeh berserta ikan asin atau lauk lainnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasitiwul;