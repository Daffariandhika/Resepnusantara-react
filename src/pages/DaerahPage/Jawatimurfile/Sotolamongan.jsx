import React from 'react';

function Sotolamongan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Lamongan</h2>

      <div className="recipe-description">
        <p>
        Soto lamongan adalah soto ayam khas kabupaten Lamongan, Jawa Timur, yang saat ini telah menyebar ke berbagai daerah di Indonesia. Soto lamongan dikenal sebagai salah satu soto paling gurih lantaran memiliki ciri khas taburan koya udang yang tidak dimiliki oleh soto lainnya
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/sotolamongan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1
ekor (700 g) ayam kampung</li>
            <li>2.5
L air</li>
            <li>5
lembar daun jeruk</li>
            <li>1
sdt garam</li>
            <li>1
sdt gula pasir</li>
            <li>2 sdm bango Kecap Manis Light</li>
            <li>2
batang serai, memarkan</li>
            <li>2
cm lengkuas, memarkan</li>
            <li>2
sdm minyak, untuk menumis</li>
            <li>300
ml minyak, untuk menggoreng</li>
            <li>Bumbu halus:</li>
            <li>12
butir bawang merah</li>
            <li>8
siung bawang putih</li>
            <li>2
cm jahe</li>
            <li>3
cm kunyit bakar</li>
            <li>4
butir kemiri</li>
            <li>1
sdm bawang putih goreng</li>
            <li>1
sdm bawang merah goreng</li>
            <li>Bumbu pelengkap:</li>
            <li>50
g suun kering, seduh air hangat, tiriskan
</li>
            <li>2
buah tomat, potong kasar</li>
            <li>2
batang daun seledri, cincang halus</li>
            <li>3
butir telur ayam rebus, iris</li>
            <li>200
g kol, iris halus</li>
            <li>sambal rawit</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Dalam panci, rebus air dan ayam dengan api kecil. Masak hingga ayam matang dan lunak. Saring kaldu dan sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak, goreng ayam hingga kecokelatan. Suwir-suwir.</li>
        <h3>Langkah 3</h3>
            <li>Dalam panci, rebus kembali kaldu hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Panaskan minyak, tumis bumbu halus, serai, lengkuas, dan daun jeruk hingga harum.</li>
        <h3>Langkah 5</h3>   
            <li>Tuang tumisan bumbu, garam, gula, dan Bango Kecap Manis Light ke dalam rebusan kaldu. Masak hingga mendidih.</li>
        <h3>Langkah 6</h3>   
            <li>Tata bahan pelengkap di mangkuk, kecuali sambal. Beri suwiran ayam, siram dengan kuah soto. Sajikan selagi hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sotolamongan;