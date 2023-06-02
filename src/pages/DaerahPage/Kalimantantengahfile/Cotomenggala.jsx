import React from 'react';

function Cotomenggala() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Coto Menggala</h2>

      <div className="recipe-description">
        <p>
        Coto manggala adalah coto khas Kota Pangkalan Bun, Kalimantan Tengah. coto ini terbuat dari bahan singkong atau ketela. coto ini dinamakan coto manggala karena rakyat Pangkalan Bun menyebut singkong dengan nama manggala. Cara memakan coto ini juga berbeda, coto ini tidak dimakan dengan nasi, melainkan dengan singkong
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantantengah/cotomenggala.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg singkong potong dadu</li>
            <li>10 bh sayap ayam</li>
            <li>200 gr kulit sapi/kikil</li>
            <li>1 ekor ikan haruan</li>
            <li>10 bh ceker</li>
            <li>1 ltr air</li>
            <li>1 bks kaldu bubuk</li>
            <li>1 bh wortel potong dadu</li>
            <li>2 btg daun bawang potong kasar</li>
            <li>Bumbu halus :</li>
            <li>50 gr bawang merah</li>
            <li>50 gr bawang putih</li>
            <li>1 sdt merica bubuk</li>
            <li>1 ruas jahe</li>
            <li>Secukupnya garam</li>
            <li>Rempah aromatik :</li>
            <li>3 cm kayu manis</li>
            <li>3 butir cengkih</li>
            <li>Pelengkap :</li>
            <li>1 bks kecil soun rendam</li>
            <li>Secukupnya kerupuk</li>
            <li>Secukupnya telur dadar</li>
            <li>1 ikat daun saledri</li>
            <li>Bawang goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kupas singkong, potong kotak cuci bersih
Didihkan air beri sedikit garam lalu rebus singkong hingga agak empuk, angkat sisihkan</li>
        <h3>Langkah 2</h3>
            <li>Siapkan panci berisi air rebus hingga mendidih masukan sayap ayam dan ceker masak hingga empuk, singkong yg sdh di rebus (apabila pakai ikan gabus maka ikan di rebus di ambil dagingnya)</li>
        <h3>Langkah 3</h3>
            <li>Tumis bumbu halus, kayu manis, cengkih hingga layu dan wangi + daun bawang yg sdh di potong2 lalu masukan bumbu ke dlm panci rebusan ayam aduk hingga tercampur rata masukan wortel</li>
        <h3>Langkah 4</h3>
            <li>Beri garam dan kaldu bubuk masak hingga bumbu meresap cek rasa dan angkat</li>
        <h3>Langkah 5</h3>   
            <li>Penyajian : siapkan piring tata soun siramkan kuah beserta isinya beri taburan daun saledri dan daun bawang</li>
        <h3>Langkah 6</h3>   
            <li>Siap di sajikan hangat</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Cotomenggala;