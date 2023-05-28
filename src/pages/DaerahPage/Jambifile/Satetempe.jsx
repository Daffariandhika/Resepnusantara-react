import React from 'react';

function Satetempe() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Tempe</h2>

      <div className="recipe-description">
        <p>
        Tempe yang direndam rempah-rempah perpaduan bumbu ini membuat tempe menjadi lebih gurih dan beraroma nikmat. Sementara warna hitamnya merupakan campuran kecap manis. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/sate_tempe.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 papan tempe, potong dadu</li>
            <li>Bumbu:</li>
            <li>2 sdm kecap manis</li>
            <li>65 ml santan kental</li>
            <li>100 ml air</li>
            <li>1/4 sdt garam</li>
            <li>2 lembar daun salam</li>
            <li>2 lembar daun jeruk</li>
            <li>Bumbu kacang:</li>
            <li>100 gr kacang tanah</li>
            <li>3 siung bawang merah</li>
            <li>2 siung bawang putih</li>
            <li>2 sdm minyak sayur</li>
            <li>1/2 sdm ketumbar</li>
            <li>1 sdm gula merah</li>
            <li>Bahan pelengkap:</li>
            <li>Bawang goreng, sambal rawit, air perasan jeruk</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan bahan bumbu kacang, tumis hingga matang.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan daun jeruk, daun salam, air dan santan. Aduk rata. Masak hingga mendidih. </li>
        <h3>Langkah 3</h3>
            <li>Masukkan garam dan kecap manis, aduk dan masak lagi hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan tempe, masak bersama bumbu hingga mengental. Angkat.</li>
        <h3>Langkah 5</h3>   
            <li>Tususk-tusuk tempe yang sudah berbumbu. Panggang di teflon atau alat bakar hingga kering sedap. Angkat.</li>
        <h3>Langkah 6</h3>   
            <li>Sisa bumbu bisa ditumis terus hingga keluar minyak dan warnanya lebih gelap serta tidak terlalu encer.</li>
        <h3>Langkah 7</h3>   
            <li>Sajikan sate tempe rangkayo dengan saus kacang hitam.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satetempe;