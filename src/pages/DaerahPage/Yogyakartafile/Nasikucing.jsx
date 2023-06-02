import React from 'react';

function Nasikucing() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Kucing</h2>

      <div className="recipe-description">
        <p>
        Nasi Kucing merupakan makanan khas dari daerah Yogyakarta yang terkenal dengan porsi yang kecil dan sederhana, namun memiliki cita rasa yang kaya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/nasikucing.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Nasi putih secukupnya</li>
            <li>Lauk-pauk pilihan</li>
            <li>ayam suwir</li>
            <li>telur dadar</li>
            <li>sambal terasi</li>
            <li>tempe goreng</li>
            <li>tahu goreng</li>
            <li>ikan asin</li>
            <li>Daun pisang secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Siapkan daun pisang sebagai wadah penyajian nasi kucing.</li>
            <li>Siapkan nasi putih dalam porsi kecil di atas daun pisang.</li>
            <li>Sajikan lauk-pauk pilihan di sekitar nasi putih. Anda dapat memilih lauk-pauk sesuai selera dan jumlahnya bisa disesuaikan.</li>
            <li>Anda dapat menambahkan sambal terasi, kerupuk, dan irisan mentimun atau tomat sebagai pelengkap.</li>
            <li>Nasi Kucing siap disajikan. Biasanya, Nasi Kucing dinikmati dengan cara diambil menggunakan tangan atau sumpit.</li> 
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Nasi Kucing berasal dari daerah Yogyakarta, Indonesia. Nasi Kucing pertama kali dikenal dan populer di kalangan mahasiswa dan pelajar di sekitar kawasan Malioboro, Yogyakarta. Asal usul nama "Nasi Kucing" sendiri konon berasal dari kebiasaan para pelajar yang saat itu memiliki dana terbatas dan hanya bisa membeli makanan dengan harga yang sangat murah, seperti nasi untuk makanan kucing. Seiring waktu, makanan tersebut semakin populer dan menjadi bagian dari kebudayaan makan di Yogyakarta.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasikucing;