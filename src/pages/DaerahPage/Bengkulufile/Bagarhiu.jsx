import React from 'react';

function Bagarhiu() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bagar Hiu</h2>

      <div className="recipe-description">
        <p>
        Bagar hiu juga dimasak dengan aneka macam rempah seperti laos, kunyit, kemiri, serai, kapulaga, ketumbar, kayu manis, jahe, asam jawa, cengkeh, pala, bawang merah, dan bawang putih.
Diperlukan keahlian dan trik khusus untuk bisa mengolah ikan hiu jadi bagar hiu yang enak. Salah satu alasannya, ikan hiu memiliki bau amis yang cukup menyengat. Maka dari itu, keahlian memasak bagar hiu biasanya dipelajari secara turun temurun, dari generasi ke generasi. Untuk menghilangkan bau amis, ikan hiu yang sudah dibersihkan dan dipotong-potong kemudian diberi air perasan jeruk nipis.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/bagarhiu.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg ikan hiu</li>
            <li>600 ml air</li>
            <li>1 ibu jari asam jawa di kasih sedikit air/3 potong </li>
            <li>asam potong</li>
            <li>3-4 sdm cabe merah halus</li>
            <li>3-4 sdm kelapa goreng</li>
            <li>Garam</li>
            <li>penyedap rasa</li>
            <li>Minyak</li>
            <li>jeruk nipis</li>
            <li>BUMBU HALUS:</li>
            <li>2 1/2 sdm merica</li>
            <li>1 buah bunga lawang</li>
            <li>3 buah kapulaga</li>
            <li>3 buah cengkeh</li>
            <li>1 buah cabe jawa</li>
            <li>1/6 pala</li>
            <li>1 jari lengkuas</li>
            <li>1/2 jahe dan kunyit</li>
            <li>2 buah serai</li>
            <li>3 lembar daun jeruk dan salam</li>
            <li>10 buah bawang merah</li>
            <li>8 buah bawang putih</li>

          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Bersih kan ikan hiu, buang kulitnya lalu beri perasaan jeruk nipis</li>
        <h3>Langkah 2</h3>
            <li>Masukan bumbu halus, cabe, kelapa goreng kedalam ikan aduk rata diamkan kurleb 1/4-1/2 jam biar bumbu resap</li>
        <h3>Langkah 3</h3>
            <li>Panaskan sedikit minyak masukan ikan yg telah di endap tadi aduk rata lalu masukan air asam dan air masak sampai mendidih lalu masuk garam secukup nya, penyedap rasa bila suka</li>
        <h3>Langkah 4</h3>
            <li>Masak sampai air sedikit susut tes rasa bila gulai sudah masak angkat masukan ke wadah taburkan bawang goreng</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Bagar Hiu merupakan salah satu makanan khas dari Provinsi Bengkulu yang merupakan menu favorit presiden pertama Republik Indonesia (RI) Soekarno ketika masa pengasingannya di Bengkulu. Pada masa kolonial Belanda, diketahui Soekarno pernah diasingkan ke Bengkulu pada 1938 hingga 1942. Di Bengkulu, Soekarno mempunyai makanan favorit khas daerah tersebut salah satunya adalah Bagar Hiu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bagarhiu;