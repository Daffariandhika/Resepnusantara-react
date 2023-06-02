import React from 'react';

function Gudeg() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gudeg</h2>

      <div className="recipe-description">
        <p>
        Gudeg adalah salah satu makanan khas dari Yogyakarta, Indonesia. Makanan ini merupakan perpaduan antara nangka muda yang dimasak dalam santan kental dengan tambahan bumbu rempah khas.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/gudeg.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr nangka muda</li>
            <li>250 ml santan kental</li>
            <li>3 lembar daun salam</li>
            <li>2 lembar daun jati</li>
            <li>1 batang serai, memarkan</li>
            <li>2 cm lengkuas, memarkan</li>
            <li>3 butir telur ayam, rebus</li>
            <li>100 gr gula merah, serut</li>
            <li>1 sdt garam</li>
            <li>Air secukupnya</li>
            <li>5 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>3 butir kemiri, sangrai</li>
            <li>1 sdt ketumbar, sangrai</li>
            <li>1 sdt merica butiran</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Potong-potong nangka muda menjadi ukuran sesuai selera.</li>
            <li>Rebus nangka muda dalam air mendidih selama 15-20 menit atau hingga empuk. Tiriskan.</li>
            <li>Tumis bumbu halus, daun salam, daun jati, serai, dan lengkuas hingga harum.</li>
            <li>Masukkan nangka muda rebus dan aduk rata dengan bumbu tumis.</li>  
            <li>Tuang santan kental dan tambahkan air secukupnya hingga nangka terendam.</li>
            <li>Masukkan gula merah serut dan garam. Aduk rata.</li>
            <li>Masak dengan api kecil hingga santan mengental dan bumbu meresap ke dalam nangka, sekitar 2-3 jam. Aduk sesekali agar tidak gosong.</li>
            <li>Setelah santan mengental dan nangka empuk, matikan api.</li>  
            <li>Sajikan Gudeg dengan telur rebus, ayam suwir, sambal goreng krecek, dan nasi hangat.</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Gudeg dapat ditelusuri ke masa Kerajaan Mataram, tepatnya pada abad ke-18. Makanan ini awalnya dikonsumsi oleh para abdi dalem dan kerabat kerajaan sebagai hidangan istimewa. Namun, seiring berjalannya waktu, Gudeg semakin populer dan menjadi makanan yang disukai oleh masyarakat umum.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gudeg;