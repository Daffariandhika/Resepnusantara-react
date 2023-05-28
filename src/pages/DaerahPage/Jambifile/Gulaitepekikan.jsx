import React from 'react';

function Gulaitepek() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gulai Tepek</h2>

      <div className="recipe-description">
        <p>
        Gulai tepek ini sangat unik karena dibuat dari bahan utama berupa bakso ikan (fishcake) dan nanas yang dipotong-potong kotak dan dibumbui dengan bumbu gulai.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/gulai_tepek.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging ikan giling</li>
            <li>300 gr tepung sagu</li>
            <li>300 ml air</li>
            <li>1 butir telur</li>
            <li>1 sdm garam</li>
            <li>Bahan tambahan:</li>
            <li>400 gr buah nanas</li>
            <li>500 ml santan kental</li>
            <li>400 ml air</li>
            <li>Bumbu halus gulai:</li>
            <li>10 siung bawang putih</li>
            <li>15 butir bawang merah</li>
            <li>3 butir kemiri</li>
            <li>10 buah cabai rawit</li>
            <li>5 buah cabai merah</li>
            <li>2 sdm kunyit</li>
            <li>1 batang serai </li>
            <li>garam dan gula </li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Buat tepek ikannya dulu. Daging ikan giling sebaiknya sudah di freezer dulu sebelumnya selama 1 jam agar dingin.</li>
        <h3>Langkah 2</h3>
            <li>Keluarkan ikan, masukkan air, telur dan garam, aduk rata menggunakan tangan.</li>
        <h3>Langkah 3</h3>
            <li>Masukkan tepung sagu aduk perlahan hingga tercampur rata semua. Tak perlu diuleni karena justru akan keras. Cukup tercampur rata saja. </li>
        <h3>Langkah 4</h3>
            <li>Siapkan kukusan besar dan loyang. Oles minyak pada loyang, tuang adonan dan ratakan. Kukus selama 45 menit atau hingga matang. Dinginkan, angkat dan keluarkan dari loyang.</li>
        <h3>Langkah 5</h3>   
            <li>Potong-potong nanas. Potong-potong kotak tepek ikan sama besar dengan nanas, sisihkan. </li>
        <h3>Langkah 6</h3>   
            <li>Sekarang membuat gulainya. Panaskan minyak secukupnya. Tumis bumbu halus hingga harum, masukkan serai. Tumis lagi hingga bumbu matang.</li>
        <h3>Langkah 7</h3>   
            <li>Panaskan santan dan air hingga hampir mendidih, masukkan bumbu, aduk rata. Jika sudah mendidih, masukkan tepek ikan dan nanas, masak hingga mendidih lagi.</li>
        <h3>Langkah 8</h3>   
            <li>Tes rasa, bisa ditambahkan gula garam secukupnya. Jika rasanya sudah pas manis asam dan asinnya seimbang, angkat.</li>
        <h3>Langkah 9</h3>   
            <li>Nikmati gulai tepek dengan nasi hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gulaitepek;