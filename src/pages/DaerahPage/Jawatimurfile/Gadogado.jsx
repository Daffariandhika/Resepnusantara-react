import React from 'react';

function Gadogado() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gado-gado</h2>

      <div className="recipe-description">
        <p>
        Gado-gado adalah makanan khas Jawa Timur berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/gadogado.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>350
g kentang, rebus, goreng, potong-potong</li>
            <li>350
g tahu putih, potong kotak 3 cm</li>
            <li>350
g tempe, potong kotak 3 cm</li>
            <li>7
lembar daun selada, sobek-sobek</li>
            <li>2
buah ketimun, iris tipis</li>
            <li>100
g taoge, rebus</li>
            <li>200
g kol, iris kasar, rebus
minyak, untuk menggoreng dan menumis</li>
            <li>BAHAN MARINASI TAHU DAN TEMPE</li>
            <li>3
siung bawang putih, haluskan</li>
            <li>1
sdt ketumbar bubuk dan garam</li>
            <li>1
sdt garam</li>
            <li>200
ml air</li>
            <li>Bahan Saus:</li>
            <li>200
g kacang tanah kulit, goreng, haluskan</li>
            <li>3
lembar daun jeruk, buang tulangnya</li>
            <li>2
sdm
Bango Kecap Manis</li>
            <li>1
sdt garam</li>
            <li>3
sdt gula merah</li>
            <li>300
ml santan encer</li>
            <li>300
ml air</li>
            <li>1
sdt asam jawa, larutkan dengan 2 sdm air</li>
            <li>Bumbu halus</li>
            <li>5
buah cabai merah besar, buang biji</li>
            <li>3
buah cabai merah keriting</li>
            <li>5
cm kencur</li>
            <li>4
siung bawang putih</li>
            <li>½
sdt terasi goreng</li>
            <li>Bahan pelengkap</li>
            <li>6
butir telur rebus, potong-potong</li>
            <li>2
buah tomat, iris-iris</li>
            <li>3
sdm bawang merah goreng</li>
        <li>Kerupuk dan emping</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Aduk rata tempe dan tahu bersama bumbu perendam. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan minyak, goreng tahu dan tempe hingga garing dan matang. Angkat, tiriskan, sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Bumbu kacang: Panaskan 3 sdm minyak, tumis bumbu halus, dan daun jeruk hingga harum. Masukkan kacang tanah dan Bango Kecap Manis, aduk rata. Tambahkan sisa bahan, aduk. Masak hingga matang, angkat, biarkan hingga tidak panas.</li>
        <h3>Langkah 4</h3>
            <li>Tata kentang, tahu, tempe, daun selada, ketimun, taoge, dan kol di piring saji. Tuang bumbu kacang dan taburi bawang merah goreng. Sajikan dengan pelengkap lainnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gadogado;