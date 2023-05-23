import React from 'react';

function Satematang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Matang</h2>

      <div className="recipe-description">
        <p>
        Sate matang adalah hidangan khas Aceh yang terdiri dari daging sapi atau kambing yang dipotong-potong dan ditusuk dengan tusukan bambu, kemudian dipanggang atau dibakar dengan arang dan disajikan dengan kuah kacang dan irisan bawang merah. Sejarah sate matang ini tidak terlalu jelas namun diketahui telah ada sejak zaman Kesultanan Aceh Darussalam.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/Sate-matang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr daging sapi potong kecil bentuk dadu</li>
            <li>1 sdt ketumbar</li>
            <li>1 siung bawang putih</li>
            <li>1 siung bawang merah</li>
            <li>1 btg serai uk kecil potong2 halus</li>
            <li>1 ruas jari jahe</li>
            <li>1 ruas jari lengkuas</li>
            <li>2 cm kunyit</li>
            <li>2 butir kemiri</li>
            <li>1 siung bawang putih</li>
            <li>BAHAN BUMBU KACANG:</li>
            <li>1 ons kacang tanah goreng</li>
            <li>1 siung bawang putih geprek</li>
            <li>1 daun jeruk</li>
            <li>1 daun salam besar</li>
            <li>1 lembar daun pandan yg panjang</li>
            <li>1 btg serai yg kecil..geprek</li>
            <li>1 btg kayu manis</li>
            <li>2 ons cabai kering</li>
            <li>1/3 santan bubuk merk kara</li>
            <li>Kecap manis sckupnya</li>
            <li>1/2 kaldu blok maggi</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Haluskan semua bumbu untuk membuat sate</h3>
            <li>Panaskan minyak dan tumis umbu haslus</li>
            <li>Masukan daging yang telah dipotong dan tumis sampai bumbu meresap atau hingga hampir matang</li>
            <li>Angkat dan susun daging dengan tusuk sate lalu bakar sampai matang</li>
        <h3>Untuk bumbu kacang:</h3>
            <li>Tumis semua bahan2 kecuali kecap manis sd wangi</li>
            <li>Masukkan santan..aduk sd mendidih</li>
            <li>Masukkan kacang tanah bersama cabe </li>
        <h3>Aduk sd mendidih dan mengental,, mengeluarkan minyak..siap sajikan</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Pada abad ke-16 dan 17. Pada masa itu, Aceh merupakan pusat perdagangan rempah-rempah yang ramai dan banyak didatangi oleh para pedagang dan pengembara dari berbagai penjuru dunia. Salah satu hidangan yang dibawa oleh para pedagang tersebut adalah sate, kemudian diadaptasi oleh orang Aceh dengan bumbu dan rempah-rempah khas Aceh seperti cuka, jahe, kunyit, dan bawang putih.

Hidangan sate matang kemudian menjadi sangat populer di Aceh dan menjadi salah satu hidangan wajib yang disajikan dalam acara-acara adat seperti pernikahan, khitanan, atau acara keagamaan lainnya. Hingga saat ini, sate matang tetap menjadi hidangan favorit di Aceh dan menjadi salah satu ikon kuliner Aceh yang terkenal di Indonesia dan dunia.

        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satematang;