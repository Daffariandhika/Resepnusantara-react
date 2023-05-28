import React from 'react';

function Tempoyakikan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Tempoyak Ikan</h2>

      <div className="recipe-description">
        <p>
        Tempoyak adalah hasil fermentasi dari buah durian. Ya, Jambi memang salah satu daerah penghasil durian. Di Jambi, ikan patin diolah dengan tempoyak yang dicampur rempah-rempah Cita rasanya segar dan nikmat, perpaduan antara rasa pedas, manis dan asam yang menyatu.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/tempoyak_ikan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>4 ekor ikan patin kecil</li>
            <li>100 gr tempoyak</li>
            <li>air secukupnya</li>
            <li>Bumbu utuh:</li>
            <li>1 batang serai, memarkan</li>
            <li>1 cm lengkuas, memarkan</li>
            <li>2 lembar daun salam</li>
            <li>gula, garam dan penyedap</li>
            <li>Bumbu halus:</li>
            <li>2 cm kunyit</li>
            <li>3 siung bawang putih</li>
            <li>5 siung bawang merah</li>
            <li>5 buah cabai keriting</li>
            <li>5 buah cabai rawit (sesuai selera)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Bersihkan perut ikan, potong-potong menjadi 2-3 bagian tergantung ukuran.</li>
        <h3>Langkah 2</h3>
            <li>Tumis bumbu halus sampai harum. Masukkan serai, lengkuas dan daun salam. Tumis hingga bumbu matang.</li>
        <h3>Langkah 3</h3>
            <li>Tuang air secukupnya, besarkan api dan masak hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan tempoyak, aduk rata. Masukkan gula, garam dan penyedap secukupnya, jika sudah mendidih lagi, masukkan ikan patin. Masak hingga ikan matang. </li>
        <h3>Langkah 5</h3>   
            <li>Tes rasa, jika ikan sudah matang dan rasanya sedap, angkat.</li>
        <h3>Langkah 6</h3>   
            <li>Sajikan gulai ikan tempoyak dengan nasi hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Tempoyakikan;