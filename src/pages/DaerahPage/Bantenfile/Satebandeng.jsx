import React from 'react';

function Satebandeng() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Bandeng</h2>

      <div className="recipe-description">
        <p>
        Sate Bandeng merupakan salah satu kuliner khas Banten. Makanan yang merupakan perpaduan daging ikan bandeng, santan, dan rempah-rempah ini, diketahui sudah ada sejak era sultan pertama Banten, Sultan Maulana Hasanuddin, pada 1552-1570.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/satebandeng.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor ikan-bandeng ukuran sedang</li>
            <li>2 sdm minyak</li>
            <li>100 g kelapa parut kasar, sangrai</li>
            <li>1½ sdt garam</li>
            <li>½ sdt gula pasir</li>
            <li>½ sdt asam jawa, larutkan dengan ½ sdm air panas</li>
            <li>2 butir telur ayam</li>
            <li>100 ml santan cair</li>
            <li>daun pisang, untuk pembungkus</li>
            <li>bambu, untuk penjepit</li>
            <li>Bumbu, Haluskan:</li>
            <li>12 butir bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>3 buah cabai merah besar</li>
            <li>1½ sdt ketumbar</li>
            <li>¼ sdt jinten</li>
            <li>2 cm jahe</li>
            <li>1 cm lengkuas</li>
            <li>3 cm kunyit, bakar</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Keruk daging ikan bandeng, simpan kulitnya untuk dipakai lagi.</li>
        <h3>Langkah 2</h3>
            <li>Sangrai daging ikan hingga kering. Angkat. Pisahkan durinya, bila ada.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan minyak, tumis bumbu halus hingga harum.</li>
        <h3>Langkah 4</h3>
            <li>Tambahkan daging bandeng, kelapa sangrai, garam, gula pasir, dan air asam, aduk hingga rata. Angkat, pindahkan ke dalam mangkuk dan biarkan hingga dingin.</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan telur dan santan, aduk hingga rata.</li>
        <h3>Langkah 6</h3>   
            <li>Ambil ⅓ bahan adonan, sisihkan sisa adonan. Masukkan ⅓ bahan ke dalam kulit bandeng.</li>
        <h3>Langkah 7</h3>   
            <li>Bentuk kembali hingga menyerupai ikan utuh. Jepit ikan dengan bilah bambu, sisihkan.</li>
        <h3>Langkah 8</h3>   
            <li>Bentangkan dua lembar daun pisang, taruh ⅓ bagian adonan pada daun pisang, ratakan. </li>
        <h3>Langkah 9</h3>   
            <li>Taruh bandeng di atasnya lalu tutup permukaan bandeng dengan sisa adonan.</li>
        <h3>Langkah 10</h3>   
            <li>Bungkus bandeng dan sematkan tusuk gigi pada ujung-ujungnya.</li>
        <h3>Langkah 11</h3>   
            <li>Bakar bandeng di atas bara api hingga matang. Angkat, sajikan segera.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Menurut cerita, makanan khas ini bermula ketika Sang Sultan ingin memakan ikan bandeng. Koki kerajaan kebingungan lantaran ikan ini memiliki banyak duri halus dan berbahaya jika diolah secara langsung seperti dibakar atau dikukus untuk Sultan maupun petinggi-petinggi kesultanan. Akhirnya koki tersebut berinisiatif untuk menghancurkan daging dari ikan dan menarik tulang dan duri-durinya terlebih dahulu, lalu daging ikan bandeng dihaluskan dan disaring untuk memisahkan tulang dan duri yang keras. Daging yang sudah halus inilah yang campur dengan rempah sebagai adonan sebelum dimasukan ke bambu dan dibakar hingga matang.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satebandeng;