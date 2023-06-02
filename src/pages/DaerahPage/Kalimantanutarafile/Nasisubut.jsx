import React from 'react';

function Nasisubut() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Subut</h2>

      <div className="recipe-description">
        <p>
        Bahan dasar pembuatan Nasi Subut adalah nasi, ubi jalar yang berwarna ungu dan jagung. Proses pembuatanya tidak terlalu sulit. Nasi Subut adalah campuran antara nasi, ubi jalar dan biji jagung. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanutara/nasisubut.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram beras</li>
            <li>200 gram ubi ungu</li>
            <li>200 gram jagung manis pipilan</li>
            <li>500 ml liter air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Aron beras</li>
        <h3>Langkah 2</h3>
            <li>campur ubi ungu dan jagung</li>
        <h3>Langkah 3</h3>
            <li>aduk hingga rata</li>
        <h3>Langkah 4</h3>
            <li>masak sampai matang</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasisubut;