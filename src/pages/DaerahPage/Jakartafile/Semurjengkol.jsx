import React from 'react';

function Semurjengkol() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Semur Jengkol</h2>

      <div className="recipe-description">
        <p>
        Olahan santan yang menimbulkan minyak di permukaan selalu menggoda di kala lapar tiba. Olahan sayur ini sangat mudah ditemukan di warteg atau rumah makan di Jakarta dan sekitarnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/semur_jengkol.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gram jengkol rebus, geprek</li>
            <li>1/2 sdt garam</li>
            <li>1/2 sdt pala bubuk</li>
            <li>1/2 jintan bubuk</li>
            <li>1/2 sdt kaldu jamur</li>
            <li>1/4 sdt merica bubuk</li>
            <li>7 sdm kecap manis</li>
            <li>300 ml air</li>
            <li>50 ml minyak goreng</li>
            <li>Bumbu Halus:</li>
            <li>9 butir bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>5 butir kemiri</li>
            <li>7 buah cabai merah besar</li>
            <li>1 batang serai, geprek</li>
            <li>3 cm lengkuas, geprek</li>
            <li>2 lembar daun jeruk</li>
            <li>1 lembar daun salam</li>
            <li>5 butir cengkeh</li>
            <li>5 cm kayu manis</li>
            <li>3 buah kapulaga</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Tumis bumbu halus hingga harum.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan bumbu aromatik ke tumisan. Tumis hingga layu.</li>
        <h3>Langkah 3</h3>
            <li>Tambahkan kecap manis. Tunggu hingga berbuih baru diaduk.</li>
        <h3>Langkah 4</h3>
            <li>Tuang air dan masukkan jengkol. Masak hingga mendidih.</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan garam, pala, kaldu jamur, dan merica bubuk. Aduk rata.</li>
        <h3>Langkah 6</h3>   
            <li>Masak dengan api kecil sampai kuah mengental dan agak surut.</li>
        <h3>Langkah 7</h3>   
            <li>Angkat dan sajikan.</li>
        </ul>
      </div>

     

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Semurjengkol;