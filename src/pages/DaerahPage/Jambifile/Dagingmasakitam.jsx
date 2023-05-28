import React from 'react';

function Dagingmasakitam() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Daging Masak Itam</h2>

      <div className="recipe-description">
        <p>
        daging masak hitam. Kuliner berbahan dasar daging sapi ini seperti yang sudah diduga, menggunakan kecap manis untuk bumbu hitamnya. Perpaduan rasa gurih manis yang berpadu rempah-rempah Nusantara.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/daging_masakitam.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram daging sapi</li>
            <li>100 gram kelapa sangrai</li>
            <li>500 ml santan kental</li>
            <li>200 ml air</li>
            <li>5 sdm kecap manis</li>
            <li>Bumbu utuh:</li>
            <li>1/4 sdt jinten</li>
            <li>1/4 sdt adas manis</li>
            <li>1/4 sdt lada bubuk</li>
            <li>1/4 sdt pala halus</li>
            <li>1 sdt ketumbar</li>
            <li>2 cm kayu manis</li>
            <li>garam</li>
            <li>Bumbu halus:</li>
            <li>8 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>5 butir kemiri</li>
            <li>1 batang serai</li>
            <li>2 cm lengkuas</li>
            <li>2 cm jahe</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Goreng dulu bumbu yang akan dihalus, lalu ulek halus.</li>
        <h3>Langkah 2</h3>
            <li>Cuci bersih daging, potong-potong tipis agar mudah empuk.</li>
        <h3>Langkah 3</h3>
            <li>Campurkan bumbu halus dengan bumbu utuh. Masukkan daging dan aduk rata dengan bumbu. Marinasi selama 30 menit.</li>
        <h3>Langkah 4</h3>
            <li>Siapkan panci, tuang daging bersama bumbu, masak hingga daging matang sambil terus diaduk. Semakin keluar minyaknya, semakin bagus. </li>
        <h3>Langkah 5</h3>   
            <li>Tuang santan, kecap manis dan air, masak terus daging hingga empuk. Tes rasa, jika sudah enak, kuah berkurang dan mengental, angkat.</li>
        <h3>Langkah 6</h3>   
            <li>Sajikan daging masak hitam khas Jambi dengan nasi hangat</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Dagingmasakitam;