import React from 'react';

function Babiguling() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Babi Guling</h2>

      <div className="recipe-description">
        <p>
        Kekinian, babi guling dapat ditemukan dengan mudah di sejumlah warung makan hingga restoran Bali.

Umumnya babi guling paling nikmat jika disantap dengan nasi jinggo atau nasi campur.

Babi guling sendiri dimasak dalam bentuk utuh, namun bagian dalamnya diisi dengan berbagai macam bumbu rempah dan daun singkong agar rasanya semakin mantap.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/babi-guling.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr babi bagian paha</li>
            <li>1/2 sdm gula pasir</li>
            <li>1/2 sdm garam</li>
            <li>1/2 sdt bubuk ngohiong</li>
            <li>1/4 sdt merica bubuk</li>
            <li>1 sdm kecap asin</li>
            <li>1 sdm angciu</li>
            <li>4 siung bawang putih</li>
            <li>1/2 sdm garam</li>
            <li>1/2 sdm cuka masak</li>
            <li>1/2 sdm backing powder</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Blender atau haluskan beberapa bumbu termasuk, 1/2 sdm gula pasir, 1/2 bubuk ngohiong, 1/4 sdt merica bubuk, 1 sdm kecap asin, 1 sdm angciu, 1 sdt garam dan 4 siung bawang putih.</li>
        <h3>Langkah 2</h3>
            <li>Sayat memanjang daging babi yang sudah kamu siapkan, lalu baru sayatan tersebut diisi dengan bumbu yang sudah dihaluskan sebelumnya.</li>
        <h3>Langkah 3</h3>
            <li>Bumbui kulit babi dengan bumbu khusus kulit yang sudah disiapkan di atas.</li>
        <h3>Langkah 4</h3>
            <li>Lalu tusuk-tusuk daging babi yang sudah dibumbui tersebut hingga dalam, agar semua bumbu meresap sempurna ke dalam daging babi.</li>
        <h3>Langkah 5</h3>   
            <li>Biasanya babi guling utuh dipanggang menggunakan bara api, sedang untuk alternatif masak di rumah babi guling dipanggang menggunakan oven. Caranya adalah dengan memanaskan oven di suhu tinggi mencapai 160°C.</li>
        <h3>Langkah 6</h3>   
            <li>Setelah suhu oven yang sudah disesuaikan, maka segera masukkan daging babi ke dalamnya. Sebaiknya gunakan rak bagian tengah agar daging babi matang merata di kedua sisinya.</li>
        <h3>Langkah 7</h3>   
            <li>Untuk menampung minyak babi yang keluar dari hasil panggangan, maka masukkan wadah yang tahan panas tepat di bawahnya untuk menampung minyak tersebut.</li>
        <h3>Langkah 8</h3>   
            <li>Tunggu sampai kulit pada daging babi terlihat garing, tetapi sesekali kamu dapat menambahkan bumbu halus dan bumbu kulit yang tersisa agar rasanya lebih kuat.</li>
        <h3>Langkah 9</h3>   
            <li>Jika daging babi sudah garing dan lunak, daging babi bisa diangkat dari oven.</li>
        <h3>Langkah 10</h3>   
            <li>Lalu supaya daging babi yang tebal bisa matang merata sampai ke dalam, goreng daging babi di atas wajan hingga krispi dan garing.</li>
        <h3>Langkah 11</h3>   
            <li>Jika daging babi sudah matang, angkat dari wajan dan tiriskan sejenak agar kandungan minyaknya menghilang.</li>
        <h3>Langkah 12</h3>   
            <li>Daging babi siap dihidangkan dan bisa dikonsumsi dengan nasi putih hangat.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Asal usul babi guling awalnya berawal dari sekumpulan orang orang kei, yang mendiami pulau Kei besar dan Kei kecil. Orang kei adalah yang terbaik dalam mengolah daging babi.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Babiguling;