import React from 'react';

function Laksa() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Laksa</h2>

      <div className="recipe-description">
        <p>
        Berbeda dengan Laksa kebanyakan, Laksa Tangerang memiliki keunikan tersendiri. Jika melihat Laksa Bogor, terdapat kuah kental yang berasal dari potongan oncom, dengan campuran ketupat, bihun, tauge panjang, suwiran daging ayam, udang, dan telur rebus yang biasanya di makan dengan sambal suka.

Pada Laksa Betawi, biasanya berisi telur, tauge pendek, ketupat, daun kemangi dan kucai. Ada juga yang menambahkan bihun dan perkedel, untuk memperkaya rasanya.

Sedangkan pada Laksa Tangerang, terbuat dari mie tepung beras putih yang sudah direbus, kemudian ditaburi daun seledri, dan diberi kuah kuning yang kental . Adanya parutan kelapa yang disangrai dan kacang hijau menjadikan rasa manis sebagai cita rasayang khas. Sebagai pelengkap, Laksa Tangerang bisa dipadukan dengan opor ayam , telur rebus ataupun tahu.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/laksa.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>3 sdm minyak goreng</li>
            <li>50 g ebi, rendam air panas, haluskan, sangrai kering</li>
            <li>2 batang serai, ambil bagian putih, memarkan</li>
            <li>1 sdt terasi bakar</li>
            <li>1.2 L kaldu ayam</li>
            <li>50 g kacang hijau, rendam semalaman</li>
            <li>200 g kentang, potong dadu 1 cm</li>
            <li>300 ml santan kental</li>
            <li>1 ekor ayam kampung, potong 8, goreng</li>
            <li>BUMBU HALUS:</li>
            <li>10 buah cabai merah keriting</li>
            <li>10 butir bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>4 buah cabai merah besar</li>
            <li>3 cm jahe</li>
            <li>2 cm kunyit, bakar</li>
            <li>1 sdt ketumbar, sangrai</li>
            <li>1 sdt merica putih butiran, sangrai</li>
            <li>½ sdt jintan, sangrai</li>
            <li>ISI:</li>
            <li>600 g bihun jagung, seduh air panas</li>
            <li>4 butir telur ayam, rebus, belah 2</li>
            <li>20 g kucai, iris halus</li>
            <li>PELENGKAP</li>
            <li>Bawang goreng</li>
            <li>Emping</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan minyak dalam panci. Tumis ebi, serai, dan terasi hingga harum.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan bumbu halus, tumis hingga bumbu matang dan harum.</li>
        <h3>Langkah 3</h3>
            <li>Tuang kaldu, kacang hijau, dan kentang. Masak hingga kacang hijau lunak.</li>
        <h3>Langkah 4</h3>
            <li>Tuang santan dan ayam, kecilkan api. Masak sambil ditimba-timba hingga mendidih agar santan tidak pecah. Angkat.</li>
        <h3>Langkah 5</h3>   
            <li>Tata isi dalam mangkuk saji, tuangi kuah dan potongan ayam. Sajikan panas dengan pelengkap.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Laksa. Atau yang lebih dikenal dengan Mie Laksa adalah salah satu dari sekian banyak makanan traditional ternama yang tercipta lewat perpaduan antara Tionghoa dengan Melayu. Sesuai dengan namanya, “Laksa” berasal dari bahasa sanskerta yang berarti banyak. Kata banyak sendiri merujuk pada pembuatan Mie Laksa yang menggunakan racikan dari banyak macam bumbu dapur.

Sebagai salah satu dari kebudayaan peranakan, Laksa mulai berkembang di beberapa wilayah. Tak halnya di Indonesia. Bahkan menjadi makanan khas di beberapa kota di Indonesia. Terdapat juga jenis laksa yang terkenal di Indonesia. Diantaranya, Laksa Bogor dan Laksa Betawi. Namun Ada satu lagi Laksa yang tak kalah terkenal, yaitu Laksa Tangerang.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Laksa;