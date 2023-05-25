import React from 'react';

function Angeunlada() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Angeun Lada</h2>

      <div className="recipe-description">
        <p>
        Bahan utama dalam membuat angeun lada adalah babat sapi, campuran sayur, dan daun walang yang membuat aromanya menjadi khas.
Sementara itu, bumbu-bumbu yang terdapat dalam angeun lada adalah bawang merah, kemiri, bawang putih, dan kencur.
Cita rasa yang gurih dan pedas membuat angeun lada sering dijadikan menu wajib saat merayakan hari Idulfitri. Biasanya, angeun lada akan dicampurkan ketupat agar semakin mengenyangkan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/angeunlada.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram daging sapi / babat</li>
            <li>BUMBU UTUH:</li>
            <li>1 batang serai</li>
            <li>1 lembar daun salam</li>
            <li>2 Lembar daun walang</li>
            <li>2 cm lengkuas</li>
            <li>BUMBU HALUS:</li>
            <li>6 butir bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>12 buah cabai merah</li>
            <li>4 buah kemiri</li>
            <li>2 cm jahe</li>
            <li>2 cm kunyit</li>
            <li>2 cm kencur</li>
            <li>1/2 sdt merica butir</li>
            <li>1 sdt kaldu bubuk</li>
            <li>garam dan gula secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging sapi hingga matang, tiriskan dan potong-potong daging. Saring air rebusannya ambil secukupnya sebagai kaldu.</li>
        <h3>Langkah 2</h3>
            <li>Sangrai dulu bumbu hingga sedap lalu haluskan. Ikat simpul daun walang. Memarkan serai dan lengkuas.</li>
        <h3>Langkah 3</h3>
            <li>Tumis bumbu halus hingga harum, masukkan daun salam, daun walang dan serai. Tumis hingga bumbu matang.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan daging, tumis sebentar hingga bumbu agar meresap.</li>
        <h3>Langkah 5</h3>   
            <li>Tuang air kaldu, masak terus hingga daging empuk. Tes rasa, jika sudah pas, angkat dan sajikan.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Angeun lada termasuk salah satu makanan khas Banten yang sering dijadikan menu saat merayakan hari-hari besar.

Angeun artinya sayur dan lada artinya adalah pedas. Apabila suka makanan pedas, bisa dipastikan akan ketagihan makan angeun lada.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Angeunlada;