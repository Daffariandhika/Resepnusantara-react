import React from 'react';

function Buburpedas() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bubur Pedas</h2>

      <div className="recipe-description">
        <p>
        Bubur Pedas atau Bubbor Paddas adalah makanan tradisional khas orang Melayu Sambas dari Kalimantan Barat yang berupa sejenis bubur. Bubur pedas juga populer di kalangan orang Melayu di Sarawak, Malaysia yang biasanya disajikan selama bulan Ramadhan setelah umat Muslim mengakhiri puasa pada waktu berbuka.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanbarat/buburpedas.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 g beras, cuci bersih</li>
            <li>250 g kelapa parut setengah tua</li>
            <li>3 sdm minyak goreng</li>
            <li>5 lembar daun salam</li>
            <li>½ lembar daun kunyit, buang tulang daunnya, iris tipis</li>
            <li>3 cm lengkuas, memarkan</li>
            <li>2 batang serai, memarkan</li>
            <li>1,5 l air</li>
            <li>300 g daging sapi, potong dadu 1 cm</li>
            <li>1 sdt garam</li>
            <li>1 sdt kaldu sapi bubuk</li>
            <li>100 g jagung manis pipil</li>
            <li>100 g toge, bersihkan</li>
            <li>100 g wortel potong dadu kecil</li>
            <li>250 g kangkung, cincang kasar</li>
            <li>200 g oyong, cincang kasar</li>
            <li>150 g kacang panjang, iris tipis</li>
            <li>100 g daun kesum, cincang kasar</li>
            <li>Bumbu, Haluskan:</li>
            <li>5 butir bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>3 butir kemiri, sangrai</li>
            <li>1 cm kunyit, bakar</li>
            <li>1 cm jahe, bakar</li>
            <li>1 sdm ketumbar, sangrai</li>
            <li>1 sdt merica putih butiran</li>
            <li>½ sdt jintan</li>
            <li>½ sdt terasi bakar</li>
            <li>Pelengkap:</li>
            <li>Kacang tanah goreng, secukupnya</li>
            <li>Teri jengki goreng, secukupnya</li>
            <li>Bawang merah goreng, secukupnya</li>
            <li>Sambal cabai rawit, secukupnya</li>
            <li>Jeruk lemon cui, secukupnya</li>
            <li>Tomat, iris-iris, secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging sapi hingga mendidih, sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Sangrai beras dalam wajan hingga kecokelatan. Angkat, tumbuk hingga halus. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Sangrai kelapa parut dalam wajan hingga kecokelatan. Angkat, tumbuk hingga halus. Sisihkan.</li>
        <h3>Langkah 4</h3>
            <li>Panaskan minyak dalam panci besar, tumis bumbu halus, daun salam, daun kunyit, lengkuas, dan serai hingga harum.</li>
        <h3>Langkah 5</h3>   
            <li>Masukkan tumisan bumbu, kelapa parut sangrai, beras sangrai ke dalam pancir rebusan daging.</li>
        <h3>Langkah 6</h3>   
            <li>Masukkan sayur-sayuran dan aduk hingga merata dan matang. Bubur siap disajikan dengan pelengkapnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Buburpedas;