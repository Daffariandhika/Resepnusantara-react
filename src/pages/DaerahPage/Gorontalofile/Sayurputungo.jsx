import React from 'react';

function Sayurputungo() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sayur Putungo</h2>

      <div className="recipe-description">
        <p>
        lebih umum dikenal sebagai sayur ontong atau jantung pisang di Pulau Jawa. Sayur putungo ini merupakan sajian yang juga menjadi makanan khas Gorontalo
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/sayur_putungo.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 g jantung pisang</li>
            <li>400 ml santan kental</li>
            <li>300 ml air</li>
            <li>1 papan petai</li>
            <li>1 ekor ikan cakalang, potong-potong dan goreng</li>
            <li>Bumbu pelengkap:</li>
            <li>2 batang serai, memarkan</li>
            <li>1 batang daun bawang, iris tipis</li>
            <li>2 lembar daun salam</li>
            <li>Garam, gula dan kaldu bubuk secukupnya</li>
            <li>Bumbu halus:</li>
            <li>5 butir bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>10 buah cabai merah</li>
            <li>5 buah cabai rawit</li>
            <li>2 cm kunyit</li>
            <li>1 cm lengkuas</li>
            <li>1cm jahe</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Potong-potong jantung pisang dan rebus hingga setengah matang. Tiriskan dan buang air rebusannya yang hitam. Bilas jantung pisang, sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>2.	Panaskan minyak secukupnya. Tumis bumbu halus hingga harum, masukkan serai dan daun salam, tumis terus hingga bumbu matang.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tuang santan dan air, masak hingga mendidih. Masukkan jantung pisang, petai dan ikan cakalang goreng. Aduk rata.</li>
        <h3>Langkah 4</h3>
            <li>4.	Masukkan gula, garam dan kaldu bubuk secukupnya. Masak hingga sedap.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Tes rasa jika sudah pas, terakhir masukkan daun bawang, aduk rata. Jika sudah mendidih lagi, angkat.</li>
        <h3>Langkah 6</h3>   
            <li>6.	Sajikan sayur putungo khas Gorontalo dengan nasi hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sayurputungo;