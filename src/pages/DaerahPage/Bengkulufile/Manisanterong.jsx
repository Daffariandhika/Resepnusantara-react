import React from 'react';

function Manisanterong() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Manisan Terong</h2>

      <div className="recipe-description">
        <p>
        Manisan terong merupakan makanan khas Bengkulu yang sulit dijumpai di daerah lain. Manisan terong khas Bengkulu ini sangat terkenal akan keunikannya. Hal ini dikarenakan, terong yang termasuk jenis sayuran sangat jarang dijadikan sebagai manisan karena biasanya olahan manisan dibuat dari bahan dasar buah-buahan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/manisanterong.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gram terong  ungu</li>
            <li>15 Sdm gula pasir</li>
            <li>1 cangkir air bersih</li>
            <li>1/2 sdt asam Citroen (asam sitrat) / seujung kuku/ sedikit saja</li>
            <li>1/2 sdt garam(seujung kuku/sedikit saja)</li>
            <li>5 tetes pewarna merah</li>
            <li>1/4 sdt kapur sirih</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Tusuk tusuk terong dengan garpu. Lalu potong potong</li>
        <h3>Langkah 2</h3>
            <li>Siapkan air secukupnya untuk merendam terong. Dan larutkan 1/4 sdm kapur sirih kedalam air tersebut aduk hingga kapur sirih larut & tercampur. Kemudian rendam terong selama seharian. Saya mulai merendam jam 10.30 siang baru saya proses jam 8 malam. Proses perendaman terong berfungsi agar nanti pada saat proses pemasakan terong tidak hancur, dan terong akan bertekstur lembut kenyal.</li>
        <h3>Langkah 3</h3>
            <li>Setelah proses perendaman selesai kita cuci terong bersih bersih hingga air cucian terong menjadi jernih.</li>
        <h3>Langkah 4</h3>
            <li>Selanjutnya Proses Pembuatan Karamel, kita panaskan wajan / kuali masukan gula pasir/ putih masak dg api sedang tunggu hingga gula larut jadi karamel.</li>
        <h3>Langkah 5</h3>   
            <li>Selanjutnya jika gula benar benar sudah jadi karamel, tambahkan air, biarkan sejenak. Jangan khawatir karamel akan sedikit kaget dia akan mengeras terkena air. Lalu kita kembali aduk perlahan sampai karamel mencair kembali.</li>
        <h3>Langkah 6</h3>   
            <li>Setelah karamel mencair kembali kita tambahkan garam, asam Citroen, & pewarna.</li>
        <h3>Langkah 7</h3>   
            <li>Aduk jika garamnya sudah larut baru kita masukan juga terong. Aduk hingga tercampur rata, tunggu hingga air nya mengering.</li>
        <h3>Langkah 8</h3>   
            <li>Jika sudah mengering, kita angkat.</li>
        <h3>Langkah 9</h3>   
            <li>Jika ingin di makan pada saat proses ini udh bisa. Tapi ini blm jadi, harus di jemur selama tiga hari. Tapi saya males menjemur karena masaknya hanya 500 gram. Blm lagi sekarang musim hujan. Jadi saya keringkan dengan proses oven.</li>
        <h3>Langkah 10</h3>   
            <li>Siapkan oven, panaskan oven. Susun manisan terong ke dalam loyang</li>
        <h3>Langkah 11</h3>   
            <li>Jika oven sudah panas masukan terong ke dalam oven. Saya pakai api atas bawah, dg suhu 150' selama 45 menit.</li>
        <h3>Langkah 12</h3>   
            <li>Tapi akan lebih enak rasanya jika mengikuti proses penjemuran dari sinar matahari. Dan akan awet hingga 3 s.d 6 bulan. Jika proses penjemurannya kering & merata.</li>
        <h3>Langkah 13</h3>   
            <li>Semalam berhubung manisan terong nya masih sisa, untuk menyempurnakan saya jemur lagi. Selagi cuaca cerah, sekalian nanti biar temen temen bisa lihat hasilnya bagaimna kalau mengikuti proses yang benar.  </li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Tidak diketahui secara pasti bagaimana terciptanya manisan terong ini. namun, manisan buah adalah buah yang diawetkan dengan gula. Tujuan pemberian gula dengan kadar yang tinggi pada manisan buah, selain untuk memberikan rasa manis, juga untuk mencegah tumbuhnya mikroorganisme (jamur, kapang). Dalam proses pembuatan manisan buah ini juga digunakan air garam dan air kapur untuk mempertahankan bentuk (tekstur) serta menghilangkan rasa gatal atau getir pada buah
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Manisanterong;