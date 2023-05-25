import React from 'react';

function Ketanbintul() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ketan Bintul</h2>

      <div className="recipe-description">
        <p>
        Ketan bintul adalah makanan khas Banten berbahan ketan dan taburan serundeng sejenis kelapa parut yang disangrai dengan rempah-rempah. Bisa pula disajikan dengan gulai kambing atau semur daging. Ketan bintul dapat dijumpai di pasar-pasar tradisional atau di toko-toko kue.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/ketanbintul.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gram ketan beras, rendam 2-3 jam/semalam </li>
            <li>1 sdt garam</li>
            <li>125 ml santan kental </li>
            <li>1 lembar daun pandan</li>
            <li>1/2 buah kelapa setengah tua, parut memanjang (sisihkan sekitar 4-5 sdm untuk campuran di ketan)</li>
            <li>BAHAN SERUNDENG:</li>
            <li>3 butir bawang merah, haluskan</li>
            <li>2 siung bawang putih, haluskan</li>
            <li>3 buah cabai merah, haluskan</li>
            <li>2 buah cabai rawit merah, haluskan</li>
            <li>2 lembar daun jeruk</li>
            <li>1 batang serai, memarkan</li>
            <li>Secukupnya garam</li>
            <li>Secukupnya gula merah, disisir halus </li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci beras ketan sampai bersih, beri air. Rendam selama 2-3 jam atau semalaman, tiriskan. Lalu kukus selama 20 menit.</li>
        <h3>Langkah 2</h3>
            <li>Ditempat terpisah masak santan, beri garam dan daun pandan. Aduk terus hingga matang, sisihkan (hanya sampai hangat saja jika menggunakan santan instan)</li>
        <h3>Langkah 3</h3>
            <li>Angkat ketan yang sudah dikukus sebelumnya ke dalam wadah. Tuang campuran santan ke dalam ketan. Aduk hingga santan meresap ke dalam ketan. Diamkan selama 10 menit. Lalu kukus lagi selama 25 menit sampai matang (10 menit terakhir sebelum diangkat tambahkan 4-5 sdm kelapa parut).</li>
        <h3>Langkah 4</h3>
            <li>Serundeng : Campurkan kelapa parut dengan bumbu halus, batang serai dan daun jeruk. Lalu sangrai hingga kuning kecoklatan dan terasa ringan. Tambahkan garam dan gula merah, koreksi rasa.</li>
        <h3>Langkah 5</h3>   
            <li>Angkat ketan bila sudah matang. Tumbuk hingga halus (karena tidak punya tumbukan khusus, aku menguleknya dengan cara ketan dilapisi plastik, lalu diulek).</li>
        <h3>Langkah 6</h3>   
            <li>Ambil 2-3 sdm ketan yang sudah ditumbuk, lalu bulat agak pipih. Bungkus daun pisang (Note : Bisa juga dicetak langsung ke loyang, lalu dipotong-potong).</li>
        <h3>Langkah 7</h3>   
            <li>Sajikan dengan taburan serundeng</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Konon ketan bintul ini sudah menjadi makanan favorit para Sultan Banten sejak zaman dahulu. Bahkan hingga sekarang pun selalu tersaji di meja makan keturunan para Sultan Banten saat Ramadhan. Ketan bintul begitu populer dan selalu ada saat berbuka puasa di banten.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ketanbintul;