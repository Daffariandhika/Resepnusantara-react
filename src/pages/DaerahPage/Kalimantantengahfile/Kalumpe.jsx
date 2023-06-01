import React from 'react';

function Kalumpe() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kalumpe</h2>

      <div className="recipe-description">
        <p>
         
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/kalumpe.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li></li>
        <h3>Langkah 2</h3>
            <li></li>
        <h3>Langkah 3</h3>
            <li></li>
        <h3>Langkah 4</h3>
            <li></li>
        <h3>Langkah 5</h3>   
            <li></li>
        <h3>Langkah 6</h3>   
            <li></li>
        <h3>Langkah 7</h3>   
            <li></li>
        <h3>Langkah 8</h3>   
            <li></li>
        <h3>Langkah 9</h3>   
            <li></li>
        <h3>Langkah 10</h3>   
            <li></li>
        <h3>Langkah 11</h3>   
            <li></li>
        <h3>Langkah 12</h3>   
            <li></li>
        <h3>Langkah 13</h3>   
            <li></li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kalumpe;