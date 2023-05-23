import React from 'react';

function Mieaceh() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Mie Aceh</h2>

      <div className="recipe-description">
        <p>
         Mie Aceh merupakan masakan Khas aceh yang berbahan dasar mie tebal dipadukan rempah-rempah khas Aceh yang kuat dan dipengaruhi bumbu-bumbu India arab. dapat disajikan berkuah ataupun kering. namun keduanya adalah suatu kesepurnaan rasa yang tak dapat dibandingkan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/mieaceh.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gram mie telur (dapat diganti dengan mie basah biasa)</li>
            <li>250 gram daging sapi, iris tipis</li>
            <li>500 ml air kaldu sapi</li>
            <li>4 butir bawang merah, iris tipis</li>
            <li>3 siung bawang putih, cincang halus</li>
            <li>3 buah cabai merah besar, iris serong</li>
            <li>2 buah cabai rawit merah, iris halus</li>
            <li>1 buah tomat merah, iris tipis</li>
            <li>1 batang serai, memarkan</li>
            <li>2 lembar daun salam</li>
            <li>2 cm lengkuas, memarkan</li>
            <li>1/2 sendok teh ketumbar bubuk</li>
            <li>1/2 sendok teh jintan bubuk</li>
            <li>1/2 sendok teh lada bubuk</li>
            <li>1/2 sendok teh garam</li>
            <li>Minyak goreng secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Rebus mie dalam air mendidih hingga matang. Tiriskan dan sisihkan.</h3>
            <li>Tumis bawang merah, bawang putih, cabai merah besar, cabai rawit, serai, daun salam, dan lengkuas hingga harum.</li>
            <li>Tambahkan irisan daging sapi dan aduk hingga berubah warna.</li>
            <li>Tuang air kaldu sapi, tomat, ketumbar bubuk, jintan bubuk, lada bubuk, dan garam. Masak hingga daging sapi empuk.</li>
            <li>Ambil mangkuk saji, letakkan mie di dalamnya, dan tuang kuah beserta irisan daging sapi di atas mie</li>
        <h3>Sajikan Mie Aceh dengan acar dan kerupuk.</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Mie Aceh adalah hidangan khas dari Aceh yang telah ada sejak zaman dahulu kala. Menurut sejarah, hidangan ini pertama kali diperkenalkan oleh pedagang Tiongkok yang datang ke Aceh pada abad ke-17. Mie Aceh awalnya hanya dijual di restoran-restoran Tionghoa, tetapi seiring berjalannya waktu, hidangan ini semakin populer dan diadopsi oleh masyarakat Aceh. Mie Aceh memiliki rasa yang khas dan berbeda dengan mie-mie lainnya di Indonesia. Kuah mie Aceh terbuat dari rempah-rempah seperti cabai, jintan, dan lengkuas, yang memberikan rasa pedas dan aroma yang kuat. Beberapa variasi mie Aceh juga disajikan dengan irisan daging sapi, kambing, atau seafood yang membuat hidangan ini semakin lezat dan mengenyangkan.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Mieaceh;