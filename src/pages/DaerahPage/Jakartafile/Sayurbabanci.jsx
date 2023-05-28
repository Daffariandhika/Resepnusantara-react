import React from 'react';

function Sayurbabanci() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sayur Babanci</h2>

      <div className="recipe-description">
        <p>
        Makanan khas Jakarta ini kerap disajikan saat buka puasa dan Lebaran. Uniknya, meski namanya sayur babanci, ternyata justru tak ada sayurannya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/sayur_babanci.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging sapi, rebus dengan +/- 1 liter air</li>
            <li>50 gr kelapa parut, sangrai, lalu haluskan</li>
            <li>200 ml air santan sedang (1 bgks santan instan 65ml + air)</li>
            <li>300 ml air kelapa</li>
            <li>Bumbu Rempah (sangrai, haluskan)</li>
            <li>1/2 SDT lada putih</li>
            <li>1/2 SDT ketumbar</li>
            <li>1/2 SDT jintan</li>
            <li>1/2 SDT biji kedaung</li>
            <li>1/2 SDT botor</li>
            <li>Bumbu Halus</li>
            <li>5 buah Cabai merah keriting</li>
            <li>5 butir bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>2 butir kemiri sangrai</li>
            <li>1 ruas jempol kunyit (5 gr)</li>
            <li>1 ruas jempol jahe (5 gr)</li>
            <li>1 ruas jempol bangle (5 gr)</li>
            <li>1 batang sereh</li>
            <li>3 lembar daun salam</li>
            <li>Secukupnya garam (+/- 1,5 SDT)</li>
            <li>Secukupnya gula merah (+/- 1 SDM)</li>
            <li>Pelengkap:</li>
            <li>Ketupat</li>
            <li>Bawang goreng</li>
            <li>Emping</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging sampai empuk. Potong-potong sesuai selera. Pakai kaldunya +/- 500 ml.</li>
        <h3>Langkah 2</h3>
            <li>Sangrai kelapa parut. Lalu haluskan. Siapkan daging kelapa muda, air kelapa, dan santan instan.</li>
        <h3>Langkah 3</h3>
            <li>Siapkan Bumbu Rempah (A). Untuk Kedaung pisahkan/kupas dan buang kulit kerasnya. Sangrai lalu haluskan. Sisihkan.</li>
        <h3>Langkah 4</h3>
            <li>Siapkan Bumbu Halus (B). Akar rimpang yg digunakan ada kunyit, jahe, dan bangle..buang kulitnya lalu haluskan bersama duo bawang, kemiri, dan Cabai merah keriting.</li>
        <h3>Langkah 5</h3>   
            <li>Geprek sereh. Panaskan minyak goreng. Tumis bumbu halus bersama sereh geprek dan daun salam. Tuang kedalam kuah kaldu (+/- 500 ml).</li>
        <h3>Langkah 6</h3>   
            <li>Tambahkan bumbu rempah (A) yang sudah dihaluskan. Tambahkan juga garam dan gula.</li>
        <h3>Langkah 7</h3>   
            <li>Masukkan potongan daging. Rebus hingga bumbu meresap. Masukkan air santan, daging kelapa muda, dan kelapa parut sangrai yg sudah dihaluskan.</li>
        <h3>Langkah 8</h3>   
            <li>Aduk-aduk dan masak dengan api sedang cenderung kecil agar santan tidak pecah. Koreksi rasa. Bisa ditambahkan kaldu bubuk. Angkat dan sajikan bersama ketupat dan taburi bawang goreng jangan lupa emping.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sayurbabanci;