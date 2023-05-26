import React from 'react';

function Tiliaya() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Tili Aya</h2>

      <div className="recipe-description">
        <p>
        kue tili aya yang ternyata bahannya sangat sederhana dan manisnya bikin nagih. Tidak harus pergi ke Gorontalo jika ingin mencicipinya, ini resep kue tili aya yang bisa kamu coba di rumah.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/gorontalo/tili_aya.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr gula merah</li>
            <li>100 ml santan kental sedang</li>
            <li>2 butir telur</li>
            <li>1/4 sdt vanili</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Kocok telur di dalam wadah dengan whisk. Iris halus gula merah, masukkan ke dalam telur. Kocok lagi hingga tercampur rata. </li>
        <h3>Langkah 2</h3>
            <li>2.	Tuang santan dan vanili ke dalamnya, kocok lagi hingga tercampur rata.</li>
        <h3>Langkah 3</h3>
            <li>3.	Siapkan kukusan, panaskan. Tuang adonan ke dalam wadah-wadah kecil atau di satu wadah sekaligus.</li>
        <h3>Langkah 4</h3>
            <li>4.	Kukus adonan selama 30 menit atau hingga matang.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Tes tusuk, jika sudah padat, berarti sudah matang. Angkat dan dinginkan</li>
        <h3>Langkah 6</h3>   
            <li>6.	Keluarkan kue titi aya khas Gorontalo dari wadah dan nikmati. Jika suka, hiasi dengan kacang mede bakar.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Tiliaya;