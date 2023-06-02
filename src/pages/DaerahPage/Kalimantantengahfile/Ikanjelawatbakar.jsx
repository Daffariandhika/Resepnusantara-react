import React from 'react';

function Ikanjelawatbakar() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ikan Jelawat Bakar</h2>

      <div className="recipe-description">
        <p>
        Jelawat adalah ikan perairan sungai dan danau yang asli berasal dari Semenanjung Malaya dan Pulau Kalimantan. Ukurannya cukup besar, dapat mencapai 60 cm dan merupakan bahan pangan yang cukup populer dan dihargai di Asia Tenggara
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/ikanjelawatbakar.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor ikan jelawat (-+ 600 gram)</li>
            <li>5 siung bawang putih</li>
            <li>6 siung bawang merah</li>
            <li>1 ruas jari kunyit</li>
            <li>1/2 ruas jari jahe</li>
            <li>1/2 sdk teh ketumbar</li>
            <li>1/4 sdk teh merica</li>
            <li>3 sdk makan madu</li>
            <li>1 sdk makan margarin, dicairkan</li>
            <li>1 sdk makan kecap manis</li>
            <li>secukupnya air jeruk nipis</li>
            <li>1 sdk teh garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siangi dan cuci bersih ikan jelawat.lumuri air jeruk nipis.diamkan beberapa saat.</li>
        <h3>Langkah 2</h3>
            <li>Sementara itu,haluskan bawang putih,bawang merah,ketumbar,merica,kunyit dan jahe.tambahkan garam,margarin cair,madu dan kecap manis ke dalam bumbu halus.aduk rata.dicicipi.kalau kurang asin,bisa ditambahkan lagi garamnya.</li>
        <h3>Langkah 3</h3>
            <li>Cuci bersih ikan yg td dilumuri air jeruk nipis. Lumuri dengan bumbu halus.diamkan di lemari es selama satu jam.</li>
        <h3>Langkah 4</h3>
            <li>Setel:ah 1 jam,bakar ikan di atas arang atau di atas kompor.sajikan dengan sambal ijo atau sambal tomat</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ikanjelawatbakar;