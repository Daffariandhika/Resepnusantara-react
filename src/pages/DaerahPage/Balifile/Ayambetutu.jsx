import React from 'react';

function Ayambetutu() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ayam Betutu</h2>

      <div className="recipe-description">
        <p>
        Nama makanan khas Bali yang satu ini pasti sudah sangat familiar. Jika kamu berkunjung ke Pulau Dewata, kamu tidak boleh melewatkan kuliner yang satu ini.

Ayam Betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali yang terbuat dari campuran daun jeruk, sereh, salam, kunyit, kemiri, jahe, bawang merah, dan bumbu lainnya. Ayam yang dimasak dengan bumbu ini tentu akan menghasilkan cita 
 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/ayambetutu.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>700 g ayam (1 ekor utuh)</li>
            <li>2 sdm air jeruk nipis</li>
            <li>1 sdt garam</li>
            <li>2 sdm minyak untuk menumis</li>
            <li>2
batang serai, iris tipis
</li>
            <li>2
sdt
Royco Kaldu Ayam
</li>
            <li>200
g daun singkong, rebus
</li>
            <li>4
lembar daun jeruk
daun pisang, untuk membungkus
Bumbu halus
</li>
            <li>8
butir bawang merah
</li>
            <li>6
siung bawang putih
</li>
            <li>12
buah cabai merah keriting
</li>
            <li>2
cm kunyit, bakar
</li>
            <li>½
sdt ketumbar butiran
</li>
            <li>2
cm jahe, parut
</li>
            <li>2
cm lengkuas, parut
</li>
            <li>1
sdt garam
</li>
            <li>1
sdm gula merah
</li>
            <li>1
sdt minyak
</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Lumuri ayam utuh dengan garam dan jeruk nipis secara merata. Diamkan hingga meresap selama kurang lebih 15 menit. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak, tumis bumbu halus dan serai hingga harum. Masukkan Royco Kaldu Ayam, aduk. Angkat.</li>
        <h3>Langkah 3</h3>
            <li>Ambil setengah bagian bumbu, aduk bersama daun singkong dan daun jeruk. Masukkan hingga ke dalam rongga perut ayam.</li>
        <h3>Langkah 4</h3>
            <li>Lumuri sisa bumbu halus ke seluruh permukaan ayam secara merata. Bungkus dengan daun pisang. Kukus selama 45 menit. Angkat.</li>
        <h3>Langkah 5</h3>   
            <li>Panggang di atas wajan pemanggang dengan alas daun pisang hingga kecokelatan. Belah ayam memanjang dua bagian.</li>
        <h3>Langkah 6</h3>   
            <li>Siap disajikan, nikmat dimakan bersama nasi hangat.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Nama makanan khas Bali yang satu ini pasti sudah sangat familiar. Jika kamu berkunjung ke Pulau Dewata, kamu tidak boleh melewatkan kuliner yang satu ini.

Ayam Betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali yang terbuat dari campuran daun jeruk, sereh, salam, kunyit, kemiri, jahe, bawang merah, dan bumbu lainnya. Ayam yang dimasak dengan bumbu ini tentu akan menghasilkan cita 

        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ayambetutu;