import React from 'react';

function Pengkang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Pengkang</h2>

      <div className="recipe-description">
        <p>
        Pengkang adalah salah satu makan khas dari Kalimantan Barat. Pengkang banyak ditemukan di daerah Pontianak. Makanan ini banyak diburu oleh wisatawan kuliner yang berkunjung ke Pontianak.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanbarat/pengkang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg beras ketan</li>
            <li>600 ml santan kental sedang</li>
            <li>1 sdt garam</li>
            <li>Isian:</li>
            <li>300 gr kelapa parut</li>
            <li>5 sdm ebi</li>
            <li>6 siung bawang putih</li>
            <li>12 siung bawang merah</li>
            <li>2 sdt garam</li>
            <li>1 sdt gula pasir</li>
            <li>1/2 sdt kaldu bubuk</li>
            <li>daun pisang secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih dan rendam beras ketan selama 2 jam.</li>
        <h3>Langkah 2</h3>
            <li>Tiriskan beras ketan, kukus selama 20-25 menit atau setengah matang.</li>
        <h3>Langkah 3</h3>
            <li>Sangrai atau goreng ebi, ulek halus.</li>
        <h3>Langkah 4</h3>
            <li>Sangrai kelapa parut hingga kecokelatan, ulek tak perlu terlalu halus.</li>
        <h3>Langkah 5</h3>   
            <li>Haluskan bawang merah dan bawang putih, tumis hingga harum. Masukkan ebi dan kelapa ulek, tumis hingga matang. Beri garam, gula, dan kaldu bubuk, aduk rata. </li>
        <h3>Langkah 6</h3>   
            <li>Tuang santan, masak hingga mulai mendidih. Masukkan ketan, aduk rata. Angkat dan kukus lagi selama 30-35 menit hingga matang. </li>
        <h3>Langkah 7</h3>   
            <li>Bersihkan daun pisang dengan kain lap, panaskan di atas api kompor cukup hingga layu.</li>
        <h3>Langkah 8</h3>   
            <li>Sobek daun secukupnya, bentuk kerucut. Lalu isi dengan ketan yang sudah matang, isian dan tutup lagi dengan ketan. Bungkus dan semat dengan tusuk gigi.</li>
        <h3>Langkah 9</h3>   
            <li>Siapkan panggangan atau bakaran, oles tipis dengan minyak. Panggang pengkang hingga bagian luarnya matang kering kecokelatan atau agak gosong. Angkat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Pengkang;