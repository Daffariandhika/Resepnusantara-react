import React from 'react';

function Lokan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lokan</h2>

      <div className="recipe-description">
        <p>
        Lokan adalah kerang yang biasa hidup di daerah rawa atau muara sungai yang berpapasan dengan laut. Masyarakat Bangka Belitung biasa memasak Lokan menjadi hidangan lezat. Cara memasaknya mudah ada yang cukup direbus dengan serai dan ada yang dijadikan kuah kuning atau pun bumbu saus tiram.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/lokan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1/2 kg Lokan,cuci bersih</li>
            <li>Garam</li>
            <li>Kaldu jamur</li>
            <li>Air</li>
            <li>Air asam jawa</li>
            <li>BUMBU HALUS:</li>
            <li>5 bh Cabe Merah/Rawit sesuai selera</li>
            <li>6 bh Bawang Merah</li>
            <li>1 ruas Kunyit</li>
            <li>1 ruas Lengkuas Muda</li>
            <li>1 sdm Terasi</li>
            <li>1 batang Serai, geprek</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan air dan bumbu halus hingga mendidih lalu letakkan lokan bersama garam,kaldu jamur dan air asam jawa.</li>
        <h3>Langkah 2</h3>
            <li>Masak hingga lokan matang, test rasa.</li>
        <h3>Langkah 3</h3>
            <li>Lokan lempah kuning siap untuk dihidangkan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Lokan laut adalah makanan khas Bangka yang disajikan dengan cara yang sangat praktis. Lokan sendiri merujuk pada hewan laut sejenis kerang yang biasanya hidup di dekat muara-muara sungai atau di kawasan vegetasi rawa di mana juga ditumbuhan oleh macam-macam tumbuhan air. Lokan mempunyai bentuk yang sangat mirip dengan tiram.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lokan;