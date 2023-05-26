import React from 'react';

function Pendap() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Pendap</h2>

      <div className="recipe-description">
        <p>
        Pendap adalah makanan khas Bengkulu yang terbuat dari bahan dasar ikan. Jenis ikan yang digunakan bisa apa saja, yakni ikan air tawar maupun ikan air laut.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/pendap.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>30 lembar daun talas muda</li>
            <li>1 buah kelapa mentah tua diparut halus</li>
            <li>1/2 kg ikan, boleh ikan apa saja</li>
            <li>6 siung bawang merah, 6 siung bawang putih</li>
            <li>2 sd lengkuas giling, 3 sd cabe giling</li>
            <li>1 batang sereh, 3 bh asam kandis</li>
            <li>garam dan penyedap rasa</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Blender semua bumbu sampai halus aduk dan campurkan dg parutan kelapa koreksi rasa</li>
        <h3>Langkah 2</h3>
            <li>Susun 10 lembar daun talas diatas daun pisang letakkan bumbu yg telah dibagi 3 bagian keatas daun talas</li>
        <h3>Langkah 3</h3>
            <li>Susun ikan yg telah dibersihkan dan juga di bagi 3 tambahkan bumbu diatasnya</li>
        <h3>Langkah 4</h3>
            <li>Kemudian tutup dan bungkus dg daun pisang dan ikat erat dg pelepah pisang ulangi sampai habis</li>
        <h3>Langkah 5</h3>   
            <li>Susun bungkusan pendap kedalam panci siram dengan air sampai menutupi bungkusan tutup masak dg api besar setelah mendidih buat apinya menjadi sedang masak lebih kurang 2 jam jika pakai kayu bakar lebih enak dan dimasaknya biasanya lebih lama</li>
        <h3>Langkah 6</h3>   
            <li>Selalu awasi airnya jangan sampai kekeringan usahakan bungkusan selalu terendam karena jika tidak terendam akan menghasilkan pendap yg gatal</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Pendap atau babatuk adalah makanan khas tradisional Krui, Lampung Barat dan Kaur Bengkulu Selatan. Karena rasanya yang unik, pedas dan gurih sehingga masakan ini sangat disukai oleh presiden pertama RI Soekarno selama menjalani masa pengasingan di Bengkulu sejak 1938 hingga 1942. Masakan Pendap ini pernah diusulkan menjadi warisan budaya tak benda oleh Provinsi Bengkulu. Ternyata pamor dan gaungnya makanan ini tidak hanya di Bengkulu saja akan tetapi juga terkenal di berbagai daerah lainnya seperti Jakarta, Lampung, Lubuk Linggau, Palembang, Sumatera Selatan, Pangkal Pinang, Jambi, dan kini menyebar sampai daerah lain di Indonesia, karena sudah menjadi oleh-oleh khas Bengkulu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Pendap;