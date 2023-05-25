import React from 'react';

function Sayurbesan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sayur Besan</h2>

      <div className="recipe-description">
        <p>
        Dinamakan Sayur Besan karena dihidangkan saat pernikahan dari pihak mempelai wanita kepada orang tua mempelai pria.
Bahan-bahal yang dipakai yaitu trubuk, petai, kentang, dan bihun. Beberapa bahan lain juga bisa ditambahkan, seperti wortel, buncis, dan udang.
Ini ciri khas dengan kuahnya berwarna kuning dari rebusan kunyit.

        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/sayurbesan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>850 ml air</li>
            <li>50 gr fiber cream</li>
            <li>6 buah terubuk(telur tebu)</li>
            <li>2 buah kentang</li>
            <li>1 papan pete belah dua</li>
            <li>1 buah kembang kol (yang kecil)</li>
            <li>3 sdm ebi</li>
            <li>2 batang daun bawang</li>
            <li>1/2 bungkus kecil soun</li>
            <li>2 lembar daun salam</li>
            <li>1 ruas lengkuas memarkan</li>
            <li>1 sdt garam (sesuaikan)</li>
            <li>1 sdt gula pasir</li>
            <li>Secukupnya minyak goreng untuk menumis bumbu</li>
            <li>BUMBU HALUS:</li>
            <li>8 siung bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>8 buah cabe merah keriting</li>
            <li>5 buah cabe merah besar</li>
            <li>3 butir kemiri</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan semua bahan,kupas terubuk cuci ebi sampai bersih.</li>
        <h3>Langkah 2</h3>
            <li>Cuci bersih sayuran bawang kentang kembang kol pete daun bawang lengkuas juga daun salam, rendam soun hingga lentur kentang dipotong dadu.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan secukupnya minyak masukkan bumbu halus salam dan lengkuas, masak hingga matang baru masukan ebi aduk sebentar tambahkan air biarkan mendidih</li>
        <h3>Langkah 4</h3>
            <li>Masukkan kentang masak kentang hingga setengah matang,lalu masukkan kembang kol dan pete juga fiber cream.</li>
        <h3>Langkah 5</h3>   
            <li>Terubuk saya potong dua, masukan terubuk tambahkan garam dan gula koreksi rasa.</li>
        <h3>Langkah 6</h3>   
            <li>Sebelum diangkat masukkan soun dan irisan daun bawang aduk rata lalu matikan api,karena soun akan menyerap air jadi jangan terlalu lama dimasak</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Awal mula keberadaan sayur besan karena adanya perkebunan tebu di Kota Tangerang pada abad ke-17. Sayur besan tidak hanya menyajikan cita rasa yang khas, namun juga sebagai tradisi masyarakat betawi di Kota Tangerang yang menggelar prosesi pernikahan.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sayurbesan;