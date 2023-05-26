import React from 'react';

function Bilenthango() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bilenthango</h2>

      <div className="recipe-description">
        <p>
        Keunikan dari kuliner khas Gorontalo satu ini adalah proses pengolahannya yang terletak pada keberadaan daun pisang yang digunakan sebagai alas minyak dan ikan ketika digoreng. Hal ini bertujuan agar meminimalisir risiko ikan gosong akibat terlalu lama digoreng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/bilenthango.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>3 ekor mujair kecil</li>
            <li>3 buah tomat</li>
            <li>7 siung bawang merah</li>
            <li>3 cabe merah</li>
            <li>Garam</li>
            <li>Kaldu jamur</li>
            <li>6 butir kemiri</li>
            <li>3 lbr Daun pisang</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan cabe, bawang merah, tomat, kemiri. Tambahkan kaldu jamur dan garam sesuai selera</li>
        <h3>Langkah 2</h3>
            <li>Oleskan pada ikan secara merata</li>
        <h3>Langkah 3</h3>
            <li>Goreng ikan bersama daun pisang, jangan sampai bumbu ikannya terendam minyak ya... Siram minyak panas perlahan diatas bumbu. Tutup. Tunggu sampai matang</li>
        <h3>Langkah 4</h3>
            <li>Sajikan dengan nasi hangat</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bilenthango;