import React from 'react';

function Serapahdaging() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Serapah Daging</h2>

      <div className="recipe-description">
        <p>
        Serapah adalah sejenis lauk setengah basah yang terbuat dari daging yang dibumbui dengan aneka rempah, santan, dan tepung beras sebagai pengental  Umumnya masyarakat Bali membuat serapah dengan menggunakan daging babi. Namun kamu dapat menggantinya dengan sapi yang halal. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/serapahdaging.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging sapi</li>
            <li>2 sdm tepung beras</li>
            <li>2 lembar daun salam</li>
            <li>1 sdm gula merah</li>
            <li>5 sdm minyak goreng</li>
            <li>500 ml santan</li>
            <li>1 lt air Bumbu halus</li>
            <li>3 buah bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>3 cm kunyit</li>
            <li>5 buah cabai merah</li>
            <li>2 cm lengkuas</li>
            <li>2 cm jahe</li>
            <li>1 sdt terasi</li>
            <li>1 cm kencur</li>
            <li>1/2 biji pala</li>
            <li>1/2 sdt merica bubuk</li>
            <li>Garam secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging dengan air hingga empuk, lalu potong tipis melebar. Sambil menunggu rebusan, blender atau haluskan dulu semua bumbunya.  </li>
        <h3>Langkah 2</h3>
            <li>. Panaskan sedikit minyak sayur, tumis bumbu halus beserta daun salam hingga harum. Masukkan daging dan gula merah, aduk-aduk. </li>
        <h3>Langkah 3</h3>
            <li>Tuang santan, kecilkan apinya, lalu aduk terus hingga menyusut. Masukkan tepung beras yang sudah dilarutkan, aduk hingga mengental.  Masak sebentar, angkat dan sajikan selagi hangat. </li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sebagai salah satu masakan tradisional, masakan khas Bali memang memiliki rasa yang khas, lezat dan unik mewakili tempat asalnya. Berbagai bahan masakan diolah dengan rempah untuk menghasilkan sajian yang lekat di lidah.
        Salah satu yang tak kalah diminati oleh pecinta kuliner adalah Masakan Serapah Daging Khas Bali ini. Masakan yang satu ini menggunakan bahan dasar daging babi dengan beberapa bahan lain seperti gula tepung beras dan juga santan.
        Bumbu-bumbu yang digunakan masih menggunakan bahan rempah ciri khas nusantara yaitu seperti misalnya bawang, cabe, kunjit, jahe dan lain sebagainya. Untuk memasak sajian ini tidak sulit karena sebenarnya sudah banyak panduan memasak yang dibahas melalui Resep Serapah Daging tersebut.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Serapahdaging;