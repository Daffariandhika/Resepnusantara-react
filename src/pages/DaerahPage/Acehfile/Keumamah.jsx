import React from 'react';

function Keumamah() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Keumamah</h2>

      <div className="recipe-description">
        <p>
        Tak hanya disantap oleh para pejuang kemerdekaan, di masa lalu para jemaah haji asal Bumi Rencong juga membekali diri dengan masakan si ikan kayu ini. Maklum, ketika itu perjalanan ibadah ke Mekkah memakan waktu hingga 1,5 bulan via laut. Alhasil, para jemaah haji memerlukan makanan praktis dan mudah disantap. Keumamah merupakan salah satu jawabannya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/keumamah.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>5 ekor ikan tongkol rebus ukuran kecil</li>
            <li>3 buah cabe hijau besar</li>
            <li>1 sdt gula</li>
            <li>1 sdt garam</li>
            <li>1 sdt kaldu bubuk</li>
            <li>1 sdt lada</li>
            <li>BAHAN BUMBU HALUS:</li>
            <li>3 buah cabe merah</li>
            <li>7 buah cabe rawit</li>
            <li>8 butir bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>1 sdt ketumbar</li>
            <li>1 ruas jahe</li>
            <li>1 ruas lengkuas</li>
            <li>1 batang daun serai</li>
            <li>1 ruas kunyit</li>
            <li>5 sdm air asam jawa</li>
            <li>1 buah tomat ukuran sedang</li>
            <li>Daun temurun/ kari (4 lembar)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Setelah dicuci bersih dan dibuang kepala dan kotorannya. Ikan disuir-suir. Ikan dikukus lalu saya panggang hingga kering</li>
        <h3>Langkah 2</h3>
            <li>Siapkan bumbu. Lalu blender</li>
        <h3>Langkah 3</h3>
            <li>Tumis hingga wangi bumbu halus, lalu masukkan sereh, daun kari dan lengkuas. Aduk rata. Tambahkan gula, garam, kaldu bubuk dan lada</li>
        <h3>Langkah 4</h3>
            <li>Lalu masukkan suiran ikan. Aduk rata hingga bumbu semua tercampur. Masak hingga kering. Lalu sajikan dengan nasi hangat</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Siapa sangka, di balik nikmatnya menyantap menu masakan ikan olahan tersebut tersimpan perjalanan sejarah panjang. Yakni, sengitnya perjuangan para tokoh Aceh melawan penjajah di masa lalu. Para pejuang harus bergerilya di hutan-hutan dalam waktu lama, sehingga logistik perang harus selalu ada, termasuk makanan.

Para pejuang Aceh pada masa lalu mengolah ikan kayu. Ikan kayu dijadikan bahan lauk-pauk yang bisa tahan lama, bahkan hingga berbulan-bulan, guna mencukupi kebutuhan gizi pejuang. Inilah cikal bakal munculnya keumamah.

Karena beratnya perjuangan yang dilakukan serta pasukan yang harus berpindah-pindah di hutan, maka para pejuang Aceh menjadikan keumamah tersebut sebagai salah satu cadangan logistik yang praktis dan mudah dibawa ke mana saja. "Ini adalah cara terbaik para pejuang untuk dapat bertahan di dalam hutan," demikian dikatakan Wali Kota Banda Aceh Aminullah Usman.

        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Keumamah;