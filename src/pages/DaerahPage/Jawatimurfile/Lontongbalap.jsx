import React from 'react';

function Lontongbalap() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lontong Balap</h2>

      <div className="recipe-description">
        <p>
        Lontong balap adalah makanan khas Indonesia yang merupakan ciri khas kota Surabaya di Jawa Timur. Makanan ini terdiri dari lontong, taoge, tahu goreng, lentho, bawang goreng, kecap, dan sambal.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/lontongbalap.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gr Tauge</li>
            <li>5 siung Bawang putih</li>
            <li>4 siung Bawang merah</li>
            <li>Daun bawang</li>
            <li>Daun seledri</li>
            <li>1 Liter Kaldu sapi (Air biasa juga bisa)</li>
            <li>2 sdm Minyak untuk menumis</li>
            <li>1 sdt Kaldu bubuk</li>
            <li>1/4 sdt Lada bubuk</li>
            <li>Garam & Gula</li>
            <li>Bahan Pelengkap :</li>
            <li>Lontong</li>
            <li>Tahu goreng</li>
            <li>Lento Kacang tolo</li>
            <li>Bawang goreng</li>
            <li>Kecap manis</li>
            <li>Bahan lento kacang tolo :</li>
            <li>200 gr Kacang Tolo direbus(3/4 dihaluskan,1/4 biarkan utuh)</li>
            <li>5 Siung Bawang putih halus</li>
            <li>2 cm Kencur halus</li>
            <li>Putih Telur</li>
            <li>2 lembar Daun Jeruk iris tipis</li>
            <li>3 buah Cabe rawit</li>
            <li>Garam & gula</li>
            <li>Bahan sambal petis :</li>
            <li>3 sdm Petis Udang</li>
            <li>15 Cabe Rawit</li>
            <li>5 Siung Bawang Putih</li>
            <li>5 sdm Minyak goreng</li>
            <li>1-2 sdm Kecap manis</li>
            <li>secukupnya Air</li>
            <li>Garam & gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Membuat kuah cambah (tauge) ::
Haluskan bawang putih & bawang merah..tumis bumbu halus..masukkan air kaldu..beri garam,lada,gula & kaldu bubuk,,masak hingga mendidih, masukkan tauge,daun bawang & seledri aduk rata kemudian langsung matikan api..biarkan tauge matang sendiri dengan kuah panasnya.
Siapkan piring beri bahan pelengkap dan siram dengan kuah,taburi bawang goreng dan kecap manis,lengkapi dengan sambel petis dan sate kerang.</li>
        <h3>Langkah 2</h3>
            <li>Membuat lento kacang tolo ::
Campur semua bahan aduk rata,buat bulatan dengan cara di kepal hingga padat..kemudian goreng hingga kecoklatan.</li>
        <h3>Langkah 3</h3>
            <li>Membuat sambal petis ::
Haluskan cabe rawit & bawang putih dengan sedikit minyak..tumis dengan petis dan beri garam,gula,kecap & air secukupnya..aduk rata agar petis tidak menggumpal,masak hingga meletup-letup. Kekentalan sesuai selera.</li>
        <h3>Langkah 4</h3>
            <li>Dapat ditambahkan sate-satean sesuai selera</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lontongbalap;