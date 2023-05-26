import React from 'react';

function Gulaipisang() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gulai Pisang</h2>

      <div className="recipe-description">
        <p>
        Gulai memang biasanya dibuat dari bahan dasar ayam, ikan, daging, telur, tempe, hingga tahu. Gulai pisang dibuat dari bahan dasar pisang lalu dimasak dengan bumbu gulai.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bengkulu/gulaipisang.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>3 buah pisang kepok</li>
            <li>2 sdm ikan teri</li>
            <li>300 ml santan cair</li>
            <li>BUMBU HALUS:</li>
            <li>5 buah cabai keriting</li>
            <li>5 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>3 buah cengkeh</li>
            <li>1 cm pala</li>
            <li>1 cm kunyit</li>
            <li>1 buah adas</li>
            <li>1 sdt ketumbar</li>
            <li>1 butir kemiri</li>
            <li>BUMBU UTUH:</li>
            <li>1 batang serai</li>
            <li>1 ruas lengkuas</li>
            <li>4 lembar daun jeruk</li>
            <li>5 buah cabai rawit</li>
            <li>1 buah cabai merah</li>
            <li>garam, gula, lada bubuk, dan kaldu bubuk secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>1.	Kupas pisang dan potong-potong serong. Rendam di dalam air garam agar tidak berubah warna dan membantu menghilangkan getahnya.</li>
        <h3>Langkah 2</h3>
            <li>2.	Cuci ikan teri, buang kepala dan isi perutnya. Tiriskan dan goreng sebentar hingga matang, sisihkan.</li>
        <h3>Langkah 3</h3>
            <li>3.	Tumis bumbu halus hingga harum. Memarkan serai dan lengkuas. Iris serong cabai merah dan kerat cabai rawit. Masukkan semua bumbu utuh ke dalam bumbu tumis.</li>
        <h3>Langkah 4</h3>
            <li>4.	Masak hingga bumbu matang dan aromanya sedap, tidak langu.</li>
        <h3>Langkah 5</h3>   
            <li>5.	Tuang santan dan air secukupnya. Masak hingga mendidih.</li>
        <h3>Langkah 6</h3>   
            <li>6.	Masukkan pisang dan teri masak hingga empuk dan bumbu meresap. Tes rasa, jika sudah pas, angkat.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Bagi sebagian orang, mungkin pisang hanya menjadi buah-buahan penutup mulut. Ia dimakan setelah menyantap makanan utama. Namun, di Bengkulu, pisang punya "takdirnya" sendiri. Di sini, pisang menjadi menu masakan dalam bentuk gulai pisang. Gulai pisang adalah makanan khas dari Bengkulu. Meski tak diketahui persis kapan kemunculannya, ia diyakini sebagai sebuah makanan tua peninggalan nenek moyang. Soal rasa, gulai pisang cukup enak dimakan. Hanya saja, saat ini ia sudah jarang dimasak oleh masyarakat. Ia lebih menjadi makanan pengganti di kala tidak ada ikan atau daging. Padahal, gulai pisang memiliki manfaat tersendiri. Kulit pisangnya yang masih hijau bisa menjadi sumber karbohidrat.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gulaipisang;