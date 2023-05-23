import React from 'react';

function Nasigurih() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Gurih</h2>

      <div className="recipe-description">
        <p>
        Nasi Gurih adalah hidangan khas dari Aceh yang terbuat dari beras yang dimasak dengan santan dan bumbu rempah-rempah khas Aceh. Sejarah nasi gurih khas Aceh berasal dari zaman kerajaan Aceh Darussalam di mana hidangan ini disajikan sebagai hidangan istimewa pada acara-acara resmi.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/nasi-gurih.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram beras</li>
            <li>700 ml santan kental</li>
            <li>2 lembar daun pandan, simpulkan</li>
            <li>2 batang serai, memarkan</li>
            <li>2 lembar daun salam</li>
            <li>2 cm lengkuas, memarkan</li>
            <li>1 sendok teh garam</li>
            <li>1/2 sendok teh gula pasir</li>
            <li>Minyak goreng secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Cuci bersih beras dan tiriskan.</h3>
            <li>Panaskan minyak goreng dalam panci, tumis daun pandan, daun salam, serai, dan lengkuas hingga harum.</li>
            <li>Tambahkan beras dan aduk hingga tercampur rata dengan bumbu.</li>
            <li>Tuangkan santan dan tambahkan garam serta gula pasir. Aduk rata.</li>
            <li>Masak nasi gurih dengan api kecil dan biarkan sampai matang dan empuk.</li>
        <h3>Setelah matang, biarkan nasi sedikit dingin dan sajikan.</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Nasi gurih memiliki cita rasa yang lezat dan kaya akan rempah-rempah, terutama dari penggunaan santan dan daun pandan yang memberikan aroma khas pada nasi. Hidangan ini biasanya disajikan pada acara-acara pernikahan, syukuran, dan acara-acara istimewa lainnya di Aceh. Meskipun sejarah pastinya tidak diketahui, tetapi nasi gurih khas Aceh tetap populer hingga saat ini dan menjadi salah satu hidangan yang wajib dicoba ketika berkunjung ke Aceh.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasigurih;