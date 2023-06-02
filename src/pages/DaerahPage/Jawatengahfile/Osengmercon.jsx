import React from 'react';

function Osengmercon() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Oseng Mercon</h2>

      <div className="recipe-description">
        <p>
        Oseng mercon merupakan hidangan pedas yang bisa membuat selera makan bertambah. Biasanya, oseng mercon terdiri dari daging-dagingan atau tetelan. Tetapi, oseng mercon dapat dibuat dari berbagai bahan dan sesuai selera
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatengah/osengmercon.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500
g daging sapi, diiris-iris kecil</li>
            <li>3
lembar daun salam</li>
            <li>3
cm lengkuas, iris, memarkan</li>
            <li>1
sdt gula merah</li>
            <li>2
sdt garam</li>
            <li>1
sdm
Bango Kecap Manis</li>
            <li>300
ml air</li>
            <li>5
sdm minyak goreng</li>
            <li>Bumbu halus:</li>
            <li>200
gram cabai rawit merah</li>
            <li>50
gram cabai merah keriting</li>
            <li>10
butir bawang merah</li>
            <li>5
siung bawang putih</li>
            <li>2
cm jahe</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan minyak di dalam wajan. Masukkan lengkuas, daun salam, serta bumbu yang dihaluskan. Tumis hingga agak matang.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan daging tetelan sapi dan aduk-aduk hingga bumbu tercampur merata. Tambahkan air matang, dan masak hingga daging empuk.</li>
        <h3>Langkah 3</h3>
            <li>Tambahkan gula merah, garam, dan Kecap Bango Manis.</li>
        <h3>Langkah 4</h3>
            <li>Aduk-aduk terus hingga bumbu meresap.</li>
        <h3>Langkah 5</h3>   
            <li>Oseng-oseng mercon siap disajikan dengan taburan bawang merah.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Osengmercon;