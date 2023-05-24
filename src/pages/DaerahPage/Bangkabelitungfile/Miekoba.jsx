import React from 'react';

function Miekoba() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Mie Koba</h2>

      <div className="recipe-description">
        <p>
        Terdapat satu lagi olahan mie yang berasal dari Bangka Belitung, yaitu mie Koba. Mie Koba merupakan sejenis mie yang di dalamnya terdapat isian ikan tenggiri.
Selain itu, mie Koba juga diberi isian telur, seledri, dan juga bawang goreng. Sementara untuk kuahnya sendiri dibuat dari ikan tenggiri sebagai kaldu. Dengan tambahan perasan jeruk kunci membuat mie Koba terasa semakin nikmat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/miekoba.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gr ikan salam (Bisa pake tenggiri, dencis)</li>
            <li>Secukupnya air untuk merebus ikan</li>
            <li>10 buah cabe merah</li>
            <li>5 siung bawang putih</li>
            <li>15 siung bawang merah</li>
            <li>1 ruas jari jahe</li>
            <li>1/2 sdm lada</li>
            <li>± 4 cm kayu manis</li>
            <li>2 butir cengkeh</li>
            <li>PELENGKAP:</li>
            <li>Beberapa keping mie burung dara</li>
            <li>Secukupnya tauge</li>
            <li>Bawang goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus ikan yang sudah dilumuri jeruk. Lalu setelah masak, buang tulang nya. Airnya jangan dibuang.</li>
        <h3>Langkah 2</h3>
            <li>Siapkan duo bawang, cabe, merah, lada.</li>
        <h3>Langkah 3</h3>
            <li>Lalu blender bersama ikan yg sudah direbus dan dibuang tulangnya tadi. Lalu masukkan cengkeh dan kayu manis, masak hingga tanak.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan air ke dalam ikan yg sudah ditanak dengan bumbu.</li>
        <h3>Langkah 5</h3>   
            <li>Rebus mie burung dara. Untuk mempermudah dapat menggunakan mie apapun yang anda suka.</li>
        <h3>Langkah 6</h3>   
            <li>Sajikan mie dengan pelengkap lainnya. Beri perasan jeruk.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Mi Koba pertama kali diciptakan oleh Iskandar sejak 1987. Ia dan temannya berjualan dengan gerobak di Kecamatan Koba, Bangka Tengah. Saat mewakili kabupaten di tingkat provinsi, ia mencetuskan nama Mi Koba, yakni mi yang berasal dari Koba.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Miekoba;