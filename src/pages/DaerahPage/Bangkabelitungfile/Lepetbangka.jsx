import React from 'react';

function Lepetbangka() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lapet Bangka</h2>

      <div className="recipe-description">
        <p>
        Lapet dari Bangka Belitung dibuat dari beras ketan yang dikukus dalam wadah. Yang uniknya, wadahnya terbuat dari daun kelapa yang masih muda atau janur.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/lepetbangka.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1kg ketan yang sudah dicuci dan direndam air 5 jam</li>
            <li>1 butir kelapa besar parut untuk diambil santannya</li>
            <li>Garam secukupnya</li>
            <li>Janur untuk membungkus</li>
            <li>Tali untuk mengikat lapet</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Aron ketan setengah matang lalu aduk dengan santan yang sudah diberi garam</li>
        <h3>Langkah 2</h3>
            <li>2.	Dinginkan sebentar, ambil janur dan bungkus rapat lalu diikat agar tak lepas</li>
        <h3>Langkah 3</h3>
            <li>3.	Susun lapet dalam panic lalu tuangkan air hingga penuh, nyalakan kompor lalu rebus sampai matang.</li>
        <h3>Langkah 4</h3>
            <li>4.	Siap disajikan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sebenarnya lapet dapat dijumpai hamper diseluruh Indonesia. Ada yang dari Sunda, Jawa, dan ada yang dari Bangka Belitung.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lepetbangka;