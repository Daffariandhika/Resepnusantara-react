import React from 'react';

function Klepon() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Klepon</h2>

      <div className="recipe-description">
        <p>
        Klepon atau kelepon, adalah sejenis kue tradisional dari Jawa yang termasuk ke dalam kelompok jajanan pasar. Klepon dikenal pula di wilayah Sumatra, Sulawesi, dan Malaysia serta pada masyarakat Betawi.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
        <img src="/gallery/jawatengah/klepon.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr Tepung ketan</li>
            <li>50 gr Tepung beras</li>
            <li>Air, sampe adonan bisa dipulung buletkan</li>
            <li>Sari daun pandan opsional</li>
            <li>gula merah sebagai isian</li>
            <li>kelapa parut sebagai toping taburan</li>
            <li>garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Blender daun pandan dan air. Saring dan sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Aduk rata tepung beras, tepung ketan, air kapur sirih, dan garam. Tambahkan air daun pandan perlahan-lahan sambil diaduk rata. Tuang sisa air, aduk kembali hingga kalis. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan kelapa parut, gula merah</li>
        <h3>Langkah 4</h3>
            <li>ambil terus diaduk hingga gula larut dan air meresap. Angkat dan sisihkan.</li>
        <h3>Langkah 5</h3>   
            <li>Ambil 1/2 sdm adonan klepon, pipihkan, letakkan 1/2 sdt isi unti kelapa ke bagian tengahnya. Tutup dan bulatkan. Ulangi hingga adonan habis, sisihkan.</li>
        <h3>Langkah 6</h3>   
            <li>Rebus air, masukkan klepon secara bertahap. Masak hingga klepon mengapung. Angkat dan tiriskan, sisihkan.</li>
        <h3>Langkah 7</h3>   
            <li>Aduk rata kelapa dan garam. Gulingkan klepon matang ke atas taburan kelapa hingga klepon terselimuti rata dengan kelapa parut.</li>
        <h3>Langkah 8</h3>   
            <li>Sajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Klepon;