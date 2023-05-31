import React from 'react';

function Rengginang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Rengginang</h2>

      <div className="recipe-description">
        <p>
        Rengginang adalah sejenis kerupuk tebal yang terbuat dari Beras ketan yang dibentuk bulat dan dikeringkan dengan cara dijemur di bawah panas matahari, lalu digoreng panas dalam minyak goreng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/rengginang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram beras ketan</li>
            <li>Terasi secukupnya</li>
            <li>Garam secukupnya</li>
            <li>Penyedap rasa</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih beras ketan. Rendam beras ketan minimal 2-5 jam.</li>
        <h3>Langkah 2</h3>
            <li>Setelah itu, tiriskan ketan lalu diaron masak setengah matang.</li>
        <h3>Langkah 3</h3>
            <li> Setelah air meresap, matikan kompor. Masukkan terasi secukupnya, garam, penyedap rasa, aduk sampai rata.</li>
        <h3>Langkah 4</h3>
            <li> Kukus kurang lebih 30 menit.</li>
        <h3>Langkah 5</h3>   
            <li>Setelah matang, ratakan menggunakan tusuk sate.</li>
        <h3>Langkah 6</h3>   
            <li> Jemur di bawah matahari terik 1-2 hari sampai benar-benar kering.</li>
        <h3>Langkah 7</h3>   
            <li>Goreng dengan minyak panas.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Rengginang;