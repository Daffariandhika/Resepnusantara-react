import React from 'react';

function Kuahplieku() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gudeg</h2>

      <div className="recipe-description">
        <p>
         
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/kuahpliek-u.jpg"/>
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
        <h3></h3>
            <li></li>
            <li></li>
            <li></li>
        <h3></h3>
            <li></li>
            <li></li>
            <li></li>
        <h3></h3>
            <li></li>
            <li></li>
            <li></li>
        <h3></h3>
            <li></li>
            <li></li>
            <li></li>
        <h3></h3>   
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuahplieku;