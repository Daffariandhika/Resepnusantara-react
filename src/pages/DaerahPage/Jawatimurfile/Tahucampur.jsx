import React from 'react';

function Tahucampur() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Tahucampur</h2>

      <div className="recipe-description">
        <p>
        Tahu campur adalah salah satu makanan khas Jawa Timur, tepatnya dari kota Lamongan. Tahu campur terdiri dari sop daging sapi kenyal, kikil sapi, tahu goreng, perkedel singkong, taoge segar, selada air segar, mi kuning, dan kerupuk udang. Semua ini kemudian dicampurkan ke bumbu petis, bawang goreng, dan sambal.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/tahucampur.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>150
g daging sapi has dalam, potong dadu</li>
            <li>500
ml air, untuk merebus</li>
            <li>4
buah tahu goreng, belah dua</li>
            <li>150
g mie kuning, blansir</li>
            <li>100
g taoge, seduh air panas</li>
            <li>8
lembar daun selada</li>
            <li>1
buah kentang, potong dadu, goreng hingga kecoklatan</li>
            <li>75
g kol, rebus, tiriskan</li>
            <li>2
lembar daun salam</li>
            <li>2
lembar daun jeruk</li>
            <li>½
sdt garam</li>
            <li>1
sdt gula pasir</li>
            <li>2
sdm
Bango Kecap Manis</li>
            <li>1
sdt
Royco Kaldu Sapi</li>
            <li>1
batang serai</li>
            <li>3
cm lengkuas</li>
            <li>Bumbu halus:</li>
            <li>2
butir bawang merah</li>
            <li>4
siung bawang putih</li>
            <li>2
cm jahe</li>
            <li>1
sdt kunyit bubuk</li>
            <li>2
butir kemiri, sangrai</li>
            <li>½
sdt merica putih bubuk</li>
            <li>1
sdt minyak</li>
            <li>lontong</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus potongan daging hingga matang, tiriskan. Sisihkan airnya.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak, tumis bumbu halus dengan sedikit minyak. Kemudian masukkan air rebusan daging. Aduk rata.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan daun salam, daun jeruk, garam, gula, Royco Kaldu Sapi, Bango Kecap Manis, serai, dan lengkuas. Masak hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan daging sapi yang sudah direbus, masak hingga semua tercampur rata. Angkat.</li>
        <h3>Langkah 5</h3>   
            <li>Di dalam mangkuk saji, tata tahu goreng, mie, daun selada, kol, dan kentang goreng. Siram dengan bumbu tahu campur dan daging. Sajikan bersama lontong dan taburi dengan bawang goreng.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Tahucampur;