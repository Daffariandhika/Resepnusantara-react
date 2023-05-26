import React from 'react';

function Ayamiloni() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ayam Iloni</h2>

      <div className="recipe-description">
        <p>
        Keunikan ayam bakar iloni terletak pada cara mengolahnya. Jika ayam bakar pada umumnya dipanggang setelah dibersihkan, ayam iloni harus ditambahkan bumbu khas terlebih dahulu sehingga meresap ke dalam daging dan dicampur dengan santan. Setelah bumbu meresap, barulah ayam dibakar hingga siap untuk disantap.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/ayam_iloni.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor ayam potong 6 bagian</li>
            <li>air jeruk</li>
            <li>garam</li>
            <li>santan kara</li>
            <li>minyak goreng</li>
            <li>cabe rawit</li>
            <li>5 butir Bawang merah</li>
            <li>7 butir Bawang putih</li>
            <li>6 butir Kemiri</li>
            <li>Jahe</li>
            <li>Kunyit</li>
            <li>BUMBU HALUS:</li>
            <li>Cabe rawit (sesuai selera)</li>
            <li>5 butir Bawang merah</li>
            <li>4 butir Bawang putih</li>
            <li>6 butir Kemiri</li>
            <li>Jahe</li>
            <li>Kunyit</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Potong ayam menjadi 6 bagian, lalu masukan air perasan jeruk,3 butir bawang putih yg sdh d haluskan,sedikit garam lalu ungkep selama 1/2 jam</li>
        <h3>Langkah 2</h3>
            <li>Setelah itu Bakar Ayam sesuai dengan keempukan yg diinginkan. sambil menunggu ayam yg d bakar kita bisa membuat baluran saos iloni</li>
        <h3>Langkah 3</h3>
            <li>Panaskan minyak goreng, masukan bumbu yg telah d haluskan,masukan santan kara,tambahkan air sedikit,koreksi rasa. masak santan sampai kental dan sampai air menyusut. Balurkan di atas ayam yg telah d bakar tadi</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Ayam iloni adalah salah satu makanan khas dari Gorontalo, Sulawesi. Dalam kehidupan masyarakat Gorontalo, Ayam Iloni menjadi salah satu menu utama Masakan Gorontalo yang umum disajikan.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ayamiloni;