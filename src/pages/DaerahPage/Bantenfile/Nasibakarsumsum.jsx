import React from 'react';

function Nasibakarsumsung() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Bakar Sumsum</h2>

      <div className="recipe-description">
        <p>
        Nasi sumsum dan nasi bakar sumsum menjadi salah satu makanan khas Serang yang harus dicoba. Mengapa demikian? Nasi bakar sumsum sudah terkenal dan menjadi ciri khas masyarakat Banten. Selain itu, tentunya kita sudah tahu kalau nasi menjadi makanan pokok orang Indonesia.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/banten/nasibakarsumsum.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>5 sdm Minyak goreng, untuk menumis</li>
            <li>4 batang Serai, ambil bagian putihnya, memarkan</li>
            <li>6 lembar Daun jeruk purut</li>
            <li>6 buah Cabe rawit merah, iris tipis</li>
            <li>1200 gram Nasi putih</li>
            <li>1/2 sdt Garam</li>
            <li>50 gr Daun kemangi, siangi</li>
            <li>Daun pisang, untuk membungkus</li>
            <li>BUMBU NASI:</li>
            <li>5 siung Bawang putih</li>
            <li>12 butir Bawang merah</li>
            <li>6 buah Cabe merah keriting</li>
            <li>1 sdt Merica butiran</li>
            <li>SUMSUM:</li>
            <li>2 sdm Minyak goreng, untuk menumis</li>
            <li>4 siung Bawang putih, cincang halus</li>
            <li>4 batang serai, ambil bagian putihnya, iris halus</li>
            <li>4 lembar Daun jeruk purut, sobek2</li>
            <li>2 cm Jahe, cincang halus</li>
            <li>300 gram sumsum sapi, cuci bersih</li>
            <li>100 ml air</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>NASI: Panaskan minyak, tumis bumbu halus bersama serai, daun jeruk, dan cabai rawit merah hingga harum. Tambahkan nasi, garam, dan kemangi, aduk rata. Angkat. bagi menjadi 6 bagian. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>SUMSUM: Panaskan minyak, tumis bawang putih, serai, daun jeruk dan jahe hingga harum. Tambahkan sumsum, aduk rata. Tambahkan air, masak hingga sumsum matang. Angkat. Bagi menjadi 6 bagian.</li>
        <h3>Langkah 3</h3>
            <li>PENYELESAIAN: Ambil daun pisang,beri 1 bagian nasi, ratakan.Taruh 1 bagian sumsum ditengahnya, tutup sambil gulung perlahan.Bentuk seperti lontong, semat kedua ujungnya, rapikan. lakukan hingga selesai. Bakar nasi di atas bara hingga harum. Angkat,sajikan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Awal mula nasi bakar sumsum menjadi makanan khas di Serang terjadi pada tahun 1941. Saat itu tukang potong hewan yang bekerja di daerah Serang, melihat sisa-sisa tulang yang mubazir untuk dibiarkan. Tulang itu pun dibawa pulang. Ternyata tulang yang dibawanya menarik seorang pembeli untuk menggunakan tulang tersebut.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasibakarsumsung;