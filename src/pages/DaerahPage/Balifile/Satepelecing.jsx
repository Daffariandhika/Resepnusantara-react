import React from 'react';

function Satepelecing() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Pelecing</h2>

      <div className="recipe-description">
        <p>
        Selain sate lilit, Pulau Dewata juga memiliki sate plecing. Sate ini dimasak dengan bumbu khas Bali yang bernama plecing yang terbuat dari kemiri, terasi, tomat, bawang putih, dan beberapa bumbu lainnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/satepelecing.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr daging sapi</li>
            <li>Tusuk sate secukupnya</li>
            <li>2 sdm minyak goreng</li>
            <li>1/2 sdt backing powder untuk pelembut daging</li>
            <li>1 buah jeruk limo </li>
            <li>secukupnya Air untuk merebus</li>
            <li>BUMBU SAMBAL:</li>
            <li>15 buah cabe merah besar</li>
            <li>2 buah tomat ukuran sedang</li>
            <li>5 buah cabe rawit </li>
            <li>1 sdm terasi bakar</li>
            <li>300 CC air</li>
            <li>Garam</li>
            <li>Gula</li>
            <li>4 sdm minyak tandusan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Potong dadu daging sapi. Campur dgn backing powder dan 2 sdm minyak sayur. Tusuk daging dengan tusukan sate. Sisihkan</li>
        <h3>Langkah 2</h3>
            <li>Sementara itu rebus semua bumbu halus kecuali terasi selama 10 menit. Angkat dinginkan. Haluskan bahan sambal plus terasi dengan blender atau ulekan.</li>
        <h3>Langkah 3</h3>
            <li>Rebus kembali bahan sambal dengan 300 CC air. Tambahkan garam dan gula. Tes rasa. Rebus bahan sambal dengan api sedang hingga bahan sambal airnya agak menyusut. Panas panas masukkan minyak kelapa murni. Dinginkan. Setelah dingin, masukkan air jeruk limau. Aduk rata</li>
        <h3>Langkah 4</h3>
            <li>Ambil sebagian sambal pelecing campurkan ke dalam daging yg sudah ditusuk. Bakar daging diatas bara api (saya sarankan di bakar diatas bara ya atau menggunakan gas grill) sambil dioles sesekali menggunakan bahan sambal.</li>
        <h3>Langkah 5</h3>   
            <li>Setelah matang, angkat. Sajikan dengan sisa bumbu sambal pelecing.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>Fakta unik</h2>
        <p>
        Hal utama yang membedakan sate plecing dengan jenis sate yang lainnya adalah bumbu plecing yang digunakan. Bumbu atau sambal plecing yang dipakai pada kuliner khas Bali ini bukanlah bumbu atau sambal kacang. Oleh karena itu, Anda akan mendapati rasa sate plecing yang jauh beda dengan sate di Pulau Jawa.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satepelecing;