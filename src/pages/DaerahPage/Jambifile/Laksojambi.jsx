import React from 'react';

function Laksojambi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lakso Jambi</h2>

      <div className="recipe-description">
        <p>
        Lakso merupakan makanan warisan Melayu yang bisa ditemukan di Jambi dan beberapa daerah di Sumatera. Lakso menyerupai mi yang dibuat dari tepung sagu.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/lakso_jambi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>10 sdm tepung beras</li>
            <li>5 sdm tepung tapioka</li>
            <li>250 ml air mendidih</li>
            <li>1/2 sdt garam</li>
            <li>1 sdm minyak</li>
            <li>Bahan kuah:</li>
            <li>250 gr daging ikan gabus</li>
            <li>500 ml susu cair</li>
            <li>500 ml santan kental sedang</li>
            <li>2 lembar daun salam</li>
            <li>2 batang serai, memarkan</li>
            <li>garam dan gula secukupnya</li>
            <li>Bumbu halus:</li>
            <li>4 siung bawang putih</li>
            <li>4 butir kemiri</li>
            <li>8 siung bawang merah</li>
            <li>1 ruas kunyit</li>
            <li>1/4 ketumbar</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campurkan tepung beras dan garam. Tuang air panas dan aduk rata hingga menjadi adonan mirip bubur.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan tepung tapioka sambil diaduk-aduk. Jika sudah tercampur rata, masukkan ke dalam cetakan putu mayang. Jika tak punya, bisa masukkan ke dalam plastik. Gunting ujungnya.</li>
        <h3>Langkah 3</h3>
            <li>Rebus air, tambahkan sedikit garam. </li>
        <h3>Langkah 4</h3>
            <li>Semprotkan adonan ke dalamnya dan tungggu hingga matang. Angkat dan tiriskan.</li>
        <h3>Langkah 5</h3>   
            <li>Untuk kuahnya, tumis bumbu halus hingga harum, masukkan daun salam dan serai. Tumis hingga bumbu matang.</li>
        <h3>Langkah 6</h3>   
            <li>Masukkan ikan gabus, garam dan gula secukupnya, masak hingga ikan matang.</li>
        <h3>Langkah 7</h3>   
            <li>Tuang santan dan susu cair. Masak hingga mendidih. Tes rasa, jika sudah pas, angkat.</li>
        <h3>Langkah 8</h3>   
            <li>Sajikan lakso Palembang di piring dengan kuah santan gurih. Lakso palembang siap dinikmati. Beri taburan bawang goreng.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Laksojambi;