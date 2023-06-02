import React from 'react';

function Sotolenthok() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Lenthok</h2>

      <div className="recipe-description">
        <p>
        Soto Lenthok terdiri dari kuah kaldu ayam yang gurih dan kental, potongan daging ayam yang lezat, serta mie lenthok yang merupakan mie khas Jawa Tengah yang terbuat dari beras.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/soto-lenthok.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging ayam</li>
            <li>200 gr mie lenthok</li>
            <li>100 gram tauge</li>
            <li>2 batang daun seledri, iris halus</li>
            <li>Bawang goreng secukupnya</li>
            <li>Air secukupnya</li>
            <li>Garam secukupnya</li>
            <li>Merica secukupnya</li>
            <li>Minyak goreng secukupnya</li>
            <li>4 siung bawang putih</li>
            <li>4 butir bawang merah</li>
            <li>2 cm jahe</li>
            <li>2 cm lengkuas</li>
            <li>2 batang serai, memarkan</li>
            <li>Jeruk nipis, iris menjadi beberapa bagian</li>
            <li>Sambal kecap secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Rebus daging ayam dalam panci dengan air yang cukup hingga empuk dan matang. Angkat daging ayam, tiriskan, dan suwir-suwir dagingnya. Sisihkan.</li>
            <li>Panaskan minyak dalam wajan, tumis bumbu halus hingga harum dan matang.</li>
            <li>Masukkan bumbu tumis ke dalam kaldu ayam yang telah direbus. Aduk rata dan masak kembali hingga kuah mendidih.</li>
            <li>Tambahkan garam dan merica secukupnya sesuai selera. Aduk rata dan masak sebentar.</li>
            <li>Rebus mie lenthok dalam air mendidih hingga matang. Tiriskan dan sisihkan.</li> 
            <li>Siapkan mangkuk saji, masukkan mie lenthok ke dalam mangkuk.</li> 
            <li>Tambahkan suwiran daging ayam dan tauge di atas mie lenthok.</li>
            <li>Tuangkan kuah soto panas ke dalam mangkuk hingga mie dan daging ayam terendam.</li>
            <li>Taburi dengan irisan daun seledri dan bawang goreng.</li>
            <li>Soto Lenthok siap disajikan. Sajikan dengan jeruk nipis dan sambal kecap sebagai pelengkapnya. Nikmati soto hangat yang lezat dan kenyalnya</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Soto Lenthok adalah hidangan soto khas Jawa Tengah, Indonesia. Hidangan ini memiliki sejarah yang cukup panjang dan telah menjadi bagian dari warisan kuliner Jawa. Soto Lenthok terkenal karena kuahnya yang kental dan beraroma sedap, serta penggunaan mie lenthok yang menjadi ciri khasnya.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sotolenthok;