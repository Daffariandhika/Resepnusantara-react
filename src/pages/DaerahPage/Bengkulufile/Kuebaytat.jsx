import React from 'react';

function Kuebaytat() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Bay Tat</h2>

      <div className="recipe-description">
        <p>
        Pembuatan Kue Bay Tat diawali dengan membuat adonan dasar tepung terigu, telur, dan gula. Setelahnya adonan dimasukan ke dalam loyang kemudian diberi selai nanas diatasnya, lalu dipanggang ke oven panas selama kurang lebih satu jam. Salah satu pembuat Kue Bay Tat di Bengkulu ialah Janatul Aini.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/kuebaytat.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg tepung terigu</li>
            <li>500 g gula pasir</li>
            <li>500 ml santan</li>
            <li>250 g mentega</li>
            <li>3 butir telur</li>
            <li>1 sdt baking soda</li>
            <li>1 sdt garam</li>
            <li>1 sdt vanili bubuk</li>
            <li>1/2 sdt adas manis</li>
            <li>selai nanas (untuk nastar) secukupnya</li>
            <li>perwana makanan kuning secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Masukkan gula, mentega, telur, baking soda, garam, vanili dan adas manis. Mixer hingga gula larut dan adonan mengembang.</li>
        <h3>Langkah 2</h3>
            <li>2.	Masukkan beberapa tetes pewarna makanan, mixer lagi hingga tercampur rata. </li>
        <h3>Langkah 3</h3>
            <li>3.	Tuang sedikit demi sedikit santan ke dalam adonan sambil dimixer hingga tercampur semua.</li>
        <h3>Langkah 4</h3>
            <li>4.	Ayak tepung, masukkan sedikit demi sedikit dan campurkan dengan adonan. Gunakan spatula untuk mengaduknya. Diamkan adonan selama 30 menit.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Panaskan oven selama 15 menit, siapkan loyang.</li>
        <h3>Langkah 6</h3>   
            <li>6.	Oles loyang dengan mentega tipis saja. Ratakan sebagian adonan hingga setengah loyang, tusuk-tusuk adonan dengan garpu agar tidak menggelembung saat dipanggang.</li>
        <h3>Langkah 7</h3>   
            <li>7.	Oles selai nanas menutupi adonan. Masukkan sisa adonan ke dalam plastik dan semprotkan membentuk pola kotak-kotak di atas selai nanas. Bentuk garis-garis dengan garpu atau penjepit kue. </li>
        <h3>Langkah 8</h3>   
            <li>8.	Panggang selama 20 menit dengan api bawah, lalu keluarkan sebentar, oles dengan kuning telur dan masukkan lagi ke dalam oven menggunakan rak atas selama 25 menit.</li>
        <h3>Langkah 9</h3>   
            <li>9.	Jika sudah matang, angkat dan biarkan dingin. Keluarkan dari loyang.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Menurut cerita, Kue Bay Tat dipercaya sebagai camilan raja-raja dan bangsawan Bengkulu tempo dulu.

Bay Tat adalah Kue Tart berukuran besar khas Bengkulu.

Makanan ini dipercaya pada zaman dahulu menjadi makanan para raja dan bangsawan Bengkulu.

Seiring zaman, Bay Tat menjadi makanan yang banyak dikonsumsi masyarakat dan banyak dicari wisatawan sebagai buah tangan bila berkunjung ke Bengkulu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuebaytat;