import React from 'react';

function Kuepadamaran() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Padamaran</h2>

      <div className="recipe-description">
        <p>
        Kue padamaran mungkin bisa jadi alternatif kue sederhana namun enak untuk dibuat sendiri di rumah. Kue padamaran adalah kue tradisional dari Jambi yang sekilas mirip dengan kue talam.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/kue_padamaran.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>150 gr tepung beras</li>
            <li>450 ml santan cair</li>
            <li>75 ml santan kental</li>
            <li>75 gr gula merah</li>
            <li>50 ml air perasan daun pandan suji</li>
            <li>1 sdt pasta pandan</li>
            <li>1/4 sdt garam halus</li>
            <li>daun pisang secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan daun pisang di atas api agar layu dan mudah dibentuk. Potong panjang dan bentuk mangkuk tangkir daun pisang. Semat dengan lidi atau stapler.</li>
        <h3>Langkah 2</h3>
            <li>Campurkan tepung dengan santan kental dan cair. Aduk rata hingga tidak ada yang bergerindil.</li>
        <h3>Langkah 3</h3>
            <li>Masak adonan di atas api kecil sambil tetap diaduk. Masukkan garam, air perasan pandan, dan pasta pandan secukupnya. Aduk rata terus hingga muncul gelembung-gelembung, jangan sampia terlalu kental. Angkat.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan gula merah sisir secukupnya di mangkuk takir. Tuang adonan sedikit, tabur gula merah lagi dan tutup dengan adonan hingga penuh.</li>
        <h3>Langkah 5</h3>   
            <li>Kukus selama 30 menit hingga matang, angkat diamkan biar agak dingin.</li>
        <h3>Langkah 6</h3>   
            <li>Nikmati kue padamaran khas Jambi selagi hangat, meskipun dingin juga tetap enak.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuepadamaran;