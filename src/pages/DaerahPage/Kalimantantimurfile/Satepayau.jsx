import React from 'react';

function Satepayau() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Payau</h2>

      <div className="recipe-description">
        <p>
        Sate payau adalah makanan khas Kutai Kartanegara yang memiliki rasa manis, gurih dan lembut teksturnya. Bahan utama sate payau adalah daging hewan buruan berupa payau atau rusa
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantimur/satepayau.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg daging payau (rusa) bisa diganti daging sapi, potong dadu</li>
            <li>2 sdm kecap manis</li>
            <li>Bumbu halus:</li>
            <li>12-13 bh bawang merah</li>
            <li>7 siung bawang putih</li>
            <li>3 bh kemiri</li>
            <li>1 sdt merica bubuk</li>
            <li>2 sdt ketumbar bubuk</li>
            <li>secukupnya Garam, gula dan kaldu jamur</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Blender semua bumbu halus dengan sedikit minyak goreng</li>
        <h3>Langkah 2</h3>
            <li>Campur bumbu halus dengan kecap manis, koreksi rasa</li>
        <h3>Langkah 3</h3>
            <li>Campur bumbu dengan daging hingga rata, masukkan kulkas utk didiamkan sekitar 1jam</li>
        <h3>Langkah 4</h3>
            <li>Tusuk daging menggunakan tusuk sate sesuai seler</li>
        <h3>Langkah 5</h3>   
            <li>Bakar sate hingga matang, siap disajikan dengan bahan pelengkap sesuai selera</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satepayau;