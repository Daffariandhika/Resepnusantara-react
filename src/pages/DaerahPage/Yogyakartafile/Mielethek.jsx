import React from 'react';

function Mielethek() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Mie Lethek</h2>

      <div className="recipe-description">
        <p>
        Mie Lethek adalah mie dengan tekstur kenyal yang dibuat dari campuran tepung terigu dan tepung beras. Yang membedakan Mie Lethek dari mie pada umumnya adalah warna kabur dan buramnya yang dihasilkan dari pewarna alami yang berasal dari daun nangka atau daun suji. 
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/mielethek.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr tepung terigu</li>
            <li>100 gr tepung beras</li>
            <li>Daun nangka atau daun suji segar</li>
            <li>Air secukupnya</li>
            <li>Garam secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Ambil daun nangka atau daun suji segar, cuci bersih, dan blender dengan sedikit air hingga halus. Saring dan ambil airnya sebagai pewarna alami untuk mie.</li>
            <li>Campurkan tepung terigu, tepung beras, dan garam dalam sebuah mangkuk. Aduk rata.</li>
            <li>Tambahkan air sedikit-sedikit sambil terus diuleni hingga adonan bisa dipulung. Pastikan adonan tidak terlalu lembek atau terlalu keras.</li>
            <li>Bagi adonan menjadi beberapa bagian dan tambahkan pewarna alami dari daun nangka atau daun suji pada masing-masing bagian adonan. Uleni hingga pewarna merata dan adonan berwarna.</li>
            <li>Giling masing-masing bagian adonan dengan menggunakan mesin penggiling mie atau giling dengan tangan hingga tipis.</li> 
            <li>Potong-potong adonan mie tipis sesuai dengan panjang yang diinginkan.</li> 
            <li>Didihkan air dalam panci besar, tambahkan sedikit minyak goreng dan garam. Masukkan mie lethek ke dalam air mendidih dan masak hingga matang, sekitar 3-4 menit.</li>
            <li>Tiriskan mie dan bilas dengan air dingin agar tidak lengket.</li>
            <li>Mie Lethek siap disajikan. Anda dapat menyajikannya dengan kuah kaldu, daging ayam atau sapi, sayuran, serta tambahan</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Mie Lethek dapat ditelusuri hingga zaman kolonial Belanda di Indonesia. Konon, Mie Lethek awalnya merupakan makanan para pekerja perkebunan dan buruh pabrik di daerah Solo.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Mielethek;