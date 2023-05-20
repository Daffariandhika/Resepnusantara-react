import React from 'react';

function Gudeg() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gudeg</h2>

      <div className="recipe-description">
        <p>
          Gudeg merupakan masakan yang berbahan utama nangka muda atau oleh warga lokal disebut gori. Dalam prosesnya, potongan daging nangka ini direbus dengan gula merah dan santan dengan api kecil selama beberapa jam. Gudeg tidak hanya menjadi makanan yang lezat, tetapi juga mencerminkan nilai budaya dan tradisi yang kaya di daerah Yogyakarta. Hingga saat ini, gudeg terus menjadi salah satu kuliner yang dijaga keasliannya dan menjadi ikon kuliner dari kota Yogyakarta. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/gudeg.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Nangka Muda</li>
            <li>Gula Merah</li>
            <li>Santan</li>
            <li>Bawang Putih</li>
            <li>Bawang Merah</li>
            <li>Kemiri</li>
            <li>Lengkuas</li>
            <li>Daun Salam</li>
            <li>Serai</li>
            <li>Daun Jeruk Purut</li>
            <li>Ketumbar</li>
            <li>Kunyit</li>
            <li>Merica</li>
            <li>Garam</li>
            <li>Minyak</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Persiapan Bahan</h3>
            <li>Potong nangka muda menjadi bagian kecil.</li>
            <li>Haluskan bumbu-bumbu seperti bawang putih, bawang merah, kemiri, lengkuas, dan serai.</li>
            <li>Siapkan santan dan gula merah.</li>
        <h3>Tumis bumbu</h3>
            <li>Panaskan minyak dalam wajan.</li>
            <li>Tumis bumbu halus (bawang putih, bawang merah, kemiri, lengkuas, serai) hingga harum dan matang.</li>
        <h3>Masukkan nangka muda</h3>
            <li>Masukkan potongan nangka muda ke dalam wajan dengan bumbu tumis.</li>
            <li>Aduk rata hingga nangka terbalut dengan bumbu.</li>
        <h3>Tambahkan santan dan gula merah</h3>
            <li>Tuangkan santan ke dalam wajan.</li>
            <li>Masukkan gula merah ke dalam santan.</li>
            <li>Aduk rata dan biarkan santan mendidih.</li>
        <h3>Masak Dalam Waktu Yang Lama</h3>   
            <li>Setelah santan mendidih, kecilkan api dan biarkan gudeg masak dalam waktu yang lama hingga nangka muda menjadi lembut dan bumbu meresap dengan baik.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Gudeg memiliki asal-usulnya dari istana-istana kerajaan Yogyakarta. Awalnya, gudeg disajikan sebagai hidangan istimewa yang hanya diperuntukkan bagi keluarga kerajaan dan kalangan bangsawan. Namun, seiring dengan perkembangan zaman, gudeg mulai populer di kalangan masyarakat luas dan menjadi salah satu kuliner yang terkenal di daerah tersebut.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gudeg;
