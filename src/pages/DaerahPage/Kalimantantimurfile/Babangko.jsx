import React from 'react';

function Babangko() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Babangko</h2>

      <div className="recipe-description">
        <p>
         Kuliner yang satu ini merupakan jajanan khas kutai kartanegara. rasanya yang gurih mirip bubur sumsum. hanya saja, kuliner yang memiliki nama babangko ini disajikan dengan daun pisang.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantimur/babangko.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr tepung beras</li>
            <li>2 sdm gula pasir</li>
            <li>350 ml santan (q 1 bngkus kara +air panas total 350ml)</li>
            <li>1/2 sdt garam</li>
            <li>50 ml air daun pandan</li>
            <li>1 sdt air kapur sirih</li>
            <li>Bahan pelengkap:</li>
            <li>150 ml santan kental</li>
            <li>150 gr gula merah (iris kecil)</li>
            <li>Secukupnya Daun</li>
            <li>Secukupnya lidi (buat penyemat)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan dadang kemudian masukkan daun yg sdh dibagi bbrp bgian krg lbh 3-5menit jng smpai terlalu layu(gunanya biar daun gk mudah sobek)</li>
        <h3>Langkah 2</h3>
            <li>Campur tepung beras,santan,gula,garam aduk pakai wishk tambahkan air daun pandan dan kapur aduk lagi sampai tercampur rata.</li>
        <h3>Langkah 3</h3>
            <li>Bungkus dengan daun pisang pertama masukkan 1 sdm gula merah iris, kemudian 1-2 sendok sayur adonan,disusul 1-2 sdm santan kental bungkus dan sematkan dngan lidi</li>
        <h3>Langkah 4</h3>
            <li>Lakukan sampai adonan habis lalu kukus krg lbh 30-40 menit api sedang</li>
        <h3>Langkah 5</h3>   
            <li>Angkat dan sajikan</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Babangko;