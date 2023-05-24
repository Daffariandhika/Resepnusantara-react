import React from 'react';

function Bebekbetutu() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bebek Betutu</h2>

      <div className="recipe-description">
        <p>
        Bebek Betutu juga merupakan salah satu makanan khas Bali yang wajib kamu coba. Hidangan ini menggunakan bahan utama bebek yang dimasak dengan bumbu betutu khas Bali.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/bebekbetutu.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1
ekor (900 gr) bebek
</li>
            <li>150
ml minyak kelapa
</li>
            <li>½
sdm
Royco Kaldu Ayam
</li>
            <li>6
lembar daun salam
</li>
            <li>daun pisang, untuk membungkus
Bumbu perendam
</li>
            <li>2
sdm air jeruk nipis
</li>
            <li>1
sdt garam
</li>
            <li>6
cm kunyit, haluskan
</li>
            <li>BUMBU HALUS :</li>
            <li>100
g bawang merah
</li>
            <li>10
siung bawang putih
</li>
            <li>10
buah cabai rawit merah
</li>
            <li>5
cm kencur
</li>
            <li>3
cm jahe
</li>
            <li>3
cm lengkuas
</li>
            <li>1
sdt merica putih bubuk
</li>
            <li>1
sdm terasi
</li>
            <li>1
sdt ketumbar
</li>
            <li>1
sdm gula merah
</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Lumuri bebek dengan bumbu perendam. Diamkan selama 20 menit. Sisihkan. </li>
        <h3>Langkah 2</h3>
            <li>Aduk rata bumbu halus. Royco Kaldu Ayam, dan minyak kelapa. Lumuri campuran bumbu tersebut pada bebek sambil dipijat. Lumuri secara merata hingga ke bagian rongga perut bebek. Isi rongga perut dengan daun salam.</li>
        <h3>Langkah 3</h3>
            <li>Ikat kedua kaki bebek dengan batang lunak daun pisang atau tali kasur. Bungkus dengan daun pisang.</li>
        <h3>Langkah 4</h3>
            <li>Kukus bebek dalam dandang panas hingga matang dan empuk. Angkat. Sajikan.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Ayam Betutu pertama bermula pada tahun 1976, dari olahan tangan, Ni Wayan Tempeh atau Men Tempeh yang berasal dari wilayah Abiansi, kota Gianyar.

Kemudian, bersama dengan suaminya yang bernama I Nyoman Suratna yang berasal dari Bangli, Ni Wayan Tempeh mendirikan warung Ayam Betutu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bebekbetutu;