import React from 'react';

function Lontongorari() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Lontong Orari</h2>

      <div className="recipe-description">
        <p>
        Lontong khas Banjar di sini tergolong spesial dan terkenal sejak 1983. Tak jelas juga sejak kapan kuliner khas orang Banjar tersebut mulai ada, namun yang pasti, kuliner ini selalu ada tiap hari baik sebagai menu sarapan, makan siang atau makan malam orang Banjar. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanselatan/lontongorari.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Lontong Segitiga</li>
            <li>1 kg Beras (cuci bersih)</li>
            <li>1 lbr daun pandan</li>
            <li>Daun pisang (untuk membungkus)</li>
            <li>Lidi</li>
            <li>Bumbu masak habang :</li>
            <li>10 bh telur rebus</li>
            <li>1 kg ikan gabus/haruan (goreng sebentar)</li>
            <li>12 bh cabe merah besar (rebus bentar,haluskan)</li>
            <li>8 siung bawang merah</li>
            <li>8 siung bawang putih</li>
            <li>5 bh cabe rawit</li>
            <li>Seruas jahe</li>
            <li>Seruas kencur</li>
            <li>secukupnya Gula</li>
            <li>secukupnya Gula
secukupnya Garam</li>
            <li>1 sdt Terasi</li>
            <li>1 sdt Asam jawa</li>
            <li>secukupnya Gula merah</li>
            <li>secukupnya Gula merah
2 ruas kayu manis</li>
            <li>Kuah santan:</li>
            <li>1 bks nangka</li>
            <li>6 siung bawang merah</li>
            <li>6 siung bawang putih</li>
            <li>6 siung bawang putih
3 btr kemiri</li>
            <li>Seruas jahe</li>
            <li>secukupnya Garam</li>
            <li>1 sdt kunyit bubuk (boleh kunyit segar)</li>
            <li>secukupnya Gula</li>
            <li>Kaldu bubuk</li>
            <li>1 sdt lada</li>
            <li>1 sdt jintan</li>
            <li>300 ml santan kental</li>
            <li>2 lbr daun salam</li>
            <li>3 lbr daun jeruk</li>
            <li>1 bh serai (geprek)</li>
            <li>Pelengkap :</li>
            <li>Bawang Goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Lontong : cuci beras,aron seperti biasa dengan daun pandan,kemudian ambil sebagian daun pisang, isi dengan nasi yang sdh doaron,bentuk segitiga dan sematkan dengan lidi,kukus dengan air menutupi seluruh bagian lontong.</li>
        <h3>Langkah 2</h3>
            <li>Rebus selama 1-2 jam,dinginkan.</li>
        <h3>Langkah 3</h3>
            <li>Bumbu masak habang : haluskan semua bumbu,tumis,masukkan telur rebus dan ikan haruan/gabus yang sdh digoreng,beri sedikit air agar bumbu meresap kedalam telur dan ikan,tunggu sampai air agak set,cek rasa,matikan kompor.</li>
        <h3>Langkah 4</h3>
            <li>Kuah Santan : rebus nangka beri sedikit kunyit bubuk dan garam.Haluskan bumbu,kecuali ; daun salam,daun jeruk,serai. Tumis hingga harum,masukan daun salam,daun jetuk serai,beri air,masukkan nangka,tambahkan gula,garam,bubuk kaldu,tunggu sampai mendidih,masukkan santan kental,tes rasa.</li>
        <h3>Langkah 5</h3>   
            <li>Penyajian : ambil 2 buah lontong yang sudah dingin,siram dengan kuah santan,beri ikan dan telur masak habang,taburi bawang goreng. Sajikan hangat.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Lontongorari;