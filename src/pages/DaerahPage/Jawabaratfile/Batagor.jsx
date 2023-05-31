import React from 'react';

function Batagor() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Batagor</h2>

      <div className="recipe-description">
        <p>
        Batagor merupakan jajanan khas Bandung yang kini sudah dikenal hampir di seluruh wilayah Indonesia. Secara umum, batagor dibuat dari tahu yang dilembutkan dan diisi dengan adonan berbahan ikan tenggiri.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/batagor.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300g daging ikan tenggiri filet, haluskan</li>
            <li>60
g tepung tapioka</li>
            <li>5
siung bawang putih, haluskan</li>
            <li>1 sdt Royco Kaldu Jamur</li>
            <li>1
sdt gula pasir</li>
            <li>2
batang daun bawang, iris halus</li>
            <li>2
batang daun bawang, iris halus</li>
            <li>1
butir telur ayam</li>
            <li>9
lembar kulit pangsit</li>
            <li>6
buah tahu putih</li>
            <li>Bumbu kacang:</li>
            <li>5
buah cabai rawit merah</li>
            <li>2
siung bawang putih, goreng</li>
            <li>½
sdt Royco Kaldu Jamur</li>
            <li>40
g gula merah, sisir</li>
            <li>150
g kacang tanah goreng</li>
            <li>4
sdm air</li>
            <li>6
sdm minyak</li>
            <li>mentimun, iris</li>
            <li>jeruk limau</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Potong tahu 2 bagian membentuk segitiga. Keruk bagian tengahnya menggunakan sendok untuk diisi dengan adonan batagor. Sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Aduk rata ikan tenggiri bersama tepung tapioka, bawang putih, gula pasir, dan daun bawang. Tuang air es, dan Royco Kaldu Jamur, aduk kembali hingga adonan tercampur rata. Tambahkan telur, uleni hingga rata.</li>
        <h3>Langkah 3</h3>
            <li>Ambil 1 lembar kulit pangsit, letakkan 1 sdm adonan ikan ke bagian tengahnya. Rekatkan membentuk seperti mangkuk. Ulangi proses serupa pada sisa bahan. Sisihkan.</li>
        <h3>Langkah 4</h3>
            <li>Ambil tahu, isi bagian tengahnya dengan adonan ikan. Ulangi proses serupa pada sisa bahan.</li>
        <h3>Langkah 5</h3>   
            <li>Panaskan minyak, goreng batagor di atas api sedang hingga matang. Angkat dan tiriskan.</li>
        <h3>Langkah 6</h3>   
            <li>Bumbu kacang: Blender semua bahan hingga tercampur rata.</li>
        <h3>Langkah 7</h3>   
            <li>Siapkan piring saji yang sudah diisi dengan batagor dan potongan mentimun. Tuang bumbu kacang ke atas batagor. Sajikan dengan Saus Sambal Jawara, Bango Kecap Manis, dan jeruk limau.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Batagor;