import React from 'react';

function Kuelepekbiniti() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Lepek Biniti</h2>

      <div className="recipe-description">
        <p>
        Lepek binti merupakan salah satu resep kue daerah khas Bengkulu yang akan kita bahas cara membuat dan menyajikannya. Kue lepek binti merupakan penganan yang terbuat dari bahan dasar ketan dengan isian gilingan daging sapi.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/kuelepekbiniti.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gram tepung ketan yang baru</li>
            <li>75 ml santan kental</li>
            <li>150 gram daging giling sapi</li>
            <li>3 butir bawang merah</li>
            <li>2 siung bawang putih</li>
            <li>100 ml santan kental</li>
            <li>2 sdt ketumbar bubuk</li>
            <li>½ sdt garam atau secukupnya</li>
            <li>lengkuas, memarkan</li>
            <li>daun salam</li>
            <li>daun pisang secukupnya untuk membungkus</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Haluskan bawang merah dan bawang putih.</li>
        <h3>Langkah 2</h3>
            <li>2.	Campurkan bersama daging giling, santan, lengkuas, daun salam, ketumbar dan garam.</li>
        <h3>Langkah 3</h3>
            <li>3.	Didihkan dan masak hingga santan mengering.</li>
        <h3>Langkah 4</h3>
            <li>4.	Campurkan tepung ketan bersama santan dan garam sambil uleni hingga lepas dari wadah & terasa licin di tangan.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Ambil setiap 1 sdm campuran tepung, pipihkan & isi dengan ½ sdt campuran bahan-bahan halus, bentuk bulat dan bungkus dengan daun pisang, demikian seterusnya.</li>
        <h3>Langkah 6</h3>   
            <li>6.	Lalu kukus hingga matang kira-kira 25 menit</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Ketua Adat Desa Niur, Tahjudin mengatakan Lepek Binti ini merupakan salah satu cikal bakal terbentuknya penyanggah (seping) panggung adat. “Lepek Binti ini kan juga kalau cerita dari nenek moyang dulu cikal bakal untuk seping (penyanggah) panggung yang biasa digunakan untuk acara pesta pernikahan.'' Itu bisa untuk panggung pelaminan, panggung musik, maupun panggung guma tanak (tempat menyimpan kue dan sayur dalam acara pernikahan).
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuelepekbiniti;