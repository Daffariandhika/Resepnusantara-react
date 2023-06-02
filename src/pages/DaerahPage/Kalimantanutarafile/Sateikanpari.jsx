import React from 'react';

function Sateikanpari() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Ikan Pari</h2>

      <div className="recipe-description">
        <p>
        Sate ikan pari khas Tana Tidung dibuat dari bahan utama ikan pari yang diambil dari Sungai Sesayap, Tana Tidung, Kalimantan Utara.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanutara/sateikanpari.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Daging ikan pari, potong dadu
1 sendok makan air jeruk nipis</li>
            <li>Madu secukupnya</li>
            <li>Kecap manis secukupnya</li>
            <li>Tusuk sate</li>
            <li>Bahan yang dihaluskan:</li>
            <li>1 sendok teh merica</li>
            <li>1 buah kunyit sepanjang 2 cm</li>
            <li>5 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>Bahan Saus:</li>
            <li>2 buah tomat yang dihaluskan</li>
            <li>5 siung bawang merah</li>
            <li>Sambal botol secukupnya</li>
            <li>Gula</li>
            <li>Garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rendam potongan ikan pari dalam air jeruk nipis selama dua menit.</li>
        <h3>Langkah 2</h3>
            <li>Lumuri potongan ikan pari dengan bumbu halus.</li>
        <h3>Langkah 3</h3>
            <li>Susun daging dalam tusuk sate dan daging siap untuk dipanggang.</li>
        <h3>Langkah 4</h3>
            <li>Bumbu yang dihaluskan bisa kembali dioleskan saat pemanggangan untuk menambah cita rasa. Oleskan madu dan kecap manis saat sate sudah matang.  </li>
        <h3>Langkah 5</h3>   
            <li>Untuk saus haluskan semua bahan dan tumis.</li>
        <h3>Langkah 6</h3>   
            <li>Sate ikan pari siap disajikan dengan sausnya yang nikmat. Sajikan saat masih hangat sehingga rasanya lebih memikat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sateikanpari;