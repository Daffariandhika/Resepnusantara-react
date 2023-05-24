import React from 'react';

function Laksobangka() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lakso Bangka</h2>

      <div className="recipe-description">
        <p>
        Mie Lakso disajikan bersama potongan daging dan disiram dengan kuah santan kuning. Pada awalnya, Lakso merupakan kuliner khas Melayu Bangka yang hanya berupa kuah santan.
Namun orang Tionghoa Bangka Belitung kemudian menyempurnakannya dengan tambahan mie putih kenyal yang terbuat dari sagu dan tepung beras.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/laksobangka.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>BAHAN MIE BERAS:</li>
            <li>300 gr beras</li>
            <li>200 gr tepung sagu tani</li>
            <li>750 ml air</li>
            <li>1 sdt garam</li>
            <li>BAHAN KUAH:</li>
            <li>150 gr daging ikan kukus (tanpa kulit dan tulang)</li>
            <li>200 ml santan kental/ 1 bungkus santan instan</li>
            <li>600 ml air</li>
            <li>secukupnya Gula dan garam</li>
            <li>BUMBU HALUS:</li>
            <li>7 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>2 ruas jari kunyit</li>
            <li>1 ruas jari lengkuas</li>
            <li>1 batang serai,ambil bagian putihnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih beras, rendam dengan air kurang lebih selama 4 jam.Buang air, blender halus beras dengan 250 ml air.</li>
        <h3>Langkah 2</h3>
            <li>Saring blenderan beras, jika masih ada sisa tumbuk halus.Masak air beras dengan 500 ml air,beri sedikit garam.Masak hingga kental dan berat seperti adonan bubur sumsum.Matikan kompor,letakkan adonan beras di wadah dan biarkan dingin.Kemudian beri sagu pada adonan secara bertahap sambil diuleni sampai sagu habis.</li>
        <h3>Langkah 3</h3>
            <li>Cetak adonan, saya pakai gilingan ikan.Didihkan air yang diberi sedikit minyak.Rebus langsung adonan,masak sebentar saja.Ketika adonan sudah mengapung, angkat dan celupkan di air es atau air dingin.Ulangi hingga adonan habis dan tiriskan.</li>
        <h3>Langkah 4</h3>
            <li>Cumpuk2 lakso di atas daun mangkok2 atau daun pisang,kalau tidak ada bisa diatas plastik. Membuat kuah, tumbuk ikan kukus.Tumis semua bumbu halus dengan sedikit minyak hingga harum,masukkan ikan yang sudah dihaluskan tadi.</li>
        <h3>Langkah 5</h3>   
            <li>Masukkan air,masak hingga mendidih.Masukkan santan,didihkan kembali.Beri gula dan garam secukupnya,koreksi rasa.</li>
        <h3>Langkah 6</h3>   
            <li>Ambil 1-2 cumpuk lakso, siram kuah santan kuning.Beri taburan bawang goreng dan sambal cabe rawit.</li>
        <h3>Langkah 7</h3>   
            <li>Nikmati selagi hangat</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Lakso merupakan sebuah kuliner yang diciptakan dari perpaduan antara masakan Melayu dengan Tionghoa. Kuliner ini sendiri terdiri dari mie putih yang berbahan dasar sagu dan tepung beras.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Laksobangka;