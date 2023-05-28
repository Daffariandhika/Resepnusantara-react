import React from 'react';

function Keraktelor() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kerak Telor</h2>

      <div className="recipe-description">
        <p>
        Sajian ini terdiri dari telur dihadapkan pada panas arang hingga jadi mirip kerak dan tampak agak gosong, lalu diberi bawang goreng dan serundeng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/kerak_telor.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>100 gr beras ketan</li>
            <li>1 butir telur bebek</li>
            <li>3 sdm serundeng kelapa</li>
            <li>2 sdm bawang goreng</li>
            <li>1/4 sdt garam</li>
            <li>1/4 sdt lada bubuk</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Rendam beras ketan selama 5 jam atau semalam agar empuk. Cuci bersih setelahnya dan tiriskan dari air.</li>
        <h3>Langkah 2</h3>
            <li>2.	Masukkan beras ketan di teflon, tuang dengan air cukup hingga terendam saja. Masak dengan api skecil hingga air mengering. Tutup teflon agar matangnya lebih merata.</li>
        <h3>Langkah 3</h3>
            <li>3.	Kocok telur bebek dengan garam, lada bubuk dan 1 sdm serundeng. Tuang ke atas ketan yang sudah kering. Setelah benar-benar kering, angkat dan balik kerak telor, masak terus hingga benar-benar matang, kering dan renyah.</li>
        <h3>Langkah 4</h3>
            <li>4.	Angkat dan sajikan di atas piring.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Keraktelor;