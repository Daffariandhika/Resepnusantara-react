import React from 'react';

function Baksomalang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bakso Malang</h2>

      <div className="recipe-description">
        <p>
         Bakso Malang sudah menjadi makanan umum bagi sebagian orang karena mudahnya menemui hidangan yang satu ini. dengan penyajian yang sederhana dan rasa yang tak mengecewakan memang mudah bagi hidangan satu ini untuk mendapatkan hati penikmatnya.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawatimur/baksomalang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>12
buah bakso sapi</li>
            <li>12
lembar kulit pangsit</li>
            <li>3
buah tahu putih, belah 2 diagonal</li>
            <li>150
g mi telur kering, rebus, tiriskan</li>
            <li>300
g sawi hijau, potong 3 cm, blansir
minyak, untuk menggoreng</li>
            <li>KUAH:</li>
            <li>3
L air, untuk merebus</li>
            <li>500
g tulang sapi</li>
            <li>½
sdm garam</li>
            <li>½
sdm
Royco Kaldu Sapi</li>
            <li>1
sdt merica putih bubuk</li>
            <li>4
sdm bawang putih goreng</li>
            <li>ADONAN DAGING:</li>
            <li>400
g daging giling tanpa lemak</li>
            <li>80
g tepung sagu</li>
            <li>2
putih telur</li>
            <li>100
g es batu</li>
            <li>1
sdt bawang putih bubuk</li>
            <li>½
sdt garam</li>
            <li>½
sdt
Royco Kaldu Sapi</li>
            <li>¼
sdt merica putih bubuk</li>
            <li>½
sdt baking powder</li>
            <li>SAMBAL</li>
            <li>60
g cabai rawit merah, rebus</li>
            <li>6
sdm
Jawara Saus Sambal Extra Hot</li>
            <li>PELENGKAP:</li>
            <li>6
sdm
Jawara Saus Sambal Extra Hot</li>
            <li>bawang merah goreng
Bango Kecap Manis</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kaldu: Didihkan 1 L air, masukkan tulang sapi. Rebus selama 20 menit. Angkat. Buang airnya. Rebus tulang sapi dengan sisa air hingga mendidih. Masak di atas api kecil hingga meresap selama 2-3 jam. Masukkan semua sisa bahan dan Royco Kaldu Sapi. Angkat dan sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Adonan daging: Masukkan semua bahan dan Royco Kaldu Sapi kecuali baking powder ke dalam chopper atau food processor. Keluarkan adonan, bagi menjadi 2 bagian.</li>
        <h3>Langkah 3</h3>
            <li>Bakso goreng: Aduk rata adonan bersama baking powder. Bulatkan menggunakan bantuan 2 sendok makan. Goreng di atas api sedang hingga matang. Angkat dan tiriskan. Sisihkan.</li>
        <h3>Langkah 4</h3>
            <li>Pangsit kukus atau siomay: Siapkan sisa adonan pangsit isi. Ambil selembar kulit pangsit, beri ½ sdm adonan pangsit. Lipat keliling atau membentuk seperti siomay. Ulangi proses serupa pada sisa bahan. Kukus dalam dandang panas bersama tahu putih hingga siomay matang. Angkat. Sisihkan.</li>
        <h3>Langkah 5</h3>   
            <li>Sambal pedas: Ulek cabai rawit rebus. Aduk rata bersama Jawara Saus Sambal Extra Hot.</li>
        <h3>Langkah 6</h3>   
            <li>Panaskan kembali kaldu bersama bakso sapi di atas api kecil. Sisihkan.</li>
        <h3>Langkah 7</h3>   
            <li>Siapkan mangkuk saji. Isi dengan mi, sawi hijau, siomay, seledri, dan bawang goreng. Tuang kuah bersama bakso sapi. Tambahkan bakso goreng dan pangsit goreng. Sajikan bersama sambal dan Bango Kecap Manis.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Baksomalang;