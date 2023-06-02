import React from 'react';

function Ayamkalasan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ayam Goreng Kalasan</h2>

      <div className="recipe-description">
        <p>
        Ayam Kalasan adalah hidangan ayam yang dimasak dengan cara digoreng dan direndam dalam bumbu khas yang manis dan gurih. Ayam yang digunakan biasanya adalah ayam kampung atau ayam negeri yang memiliki daging yang kenyal dan lebih lezat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/ayam-kalasan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor ayam, potong menjadi beberapa bagian</li>
            <li>5 siung bawang putih</li>
            <li>4 butir kemiri, sangrai</li>
            <li>2 cm jahe, memarkan</li>
            <li>2 batang serai, memarkan bagian putihnya</li>
            <li>2 lembar daun salam</li>
            <li>2 lembar daun jeruk</li>
            <li>1 sdm gula merah, serut atau sisir halus</li>
            <li>1 sdm air asam jawa</li>
            <li>1 sdm kecap manis</li>
            <li>1 sdm kecap asin</li>
            <li>Garam secukupnya</li>
            <li>Merica secukupnya</li>
            <li>Minyak goreng secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Haluskan bawang putih dan kemiri menggunakan blender atau ulek halus.</li>
            <li>Panaskan minyak goreng dalam wajan. Tumis bumbu halus, jahe, serai, daun salam, dan daun jeruk sampai harum.</li>
            <li>Masukkan potongan ayam ke dalam wajan, aduk rata dengan bumbu dan biarkan ayam terendam dalam bumbu.</li>
            <li>Tambahkan gula merah, air asam jawa, kecap manis, kecap asin, garam, dan merica. Aduk rata dan pastikan ayam terbalut dengan bumbu.</li>
            <li>Masak ayam dengan api kecil sambil sesekali diaduk agar bumbu meresap dan ayam matang merata. Tutup wajan dan biarkan ayam matang dan bumbu meresap selama sekitar 30-40 menit.</li>
            <li>Setelah ayam matang dan bumbu meresap, angkat ayam kalasan dari wajan.</li>
            <li>Panaskan sedikit minyak goreng dalam wajan lain. Goreng ayam kalasan dalam minyak panas sampai bagian luar ayam berwarna kecokelatan dan renyah. Angkat dan tiriskan.</li>
            <li>Ayam Kalasan siap disajikan. Sajikan dengan nasi hangat dan pelengkap seperti sambal, irisan mentimun, atau lalapan sesuai selera.</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Ayam Kalasan merupakan hidangan tradisional dari Jawa Tengah, Indonesia. Makanan ini memiliki sejarah yang panjang dan telah menjadi bagian dari warisan kuliner Jawa Tengah selama berabad-abad. Ayam Kalasan berasal dari desa Kalasan, yang terletak di sebelah timur Kota Yogyakarta. Desa Kalasan dikenal sebagai pusat pengembangan kuliner khas Jawa.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ayamkalasan;