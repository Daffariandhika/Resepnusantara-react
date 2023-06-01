import React from 'react';

function Rawon() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Rawon</h2>

      <div className="recipe-description">
        <p>
        Rawon adalah masakan Indonesia berasal dari Ponorogo yang berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek. Rawon, Menyebar keluar Ponorogo karena Ponorogo memiliki peran Penting dari masa ke masa, hingga dikenal sebagai masakan khas Jawa Timur, masyarakat Jawa Tengah sebelah timur.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/rawon.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500
g daging sandung lamur sapi</li>
            <li>1
dengkul sapi, belah dua</li>
            <li>3
lembar daun jeruk purut segar</li>
            <li>1
batang serai, memarkan</li>
            <li>1
sdm air asam jawa</li>
            <li>2
batang daun bawang, iris seukuran 1 cm</li>
            <li>1
sdm
Royco Kaldu Sapi</li>
            <li>1
sdm garam</li>
            <li>3
liter air</li>
            <li>5
sdm minyak goreng</li>
            <li>Bumbu halus</li>
            <li>4
siung bawang putih</li>
            <li>8
butir bawang merah</li>
            <li>5
buah keluak, geprek dan rendam isinya dengan air panas</li>
            <li>4
butir kemiri, sangrai</li>
            <li>1
cm kunyit, bakar</li>
            <li>Pelengkap</li>
            <li>Taoge pendek</li>
            <li>Telur asin</li>
            <li>Sambal rawit</li>
            <li>Jeruk nipis</li>
            <li>Emping</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging dan dengkul sapi hingga setengah lunak. Potong daging sesuai selera. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Masukkan Royco Kaldu Sapi dan garam ke dalam air rebusan daging.</li>
        <h3>Langkah 3</h3>
            <li>Tumis bumbu halus, lengkuas, daun jeruk, dan serai hingga harum dan matang.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan potongan daging ke dalam tumisan, masak hingga bumbu meresap.</li>
        <h3>Langkah 5</h3>   
            <li>Masukkan tumisan daging ke dalam kuah kaldu. Masak dengan api kecil hingga daging empuk.</li>
        <h3>Langkah 6</h3>   
            <li>Sajikan hangat beserta pelengkap.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Rawon;