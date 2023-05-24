import React from 'react';

function Jakuturap() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Jakut Urap</h2>

      <div className="recipe-description">
        <p>
        Jukut urap sering ditemukan dalam sajian nasi campur. Dikutip dari detikfood, jukut urap terdiri dari berbagai sayuran yang disiram dengan bumbu khas Bali.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/jakuturap.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>3 lembar daun kol</li>
            <li>50 gr bayam</li>
            <li>3 lonjor kacang panjang</li>
            <li>50 gr tauge</li>
            <li>200 gr kelapa agak muda</li>
            <li>1 sdm bawang goreng</li>
            <li>300 ml air untuk merebus</li>
            <li>2 sdm bawang goreng</li>
            <li>2 siung bawang putih</li>
            <li>2 buah cabai merah besar</li>
            <li>1 sdt terasi bakar</li>
            <li>2 Iembar daun jeruk</li>
            <li>1 ruas kencur</li>
            <li>1 sdt garam</li>
            <li>1/2 sdt merica</li>
            <li>2 sdm gula pasir</li>
            <li>1 sdm minyak goreng</li>
            <li>1 sdm air jeruk lemon</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Daun kol, Kacang panjang, bayam dan tauge dicuci bersih di bawah air mengalir. Daun kol dibuang tulang daunnya lalu iris tipis, sisihkan. Kacang panjang dibuang ke dua ujungnya lalu potong 2 cm, sisihkan. Bayam dipetiki daunnya dan tauge dibuang akarnya, sisihkan. Kelapa dikerik kulit arinya lalu diparut kasar. Kemudian kukus hingga matang. Angkat dan sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>Bawang putih dan kencur dikupas lalu dihaluskan secara terpisah, sisihkan. Cabai merah dibuang bijinya lalu diiris tipis, sisihkan. Daun jeruk dibuang tulang daunnya lalu diiris tipis, sisihkan. Masukkan semua bahan bumbu ke dalam wadah bersih lalu adukaduk hingga tercampur rata. Sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>Didihkan air dengan api besar lalu rebus kol, kacang panjang, bayam dan tauge setengah matang secara terpisah. Angkat dan tiriskan. Setelah agak dingin, masukkan sayuran ke dalam wadah besar. Tambahkan bumbu campur sambil diaduk-aduk hingga tercampur rata. Kemudian tutup wadah dengan plastik bersih lalu diamkan selama 20-25 menit agar bumbu meresap.</li>
        <h3>Langkah 4</h3>
            <li>Siapkan beberapa mangkuk saji lalu beri urap secukupnya. Taburi dengan bawang goreng dan sajikan segera.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Salah satu jenis urapan yang khas dari pulau Bali adalah jukut urab dengan penampilan hampir mirip dengan urapan sayur dari Jawa. Dalam satu porsi jukut urab, nantinya akan diisi dengan sayuran berupa kacang panjang, tauge, bayam, dan wortel kemudian diberi bumbu. Perbedaan antara urapan yang ada di Jawa dengan jukut urab terletak pada bumbu tersebut, karena jukut urab akan diberi perasan jeruk nipis dan ada kacang goreng yang menemaninya. Kalau soal rasa, yang jukut urab terkesan lebih memiliki rasa pedas, karena akan diberi bumbu berupa cabai begitu banyak.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Jakuturap;