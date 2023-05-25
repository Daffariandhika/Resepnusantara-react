import React from 'react';

function Sambalburoq() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambal Buroq</h2>

      <div className="recipe-description">
        <p>
        Sambal Buroq berbahan utama kulit tangkil dengan warna merah menggoda, irisan cabai merah dan hijau yang pedas, teri yang gurih dan bumbu-bumbu yang terasa nikmat di lidah.

Sambal Buroq bukan sembarangan sambal, kuliner ini merupakan sayuran pendamping nasi yang bercitarasa pedas, gurih, nikmat dengan warna dominan merah menggoda.

Buat pencinta pedas, kuliner ini bisa ditambahkan lebih banyak irisan cabai merah dan hijau, juga ditambah cabai rawit.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/sambalburoq.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr kulit melinjo/tangkil</li>
            <li>50 gr teri medan (goreng)</li>
            <li>1 papan pete</li>
            <li>5 buah cabe hijau besar</li>
            <li>BUMBU HASLUS:</li>
            <li>5 siung bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>5 butir kemiri</li>
            <li>Secukupnya cabe rawit</li>
            <li>1 sdm trasi matang</li>
            <li>1 batang serai</li>
            <li>1 ruas besar lengkuas</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan semua bahan,iris kulit melinjo,pete dan cabe hijau, goreng teri hingga kering. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Haluskan bumbu,tumis dengan serai dan lengkuas,beri gula garam,koreksi rasa.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan kulit melinjo,aduk sampai setengah </li>
        <h3>Langkah 4</h3>
            <li>Masukkan cabe hijau,pete dan teri. Aduk rata. Angkat dan hidangkan.</li>
        <h3>Langkah 5</h3>   
            <li>Nikmati bersama nasi hangat</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sambal buroq yakni hidangan wajib untuk acara besar di daerah Banten. Terutama acara menuju Lebaran Haji.
Kuliner makanan satu ini sangat unik, mulai dari namanya yang mirip dengan nama kendaraan Nabi Muhammad saat peristiwa Isra' Miraj 
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambalburoq;