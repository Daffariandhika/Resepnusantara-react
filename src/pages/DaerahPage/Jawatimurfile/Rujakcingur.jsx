import React from 'react';

function Rujakcingur() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Rujak Cingur</h2>

      <div className="recipe-description">
        <p>
        Rujak cingur adalah salah satu makanan tradisional yang mudah ditemukan di daerah Jawa Timur, terutama di daerah asalnya Surabaya. Dalam bahasa Jawa, kata cingur berarti "mulut", hal ini merujuk pada bahan irisan mulut atau moncong sapi yang direbus dan dicampurkan ke dalam hidangan
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/rujakcingur.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gr cingur sapi</li>
            <li>1 papan tempe goreng</li>
            <li>5 kotak tahu goreng</li>
            <li>2 ikat kangkung, petik daun lalu rebus</li>
            <li>100 gr tauge rebus</li>
            <li>1/2 buah nanas</li>
            <li>1 buah bengkuang besar</li>
            <li>1 buah timun</li>
            <li>Bumbu:</li>
            <li>150 gr kacang tanah</li>
            <li>5 sdm petis udang</li>
            <li>5 bawang putih</li>
            <li>1 sdm bawang putih goreng</li>
            <li>cabai rawit sesuai selera</li>
            <li>2 sdm gula merah</li>
            <li>1 sdt garam</li>
            <li>air secukupnya</li>
            <li>Pelengkap:</li>
            <li>lontong</li>
            <li>kerupuk uyel</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li> Presto cingur sapi selama 2 jam, potong-potong lalu goreng sebentar (tidak perlu kering).</li>
        <h3>Langkah 2</h3>
            <li> Kupas nanas, cuci bersih, kupas bengkuang dan timun cucu bersih. Lalu potong sesuai selera.</li>
        <h3>Langkah 3</h3>
            <li>Bumbu: uleg semua bumbu, lalu tambahkan air sedikit demi sedikit, kekentalan sesuaikan selera, lalu koreksi rasa.</li>
        <h3>Langkah 4</h3>
            <li>Cara penyajian: sajikan rujak cingur bersama lontong, kangkung, tauge, tahu goreng, tempe goreng, nanas, bengkuang, timun dan siram dengan bumbu, tambahkan kerupuk.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Rujakcingur;