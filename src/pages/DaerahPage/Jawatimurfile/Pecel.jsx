import React from 'react';

function Pecel() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Pecel</h2>

      <div className="recipe-description">
        <p>
        Pecel atau pecal adalah panganan tradisional yang berasal dari Ponorogo, Jawa Timur. Makanan ini biasanya dihidangkan dengan bumbu sambal kacang sebagai bahan utamanya dan dicampur dengan aneka jenis sayuran. Pecel populer terutama di wilayah DI Yogyakarta, Jawa Tengah, dan Jawa Timur.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/pecel.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gram bayam</li>
            <li> 1 buah labu siam</li>
            <li> 1 buah mentimun</li>
            <li>200 gram kol</li>
            <li> 5 buah kecipir</li>
            <li> 6 batang kacang panjang</li>
            <li>kemangi secukupnya</li>
            <li>Bahan untuk saus kacang:</li>
            <li>1 sendok makan asam jawa, ambil air rendamannya</li>
            <li>1 sendok teh garam</li>
            <li>2 ruas kencur</li>
            <li>2 siung bawang merah</li>
            <li>250 gram kacang tanah, goreng dan haluskan</li>
            <li> 5 buah cabai merah keriting</li>
            <li>5 buah cabai rawit</li>
            <li>5 lembar daun jeruk, buang tulang daun, lalu iris halus</li>
            <li>5 siung bawang putih</li>
            <li>50 gram gula merah, sisir halus</li>
            <li>air panas secukupnya</li>
            <li>Bahan pelengkap:</li>
            <li>telur rebus secukupnya</li>
            <li>rempeyek kacang secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih, dan potong-potong sayuran.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan air hingga mendidih.</li>
        <h3>Langkah 3</h3>
            <li>Rebus sebentar masing-masing sayuran, kecuali kemangi. Angkat dan tiriskan.</li>
        <h3>Langkah 4</h3>
            <li> Haluskan kacang tanah yang telah digoreng.</li>
        <h3>Langkah 5</h3>   
            <li>Dalam satu wadah, campur kacang tanah, bumbu halus, dan air asam Jawa. Aduk hingga rata.</li>
        <h3>Langkah 6</h3>   
            <li>Tambahkan air panas hingga kekentalan yang diinginkan. Koreksi rasanya.</li>
        <h3>Langkah 7</h3>   
            <li>Tata sayuran di piring saji. Siram dengan sambal kacang.</li>
        <h3>Langkah 8</h3>   
            <li>Beri bahan pelengkap, selamat menikmatinya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Pecel;