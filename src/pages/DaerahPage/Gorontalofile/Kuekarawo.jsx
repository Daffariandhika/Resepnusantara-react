import React from 'react';

function Kuekarawo() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Karawo</h2>

      <div className="recipe-description">
        <p>
        Kue karawo merupakan kue kering yang hanya bisa ditemui di Gorontalo. Layaknya kue kering lainnya, kue karawo juga memiliki aneka varian rasa seperti rasa keju, coklat, kopi, atau strawberry.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/kue_karawo.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>750 gr tepung terigu</li>
            <li>1/2 kg margarin</li>
            <li>100 gr butter</li>
            <li>100 gr susu dancow</li>
            <li>250 gr gula halus</li>
            <li>50 gr tepung maizena</li>
            <li>50 gr dcc (lelehkan)</li>
            <li>75 gr coklat bubuk</li>
            <li>5 btr kuning telur</li>
            <li>2 bks vanili bubuk</li>
            <li>BAHAN UNTUK HIASAN:</li>
            <li>1 cangkir gula halus</li>
            <li>1/4 cangkir putih telur</li>
            <li>1 sdt cuka</li>
            <li>Pewarna makanan (hijau, merah, ungu, kuning, biru)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kocok margarin, butter dan gula halus smpe putih kira2 5 menitan, masukkan kuning telur satu persatu kocok rata, tambahkan vanili, susu bubuk, maizena</li>
        <h3>Langkah 2</h3>
            <li>Masukkan coklat bubuk dan dcc campurkan sampai rata, tambahkan tepung terigu sedikit demi sedikit (jgn sekaligus) aduk dg spatula sampai adonan gk lengket dan bisa di cetak</li>
        <h3>Langkah 3</h3>
            <li>Ambil sebagian adonan pipihkan menggunakan rolling pin (kalau gk ada bisa pakai botol bekas syrup) dan cetak sesuai selera tata di atas loyang sampai selesai</li>
        <h3>Langkah 4</h3>
            <li>Oven dgn suhu 150 decel yg sdh di panaskan terlebih dahulu sampai matang atau kenali oven masing2, angkat dinginkan</li>
        <h3>Langkah 5</h3>   
            <li>Cara membuat adonan hiasan : kocok putel dan gula sampai kental tambah 1 sdt cuka makan, bagi adonan beberapa bagian dan tambahkan pewarna makanan</li>
        <h3>Langkah 6</h3>   
            <li>Hiaslah kue sesuai dg selera. Siap disajikan atau disimpan kedalam toples</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuekarawo;