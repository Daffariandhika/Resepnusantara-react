import React from 'react';

function Sototangkar() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Tangkar</h2>

      <div className="recipe-description">
        <p>
        Soto ini berarti iga yang dimasak dengan rempah-rempah, biasanya disajikan dengan emping dan sambal.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/soto_tangkar.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging sapi, potong-potong</li>
            <li>1 liter santan kental</li>
            <li>Bumbu utuh:</li>
            <li>3 batang serai, memarkan</li>
            <li>2 lembar daun salam</li>
            <li>5 lembar daun jeruk, buang tulangnya</li>
            <li>2 batang kayu manis</li>
            <li>2 sdt merica bubuk</li>
            <li>Bumbu halus:</li>
            <li>12 siung bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>4 buah cabai merah kriting</li>
            <li>2 cm jahe</li>
            <li>2 cm lengkuas</li>
            <li>2 cm kunyit, bakar</li>
            <li>2 sdt ketumbar</li>
            <li>5 butir kemiri, sangrai</li>
            <li>Bahan pelengkap:</li>
            <li>kecap manis, emping goreng, tomat, jeruk limau, daun bawang, bawang goreng dan sambal rawit</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Masak daging sapi dengan panci presto selama 15 menit, biarkan uapnya hilang, ambil air kaldunya. Jika tidak memiliki panci presto, bisa memasak dengan panci biasa namun agak lama.</li>
        <h3>Langkah 2</h3>
            <li>2.	Tumis bumbu halus hingga harum, masukkan semua bumbu utuh, tumis hingga bumbu matang.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tuang bumbu tumis ke dalam panci yang sudah digunakan untuk memasak daging. Aduk rata dengan air kaldu. Tuang santan, beri garam, gula dan kaldu bubuk secukupnya. Masak hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>4.	Jika rasanya sudah pas dan kuah santan matang, angkat.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Sajikan soto tangkar di mangkuk dengan kuah santan kental dan berbagai bahan pelengkap. Soto tangkar siap dinikmati dengan nasi.</li>
        </ul>
      </div>

      

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sototangkar;