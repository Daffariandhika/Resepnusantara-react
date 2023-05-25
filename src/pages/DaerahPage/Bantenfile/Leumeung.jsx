import React from 'react';

function Leumeung() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Leumeung</h2>

      <div className="recipe-description">
        <p>
        Makanan khas Banten untuk oleh-oleh lainnya yang bisa menjadi pilihan adalah leumeung. Kudapan ini terbuat dari beras ketan dan santan.
Adonan tersebut kemudian diberikan gula aren atau gula merah dan dimasukkan ke dalam bambu yang sudah dibersihkan. Lalu, bambu tersebut dibakar hingga hangus dan kue di dalamnya matang.
Uniknya, leumeung sering disajikan bersama telur asin sebagai bahan pelengkapnya.
Rasanya yang gurih, manis, asin, dan dilengkapi dengan aroma yang khas

        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/leumeung.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr beras ketan putih</li>
            <li>350 ml santan kental</li>
            <li>650 ml air putih</li>
            <li>1/2 sdm garam</li>
            <li>2 lembar daun pisang</li>
            <li>2 batang Bambu</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci beras ketan sebanyak 3 kali tiriskan</li>
        <h3>Langkah 2</h3>
            <li>Cuci bambu kemudian diam kan hingga kering</li>
        <h3>Langkah 3</h3>
            <li>Campurkn air dan santan kemudian tambahkan </li>
        <h3>Langkah 4</h3>
            <li>Potong daun pisang memanjang ambil batang pelepah daun pisang belah 2 jangan sampai putus</li>
        <h3>Langkah 5</h3>   
            <li>Masukan daun pisang di antara pelepah pisang gulung lalu masukan ke dalam bambu kemudian tarik pelepah pisang</li>
        <h3>Langkah 6</h3>   
            <li>Masukan beras ketan masing masing 250gr hentak-hentakan ketan sampai padat masukan air santan hingga melebihi 3 jari dari tinggi ketan</li>
        <h3>Langkah 7</h3>   
            <li>Bakar di atas api dgn posisi miring sambil di lihat air nya bila kurang tmbahkan lagi air santannya</li>
        <h3>Langkah 8</h3>   
            <li>Bakar hingga matang</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Lemang merupakan makanan khas dari berbagai daerah di Indonesia. lemang / leumeung juga dikenal di wilayah Kalimantan, Malaysia dan Brunei. Konon menurut sejarahnya, Syeikh Burhanuddin asal minangkabau adalah ulama yang pertama kali memperkenalkan masakan ini. Berawal saat beliau berdakwah memperkenalkan Islam di tanah Minang, ia sering disuguhi berbagai macam makanan oleh penduduk.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Leumeung;