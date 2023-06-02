import React from 'react';

function Mangutlele() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Mangut Lele</h2>

      <div className="recipe-description">
        <p>
        Membayangkan wangi dan begitu uniknya rasa dari mangut lele bumbu adalah keistimewaan tersendiri. Apalagi ketika menyantapnya saat hangat dan segar. Bahkan sepiring nasi-pun takkan cukup sepertinya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatengah/mangutlele.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>6 ekor lele, bumbui lalu goreng</li>
            <li>1 bungkus santan kara</li>
            <li>1 genggam daun kemangi</li>
            <li>Cabai rawit utuh sesuai selera</li>
            <li>3 lembar daun salam</li>
            <li>1 batang serai, geprek</li>
            <li>Minyak untuk menumis</li>
            <li>500 ml air</li>
            <li>Garam, gula pasir dan kaldu jamur</li>
            <li> 1 buah tomat, potong kasar</li>
            <li>Bawang goreng untuk taburan</li>
            <li>7 siung bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>3 buah cabai merah</li>
            <li>2 ruas kencur</li>
            <li> 1 ruas kunyit</li>
            <li>2 sdm ketumbar</li>
            <li>2 buah kemiri bakar</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Tumis bumbu halus dengan minyak secukupnya sampai wangi, masukkan daun salam dan batang serai.</li>
        <h3>Langkah 2</h3>
            <li> Masukkan air sampai mendidih kemudian masukkan santan dan aduk sampai mendidih kembali.</li>
        <h3>Langkah 3</h3>
            <li> Masukkan ikan lele yang sudah digoreng dan tunggu sampai bumbu meresap.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan garam, gula dan kaldu jamur kemudian koreksi rasa.</li>
        <h3>Langkah 5</h3>   
            <li>Terakhir masukkan daun kemangi, cabai rawit utuh dan potongan tomat aduk sebentar kemudian matikan api.</li>
        <h3>Langkah 6</h3>   
            <li>Taburi bawang goreng biar makin gurih.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Mangutlele;