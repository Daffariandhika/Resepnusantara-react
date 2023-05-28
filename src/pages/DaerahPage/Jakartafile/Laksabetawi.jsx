import React from 'react';

function Laksabetawi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Laksa Betawi</h2>

      <div className="recipe-description">
        <p>
        Rasa kuahnya yang gurih dengan sedikit asam sangat menggugah selera. Banyak orang mengira laksa hanya menjadi makanan khas negeri tetangga, padahal Indonesia juga memiliki varian menu laksa yang khas, yaitu laksa betawi.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/laksa_betawi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 buah dada ayam, potong-potong</li>
            <li>300 gram udang (opsional)</li>
            <li>1 liter santan dadi satu buah kelapa</li>
            <li>200 ml santan cair </li>
            <li>Bumbu utuh:</li>
            <li>2 batang serai, memarkan</li>
            <li>3 lembar daun salam</li>
            <li>5 lembar daun jeruk</li>
            <li>garam, gula dan kaldu ayam bubuk </li>
            <li>Bumbu halus:</li>
            <li>8 siung bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>5 buah cabai keriting</li>
            <li>1 ruas jahe</li>
            <li>1 ruas kunyit</li>
            <li>1 sdm ketumbar</li>
            <li>4 butir kemiri</li>
            <li>Bahan pelengkap:</li>
            <li>tauge secukupnya, siram air panas</li>
            <li>bihun matang secukupnya</li>
            <li>telur rebus, belah jadi dua</li>
            <li>jeruk limau, daun kemangi dan sambal</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Sangrai terlebih dahulu bumbu halus agar aromanya lebih keluar, ulek halus.</li>
        <h3>Langkah 2</h3>
            <li>2.	Tumis bumbu halus hingga harum, masukkan bumbu utuh dan tumis bumbu hingga matang.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tuang 200 ml santan cair, masak hingga mendidih. Masukkan dada ayam dan masak hingga ayam berubah warna. Tuang santan 1 liter dan masak hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>4.	Masukkan garam, gula dan kaldu ayam bubuk secukupnya. Masak lagi sekitar 30 menit hingga bumbu meresap ke dalam daging ayam.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Tes rasa, jika sudah pas dan ayam sudah empuk, angkat.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Laksabetawi;