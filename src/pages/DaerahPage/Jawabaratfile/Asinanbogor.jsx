import React from 'react';

function Asinanbogor() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Asinan Bogor</h2>

      <div className="recipe-description">
        <p>
        Asinan adalah sejenis makanan yang dibuat dengan cara pengacaran, bahan yang diacarkan yaitu berbagai jenis sayuran dan buah-buahan. Di Indonesia, asinan menjadi salah satu hidangan khas seni kuliner Indonesia.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/asinanbogor.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 buah bengkuang (kupas, potong-potong)</li>
            <li>½ buah nanas (kupas, buang bintik hitamnya, iris-iris)</li>
            <li>1 buah kedondong (kupas, iris-iris)</li>
            <li>2 buah salak (kupas, potong-potong)</li>
            <li>1 buah mangga (kupas, iris sesuai keinginan)</li>
            <li>8 buah jambu air (cuci, potong-potong)</li>
            <li>acang tanah goreng untuk taburan</li>
            <li>5 cabai merah (buang bijinya)</li>
            <li>1 bungkus BonCabe level 15, rasa Original (7gr)</li>
            <li>7 sendok makan gula pasir (muncung)</li>
            <li>½ sendok makan garam</li>
            <li>1 buah jeruk nipis</li>
            <li>500 ml air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Ulek cabai hingga halus. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Rebus air, gula pasir dan garam hingga larut.</li>
        <h3>Langkah 3</h3>
            <li>Tambahkan cabai halus dan BonCabe level 15.</li>
        <h3>Langkah 4</h3>
            <li>Masak hingga matang, koreksi rasa. Angkat, saring dan biarkan dingin.</li>
        <h3>Langkah 5</h3>   
            <li>Siapkan potongan buah di dalam mangkuk besar, tuang dengan air jeruk nipis.</li>
        <h3>Langkah 6</h3>   
            <li>Jika kuah sudah benar-benar dingin, tuang di atas buah-buahan. Aduk rata.</li>
        <h3>Langkah 7</h3>   
            <li>Simpan dalam kulkas semalaman. Sajikan dalam kondisi dingin.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Asinanbogor;