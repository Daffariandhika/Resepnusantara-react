import React from 'react';

function Brongkos() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Brongkos</h2>

      <div className="recipe-description">
        <p>
        Brongkos adalah sejenis makanan daging dan kacang berkuah bumbu keluak yang lazim dijumpai di Jawa Tengah ataupun D.I. Yogyakarta
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatengah/brongkos"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>4
siung bawang putih</li>
            <li>5
butir bawang merah</li>
            <li>8
buah cabai merah keriting</li>
            <li>3
biji kluwak</li>
            <li>3
buah kemiri</li>
            <li>½
sdt ketumbar bubuk</li>
            <li>1
cm kencur</li>
            <li>1
sdt
Royco Kaldu Sapi</li>
            <li>250
g daging sapi tenderloin, potong dadu dan rebus</li>
            <li>150
g tahu putih, goreng</li>
            <li>150
g kacang tolo, rebus</li>
            <li>10
buah cabai rawit merah</li>
            <li>3
lembar daun jeruk</li>
            <li>2
lembar daun salam</li>
            <li>2
batang serai, memarkan</li>
            <li>3
cm lengkuas</li>
            <li>1
sdm gula merah</li>
            <li>750
ml santan encer</li>
            <li>4
sdm minyak sayur</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan semua bahan bumbu halus dengan blender —
termasuk Royco Kaldu Sapi.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak di wajan menggunakan api sedang. Tumis bumbu halus hingga harum dan matang. Masukkan gula, cabai rawit, daun jeruk, daun salam, lengkuas dan serai. Tumis hingga harum.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan kacang tolo dan daging, lalu aduk merata. Setelah
itu, tambahkan santan. Didihkan dan lanjutkan memasak
hingga santan mulai menyusut.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan tahu, masak dan biarkan hingga bumbu meresap
serta kuah terlihat mengental. Setelah itu angkat dan brongkos
siap untuk disajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Brongkos;