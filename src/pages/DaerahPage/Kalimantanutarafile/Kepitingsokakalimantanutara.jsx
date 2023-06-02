import React from 'react';

function Kepitingsokakalimantanutara() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Kepiting Soka Khas Kalimantan Utara</h2>

      <div className="recipe-description">
        <p>
        Kepiting soka atau kepiting cangkang lunak adalah sebuah istilah kuliner untuk kepiting-kepiting yang baru melepas kulit lamanya dan masih lunak. Cangkang lunak diangkat dari air agar cangkang mereka tak mengeras
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanutara/kepitingsokakalimantanutara.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gram rajungan, cuci bersih dan potong menjadi 2 bagian</li>
            <li>75 gram tepung terigu</li>
            <li>2 sendok teh tepung maizena</li>
            <li>1 telur</li>
            <li>50 ml air</li>
            <li>3 siung bawang putih, cincang halus</li>
            <li>1 sendok teh merica bubuk</li>
            <li>Garam dan gula sesuai selera</li>
            <li>Jumlah minyak yang tepat</li>
            <li>Bahan saus asam manis:</li>
            <li>3 siung bawang putih, cincang</li>
            <li>1/2 bawang bombay, iris tipis</li>
            <li>5 sendok makan saus tomat</li>
            <li>1/4 sendok teh cuka masak</li>
            <li>1 batang daun bawang, potong memanjang</li>
            <li>2 sendok makan kacang polong</li>
            <li>1/4 wortel, kupas dan potong memanjang</li>
            <li>100 ml air</li>
            <li>2 sendok teh maizena, larutkan dengan air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campur tepung terigu, tepung maizena, bawang putih, merica bubuk, garam dan gula pasir, aduk rata. Kemudian tambahkan telur dan air ke dalam adonan, aduk rata.</li>
        <h3>Langkah 2</h3>
            <li>Tambahkan kepiting soka yang sudah dibersihkan ke dalam adonan. Menyisihkan.</li>
        <h3>Langkah 3 Membuat Saus Asam Manis</h3>
            <li>Panaskan minyak pada wajan, kemudian tumis bawang putih sekaligus bawang bombay sampai  harum. Tambahkan saus tomat, gula dan garam, aduk rata. Tuang air sambil diaduk dan masak hingga mendidih.</li>
        <h3>Langkah 4</h3>
            <li>Tambahkan juga bahan lain seperti kacang polong, wortel dan daun bawang. Masak hingga setengah matang. Kemudian tuangkan larutan tepung maizena, dan masak hingga mengental. Terakhir tambahkan cuka, aduk. Angkat dan sisihkan.</li>
        <h3>Langkah 5 Penyajian</h3>   
            <li>Kepiting soka goreng yang sudah diberi tepung, masak hingga kering dan matang</li>
        <h3>Langkah 6</h3>   
            <li>Setelah matang, segera angkat dan sajikan di piring saji dan tuangkan saus asam manis di atasnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kepitingsokakalimantanutara;