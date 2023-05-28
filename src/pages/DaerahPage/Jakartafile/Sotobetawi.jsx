import React from 'react';

function Sotobetawi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Betawi</h2>

      <div className="recipe-description">
        <p>
        Soto ini menjadi unik karena memiliki kuah kental yang membedakan dari soto dari daerah lainnya yang biasa menggunakan kuah bening. Salah satu ciri khas soto Betawi yakni adanya jeroan, bahkan mata dan torpedo sapi, serta emping.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/soto_betawi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gram daging sengkel</li>
            <li>250 gram daging kikil</li>
            <li>150 gram babat</li>
            <li>1 batang kayu manis</li>
            <li>4 lembar daun salam</li>
            <li>2 batang serai</li>
            <li>1 ruas lengkuas, digeprek</li>
            <li>6 buah cengkeh</li>
            <li>garam dan gula secukupnya</li>
            <li>BUMBU HALUS:</li>
            <li>10 butir bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>3 butir kemiri</li>
            <li>1 sdm ketumbar</li>
            <li>1 sdt jintan</li>
            <li>1 sdt merica</li>
            <li>1 ruas jahe</li>
            <li>500 cc santan kelapa</li>
            <li>500 cc susu cair full cream</li>
            <li>Bahan Pelengkap:</li>
            <li>kentang rebus</li>
            <li>jeruk nipis</li>
            <li>tomat</li>
            <li>daun bawang</li>
            <li>bawang goreng</li>
            <li>emping</li>
            <li>sambal</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging sengkel, babat, dan kikil menggunakan panci presto selama sekitar 1 jam.</li>
        <h3>Langkah 2</h3>
            <li>Tumis bumbu halus, cengkeh, daun salam, serai, lengkuas dan kayu manis sampai harum.</li>
        <h3>Langkah 3</h3>
            <li>. Masukkan bumbu halus ke dalam panci rebusan daging.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan santan dan susu. Tambahkan potongan kentang rebus.</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan gula dan garam secukupnya. Koreksi rasa.</li>
        <h3>Langkah 6</h3>   
            <li>Masak sambil terus diaduk hingga bumbu meresap.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sotobetawi;