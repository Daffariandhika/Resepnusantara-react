import React from 'react';

function Pecakbandeng() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Pecak Bandeng</h2>

      <div className="recipe-description">
        <p>
        Pecak bandeng adalah salah satu makanan khas Serang, ibu kota Banten, yang bisa dengan mudah  temui di Jakarta. Nah, makanan satu ini umumnya dibuat untuk makanan para petani saat berada di sawah untuk makan siang. Hanya 2 bahan utamanya, yaitu pecak dan ikan bandeng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/pecakbandeng.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor bandeng ukuran besar, cuci, bersihkan</li>
            <li>Kunyit bubuk </li>
            <li>Merica bubuk </li>
            <li>Garam</li>
            <li>2 siung bawang merah, iris</li>
            <li>2 sdm olive oil</li>
            <li>Sambal pecak (ulek kasar) :</li>
            <li>10 buah cabai rawit merah</li>
            <li>15 buah cabai rawit hijau</li>
            <li>2 buah cabai merah keriting</li>
            <li>4 siung bawang merah</li>
            <li>4 buah tomat hijau, potong kotak kecil</li>
            <li>1 buah tomat merah, potong kotak kecil</li>
            <li>1 buah terasi (bakar)</li>
            <li>1 cm jahe</li>
            <li>Kencur</li>
            <li>Garam</li>
            <li>Gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bandeng, bersihkan sisik dan bagian dalamnya, lalu belah dan dibuat lebar, buang kepalanya dan cabut semua durinya.</li>
        <h3>Langkah 2</h3>
            <li>Lumuri bandeng dengan air jeruk nipis+garam+merica bubuk+kunyit bubuk secukupnya, masukkan ke dlm kulkas dan diamkan 1-2 jam agar bumbu meresap.</li>
        <h3>Langkah 3</h3>
            <li>Bakar bandeng dengan pemanggang khusus atau diatas teflon anti lengket, sambil terus dibolak balik agar tidak gosong. Setelah matang dan berwarna kecoklatan, angkat dan letakkan diatas piring saji.</li>
        <h3>Langkah 4</h3>
            <li>Cara membuat sambal pecak: ulek cabai rawit, cabai keriting, bawang merah, jahe, kencur, terasi bakar, garam, gula. Tambahkan tomat hijau, tomat merah, jeruk limau, ulek kasar aja ya jangan halus2. Aduk rata dan koreksi rasa.</li>
        <h3>Langkah 5</h3>   
            <li>Panaskan minyak, tumis irisan bawang merah hingga wangi dan berubah warna, lalu tuangkan tumisan bawang merah+minyak panasnya ke dlm sambal pecak, aduk rata.</li>
        <h3>Langkah 6</h3>   
            <li>Siram sambal pecak keatas bandeng yg sudah dibakar, lalu tekan2 agar bumbunya meresap.</li>
        <h3>Langkah 7</h3>   
            <li>Pecak bandeng siap disajikan dengan nasi hangat, sayur asem, dan tempe goreng</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Pecak bandeng sendiri dalam sejarahnya adalah makanan yang biasa disantap oleh para sultan di lingkungan kesultanan Banten. Karena cita rasanya yang memang menggugah selera kini pecak bandeng menjadi salah satu makanan yang paling diminati oleh para penikmat kuliner, dan sangat mudah ditemukan di rumah makan-makan di seputar kota Serang.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Pecakbandeng;