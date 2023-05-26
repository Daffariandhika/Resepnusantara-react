import React from 'react';

function Ilabulo() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ilabulo</h2>

      <div className="recipe-description">
        <p>
        Gorontalo memiliki banyak sekali kuliner khas yang ternyata unik dan enak, salah satunya adalah ilabulo. Sekilas mirip sekali dengan otak-otak tapi dibuatnya dari ati ampela ayam, bisa juga ditambahkan jeroan lain dan kulit ayamnya. Rasanya yang khas dengan asin gurih pedas tentu bikin nagih.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/ilabulo.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr ati ampela dan kulit ayam</li>
            <li>200 gr tepung sagu</li>
            <li>50 gr tepung terigu</li>
            <li>300 ml air</li>
            <li>65 ml santan kental</li>
            <li>Daun pisang secukupnya</li>
            <li>Minyak kelapa </li>
            <li>BUMBU HALUS:</li>
            <li>10 buah cabai rawit</li>
            <li>2 buah cabai merah</li>
            <li>3 siung bawang putih</li>
            <li>1/2 sdt merica</li>
            <li>1/2 sdt kaldu bubuk</li>
            <li>garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Rebus ati ampela dan kulit ayam hingga matang, tiriskan dan bilas bersih. Potong-potong kecil. </li>
        <h3>Langkah 2</h3>
            <li>2.	Panaskan minyak kelapa secukupnya, sekitar 3-4 sendok makan. Masukkan bumbu halus, tumis hingga matang. </li>
        <h3>Langkah 3</h3>
            <li>3.	Masukkan ati ampela kulit ayam, tumis sebentar. Matikan api.</li>
        <h3>Langkah 4</h3>
            <li>4.	Campurkan tepung dengan santan dan air, aduk rata. Masukkan ke dalam tumisan, masak aduk terus hingga mengental. Jika sudah tidak basah, ts rasa. Jika asin pedasnya sudah pas, angkat.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Bungkus dengan daun pisang mirip pepes. Kukus selama 20 menit. Angkat dan bakar sebentar hingga daun pembungkusnya kering dan harum.</li>
        </ul>
      </div>


      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ilabulo;