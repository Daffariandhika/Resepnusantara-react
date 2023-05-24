import React from 'react';

function Kuerintak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Rintak</h2>

      <div className="recipe-description">
        <p>
        Jenis Kue ini di racik dari bahan baku tepung sagu, santan kental dan telur. Kue nya memang cukup alot namun mempunyai rasa yang enak dan juga otentik.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/kuerintak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Tepung sagu 500 gram</li>
            <li>Santan kental 200 ml</li>
            <li>Gula merah secukupnya</li>
            <li>Telur ayam 2 butir</li>
            <li>Minyak goreng secukupnya untuk olesan</li>
            <li>Margarin secukupnya untuk olesan</li>
            <li>Wijen secukupnya untuk taburan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Langkah pertama masukan santan kental dan gula merah yang telah disisir halus kedalam sebuah wadah.</li>
        <h3>Langkah 2</h3>
            <li>Kemudian rebus bahan tersebut sampai mendidih sambil diaduk-aduk hingga gula larut. Angkat dan biarkan dingin didalam suhu ruangan.</li>
        <h3>Langkah 3</h3>
            <li>Selanjutnya tambahkan tepung sagu dan telur ayam aduk-aduk sampai merata.</li>
        <h3>Langkah 4</h3>
            <li>Lalu giling adonan dengan menggunakan gilingan mie dengan ketebalan adonan 0,5 mm.</li>
        <h3>Langkah 5</h3>   
            <li>Kemudian bentuk dengan menggunakan cetakan ring cutter cookies sesuai dengan keinginan Anda.</li>
        <h3>Langkah 6</h3>   
            <li>Tata rapi diatas loyang yang telah diolesi dengan margarin sebelumnya. Lakukan hal yang sama hingga adonan habis tak tersisa.</li>
        <h3>Langkah 7</h3>   
            <li>Setelah itu oles bagian atasnya dengan menggunakan minyak goreng dan beri wijen di atasnya. Lakukan hal yang sama terhadap adonan yang telah dibentuk lainnya.</li>
        <h3>Langkah 8</h3>   
            <li>Masukkan kedalam oven yang telah dipanaskan sebelumnya selama kurang lebih 25 menit dengan suhu oven sekitar 160 derajat celsius.</li>
        <h3>Langkah 9</h3>   
            <li>Panggang terus sampai matang dan kering. Keluarkan dari oven dan biarkan dingin didalam suhu ruangan.</li>
        <h3>Langkah 10</h3>   
            <li>Bila sudah dingin masukkan kedalam wadah yang kedap udara dan dapat kue rintak siap untuk disajikan.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Umumnya kue rintak ini jadikan sebagai makanan camilan bersama keluarga dalam berbincang-bincang. Namun selain itu, kue ini juga kerap dijadikan suguhan di meja tamu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuerintak;