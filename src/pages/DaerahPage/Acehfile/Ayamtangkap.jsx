import React from 'react';

function Ayamtangkap() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ayam Tangkap</h2>

      <div className="recipe-description">
        <p>
         Ayam tangkap adalah hidangan khas Aceh yang memiliki keunikan rempah_rempahnya yang digoreng kasar kemudian ditaburkan ketika hidangan sudah matang. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/ayamtangkap.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>800g daging ayam kampung, potong 18 bagian</li>
            <li>60gBango Kecap Manis Light</li>
            <li>2sdm gula merah</li>
            <li>6lembar daun jeruk</li>
            <li>4batang serai, memarkan</li>
            <li>500ml air</li>
            <li>350ml minyak, untuk menggoreng</li>
            <li>BUMBU HALUS :</li>
            <li>20butir bawang merah</li>
            <li>½sdt merica putih bubuk</li>
            <li>3siung bawang putih</li>
            <li>3cm jahe</li>
            <li>2cm kunyit, bakar</li>
            <li>2buah asam sunti, rendam hingga agak lunak, tiriskan</li>
            <li>REMPAH GORENG :</li>
            <li>12buah cabai hijau keriting, potong 3 cm</li>
            <li>10lembar daun pandan, iris</li>
            <li>10lembar daun salam koja/daun kari</li>
            <li>5lembar daun kunyit, iris</li>
            <li>100g bawang merah, iris</li>
            <li>2siung bawang putih, cincang</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Persiapkan semua bahan</h3>
            <li>Masukkan air, ayam, gula merah, daun jeruk, serai, dan bumbu halus ke dalam panci. Tuangkan Bango Bumbu Bacem Ayam Goreng, aduk hingga rata. Masak di atas api kecil hingga ayam matang dan empuk. Angkat. Sisihkan.</li>
            <li>Rempah goreng: Panaskan minyak, goreng cabai hijau, daun pandan, daun salam koja, dan daun kunyit hingga hampir garing. Masukkan bawang merah dan bawang putih, masak hingga semua bahan garing. Angkat. Tiriskan. Sisihkan.</li>
            <li>Goreng daging ayam dalam minyak sisa menggoreng rempah daun. Masak hingga kecokelatan. Angkat.</li>
        <h3>Aduk rata daging ayam bersama rempah goreng. Sajikan.</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Ayam tangkap adalah hidangan khas Aceh yang terkenal dengan rasa pedas dan gurihnya. Sejarah ayam tangkap berasal dari masa Kesultanan Aceh Darussalam yang terkenal dengan perdagangan rempah-rempahnya.

Konon, hidangan ayam tangkap pertama kali dibuat oleh para pedagang yang berdagang rempah-rempah di Aceh.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ayamtangkap;