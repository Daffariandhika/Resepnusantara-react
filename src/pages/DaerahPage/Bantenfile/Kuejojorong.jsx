import React from 'react';

function Kuejojorong() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kue Jojorong</h2>

      <div className="recipe-description">
        <p>
         Kue jojorong terbuat dari tepung kanji, tepung beras dan gula merah. terlihat sederhana, namun rasa yang ditawarkan oleh kue jojorong ini nyatanya tidak biasa-biada saja.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/kuejojorong.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr gula merah (sisir halus)</li>
            <li>Secukupnya daun pisang (spy mudah ditekuk2, panaskan sebentar di panci untuk mengukus)</li>
            <li>1000 ml santan dgn kekentalan sedang</li>
            <li>125 gr tepung beras</li>
            <li>1 sdm tepung tapioka/sagu</li>
            <li>1 sdm makan gula pasir </li>
            <li>1/2 sdt garam</li>
            <li>1 sdm tepung tapioka/sagu</li>
            <li>300 ml santan kental</li>
            <li>1 sdm tepung tapioka/sagu</li>
            <li>Sejumput garam</li>
            <li>2 lembar daun pandan (simpulkan)</li>
            <li>1-2 tetes pewarna makanan merah</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan daun pisang. Cuci bersih lalu panaskan sebentar di panci pengukus. Ambil kira2 10 cm daun pisang sebanyak dua lembar. Tekuk ke dalam,lalu kedua sisi ditekuk kanan kiri. Jepit dg tusuk gigi/ lidi/ stepler kalau mau praktis</li>
        <h3>Langkah 2</h3>
            <li>Rapikan dg menggunting bagian yg gak cantik sisihkan dulu.</li>
        <h3>Langkah 3</h3>
            <li>Rebus santan dg daun pandan dan garam hingga mendidih supaya ga cepet basi. Lalu masukkan semua bahan B. Masak hingga meletup2 n menjadi spt adonan bubur sumsum. Angkat, sisihkan dulu</li>
        <h3>Langkah 4</h3>
            <li>Masukkan semua bahan C dlm panci. Masak hingga kental. Sisihkan</li>
        <h3>Langkah 5</h3>   
            <li>Penyelesaian : ambil kira2 1 sdm Gula merah yg sdh diiris tadi dlm takir, kemudian beri adonan bubur, di atasnya dituang adonan C. Lakukan hingga habis. Panaskan kukusan dan jgn lupa tutup panci dibungkus kain bersih. Kukus sekitar 15 menitan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        udah pernah mencoba kue jojorong? Ciri khas dari makanan khas Banten ini adalah teksturnya yang lembut dan lumer di mulut dengan rasa gurih dan manis. Kue satu ini banyak dijual di pasar tradisional dan sering dijadikan sebagai menu sarapan masyarakat Banten.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuejojorong;