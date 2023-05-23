import React from 'react';

function Timphan() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Timphan</h2>

      <div className="recipe-description">
        <p>
         Kue Timphan makanan khas Aceh yang kenyal karena terbuat dari ketan yang diisi dengan isian manis seperti pisang atau lainnya sesuai selera.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/timphan.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 bungkus tepung beras ketan</li>
            <li>5 buah barangan pisang yang benar2 matang </li>
            <li>2 buah kelapa untuk isiannya</li>
            <li>2 Batang daun pandan</li>
            <li>Secukupnya gula pasir</li>
            <li>Secukupnya garam</li>
            <li>Secukupnya daun pisang muda untuk membungkus</li>
            <li>Secukupnya minyak goreng</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Untuk unti kelapanya, Gongseng dulu 3 SDM gula pasir sampai kecoklatan, jika sudah benar2 kecoklatan baru masukan kelapa, daun pandandan gula pasir sesuai dengan tingkat kemanisan yang diinginkan. Masak sampai air gula menyusut, masak dengan api kecil</li>
        <h3>Langkah 2</h3>
            <li>Untuk kulit timpannya campur tepung ketan, pisang dan sedikit garam uleni sampai Kalis dan lembut. Jika dirasa adonan tepung masih keras bisa ditambahkan lagi pisangnya.</li>
        <h3>Langkah 3</h3>
            <li>Jika sudah kalis bulat-Bulatkan adonan.</li>
        <h3>Langkah 4</h3>
            <li>Ambil adona taruh diatas daun pisang yang sudah diolesi minyak goreng pipihkan beri isian unti kelapa. (Tujuan diolesi minyak goreng agar saat sudah dingin adonan tidak lengket di daun dan lepas dengan sendirinya).</li>
        <h3>Langkah 5</h3>   
            <li>Siapkan panci kukusan, tata timphan dalam panci lalu kukus sampai matang</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Kue Timpan adalah salah satu makanan khas yang berasal dari ujung barat Indonesia tepatnya Nanggroe Aceh Darussalam. Kue manis ini terbuat dari tepung ketan yang menjadi kegemaran masyarakat Aceh pada hari-hari besar Islam
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Timphan;