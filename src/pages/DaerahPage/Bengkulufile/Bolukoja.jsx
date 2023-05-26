import React from 'react';

function Bolukoja() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bolukoja</h2>

      <div className="recipe-description">
        <p>
        Sama seperti kue bolu pada umumnya, bolu koja memiliki tekstur yang sangat lembut.
Namun, uniknya kue bolu ini menggunakan agar-agar sebagai bahan campurannya (walau tak semua).
Nah, untuk warnanya yang hijau, ini berasal dari campuran daun pandan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/bolukoja.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>BAHAN CAIR:</li>
            <li>800 ml santan</li>
            <li>100 gr mentega</li>
            <li>BAHAN KENTAL:</li>
            <li>4 butir telur</li>
            <li>300 gr gula pasir</li>
            <li>500 gr tepung terigu</li>
            <li>1 sachet (susu kental manis)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan semua bahan cair hingga mendidih sebentar,mati kan kompor, lalu biarkan bahan cair hingga hangat kuku, siapkan semua bahan Aduk telur dan gula, hingga gula larut</li>
        <h3>Langkah 2</h3>
            <li>Selanjutnya masukan tepung terigu sedikit demi sedikit, bergantian dengan bahan cair (saya di bagi menjadi 3 kali memasukan tepung dan 3 kali memasukan bahan cair) lakukan hingga tepung terigu dan adonan cair habis, aduk rata, tambahkan pasta pandan secukupnya.</li>
        <h3>Langkah 3</h3>
            <li>Setelah adonan tercampur rata, untuk hasil lebih maksimal, adonan boleh di saring, untuk memastikan tidak ada adonan yang masih bergumpal, panaskan oven sesuaikan dengan oven masing2 (saya pakai oven tangkring api kompor sedang)  Kalau adonan sudah di saring, Masukan adonan ke dalam loyang tulban ukuran 20cm, yang sudah di oles mentega + di taburi tepung terigu tipis2, jika oven sudah panas masukan adonan dan panggang selama 1 jam atau hingga kue matang</li>
        <h3>Langkah 4</h3>
            <li>Jika bolu sudah matang keluarkan dari oven, dan ini penampakan bolu kojo setelah di oven selama 1 jam / hingga matang, keluarkan dari loyang lalu biarkan bolu kojo hingga dingin Cantik & wangi khas pandan</li>
        <h3>Langkah 5</h3>   
            <li>Setelah dingin, bolu kojo pun siap di potong2 dan di hidangkan selamat mencoba.</li>
        <h3>NOTE:</h3>   
            <li>Jika ingin rasa dan wangi bolu kojo lebih terasa pandan, boleh menggunakan 7 lembar daun pandan yang di blender bersama 800ml santan, lalu saring dan peras dari ampas daun pandan nya Bolu kojo ini tahan kurang lebih 3 hari pada suhu ruang</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Bolu Kojo adalah penganan khas daerah Sumatra Selatan dan daerah sekitarnya terutama di daerah Jambi, Riau, Bengkulu dan Palembang. Kojo berarti kemojo atau kamboja karena bentuk loyang yang menyerupai bunga kemboja. Biasanya kue ini dihidangkan pada acara-acara adat.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bolukoja;