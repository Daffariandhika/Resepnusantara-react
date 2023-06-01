import React from 'react';

function Nasikrawu() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Krawu</h2>

      <div className="recipe-description">
        <p>
        Nasi krawu merupakan makanan khas dari daerah Gresik, Jawa Timur. Ciri khasnya adalah nasinya yang pulen dan disajikan dengan daun pisang. Lauknya dapat berupa sayatan daging sapi, semur daging, jeroan sapi, sambal petis dan serundeng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/nasikrawu.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>600
g daging sapi bagian sengkel, potong tipis</li>
            <li>1.6
L air, untuk merebus</li>
            <li>3
lembar daun salam</li>
            <li>2
batang serai, memarkan</li>
            <li>2
sdt
Royco Kaldu Sapi</li>
            <li>2
sdm
Bango Kecap Manis</li>
            <li>350
ml santan</li>
            <li>Bumbu halus</li>
            <li>10
butir bawang merah</li>
            <li>3
siung bawang putih</li>
            <li>4
butir kemiri, sangrai</li>
            <li>4
cm lengkuas</li>
            <li>3
cm kunyit, bakar</li>
            <li>1
sdm ketumbar butiran, sangrai</li>
            <li>Serundeng:</li>
            <li>100
g kelapa parut setengah tua</li>
            <li>3
cm kunyit, bakar</li>
            <li>½
sdt
Royco Kaldu Sapi</li>
            <li>3
lembar daun jeruk</li>
            <li>Sambal terasi:</li>
            <li>10
buah cabai rawit merah</li>
            <li>8
butir bawang merah</li>
            <li>2
siung bawang putih</li>
            <li>1
buah tomat merah, iris tipis</li>
            <li>½
sdt
Royco Kaldu Ayam</li>
            <li>1
sdt terasi</li>
            <li>1
sdt gula pasir</li>
            <li>4
sdm minyak, untuk menumis</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging bersama bumbu halus, daun salam, serai, dan garam hingga empuk dan airnya menyusut. Keluarkan daging. Suwir-suwir daging. Masukkan kembali ke dalam panci rebusan daging.</li>
        <h3>Langkah 2</h3>
            <li>Tuang santan, Royco Kaldu Sapi dan Bango Kecap Manis. Masak hingga meresap dan airnya hampir habis. Angkat. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Serundeng: Sangrai semua bahan termasuk Royco Kaldu Sapi  dalam wajan di atas api kecil sambil hingga mengering. Angkat.</li>
        <h3>Langkah 4</h3>
            <li>Sambal terasi: Panaskan minyak, tumis semua bahan hingga matang. Haluskan.</li>
        <h3>Langkah 5</h3>   
            <li>Siapkan piring saji berisi nasi putih. Tata daging suwir, serundeng, dan sambal terasi. Sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasikrawu;