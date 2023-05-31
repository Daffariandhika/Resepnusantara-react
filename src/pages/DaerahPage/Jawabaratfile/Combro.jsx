import React from 'react';

function Combro() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Combro</h2>

      <div className="recipe-description">
        <p>
        Comro merupakan gorengan khas Sunda. Comro terbuat dari parutan singkong yang dibentuk bulat atau lonjong dan diisi dengan sambal oncom dan cabai lalu digoreng.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/combro.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 kg singkong parut</li>
            <li>1/2 butir kelapa parut</li>
            <li>2 sdm tepung tapioka</li>
            <li>1 batang daun seledri</li>
            <li>1,5 sdt kaldu jamur</li>
            <li>1 sdt garam</li>
            <li>1/2 sdt gula</li>
            <li>ISIAN :</li>
            <li>1 papan oncom</li>
            <li>5 siung bawang merah</li>
            <li>3 buah cabai merah</li>
            <li>8 buah cabai rawit merah</li>
            <li>1 batang daun bawang</li>
            <li>1/2 sdt kaldu jamur</li>
            <li>1 sdt garam</li>
            <li>1,5 sdt gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih oncom, lalu hancurkan.</li>
        <h3>Langkah 2</h3>
            <li>Iris bawang merah, cabai merah, cabai rawit merah, dan daun bawang.</li>
        <h3>Langkah 3</h3>
            <li> Tumis bawang merah hingga harum, tambahkan cabai.</li>
        <h3>Langkah 4</h3>
            <li>Masukkan oncom, tumis hingga matang.</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan daun bawang, kaldu jamur, garam, dan gula. Koreksi rasa sesuai selera.</li>
        <h3>Langkah 6</h3>   
            <li>Dinginkan hingga uap panas hilang.</li>
        <h3>Langkah 7 cara membuat adonan</h3>   
            <li> Campurkan singkong parut dan kelapa parut. Aduk secara merata.</li>
        <h3>Langkah 8</h3>   
            <li>Tambahkan potongan seledri, kaldu jamur, garam, dan gula. Koreksi rasa sesuai selera.</li>
        <h3>Langkah 9</h3>   
            <li>Masukkan tepung tapioka, aduk kembali hingga merata.</li>
        <h3>Langkah 10</h3>   
            <li>Bentuk adonan combro dan beri isian.</li>
        <h3>Langkah 11</h3>   
            <li>Panaskan minyak untuk menggoreng, goreng hingga golden brown.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Combro;