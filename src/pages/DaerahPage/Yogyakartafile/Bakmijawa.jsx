import React from 'react';

function Bakmijawa() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bakmi Jawa</h2>

      <div className="recipe-description">
        <p>
        Bakmi Jawa adalah salah satu jenis masakan mie yang berasal dari Jawa, Indonesia. Mie ini memiliki sejarah yang panjang dan telah menjadi bagian penting dari budaya kuliner di Yogyakarta.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/bakmi-jawa.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr mie kuning</li>
            <li>200 gr daging ayam</li>
            <li>100 gr udang, kupas</li>
            <li>2 siung bawang putih, haluskan</li>
            <li>2 batang daun bawang, iris tipis</li>
            <li>2 sdm kecap manis</li>
            <li>1 sdm kecap asin</li>
            <li>1 sdt garam</li>
            <li>1/2 sdt merica bubuk</li>
            <li>1 sdt minyak wijen</li>
            <li>Minyak goreng secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Rebus mie kuning dalam air mendidih hingga matang. Tiriskan dan sisihkan.</li>
            <li>Panaskan sedikit minyak goreng dalam wajan, tumis bawang putih hingga harum.</li>
            <li>Masukkan daging ayam dan udang. Tumis hingga daging ayam berubah warna dan udang matang.</li>
            <li>Tambahkan kecap manis, kecap asin, garam, dan merica bubuk. Aduk rata.</li>
            <li>Masukkan mie kuning ke dalam wajan. Aduk-aduk hingga mie tercampur dengan bumbu dan matang merata.</li>
            <li>Tambahkan daun bawang dan minyak wijen. Aduk sebentar.</li>
            <li>Angkat dan sajikan Bakmi Jawa panas.</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Bakmi Jawa dapat ditelusuri kembali ke abad ke-19, saat imigran Tionghoa mulai membawa pengaruh mereka dalam dunia kuliner di Jawa. Bakmi Jawa merupakan perpaduan antara keahlian masak Tionghoa dengan bumbu dan rempah khas Indonesia.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bakmijawa;