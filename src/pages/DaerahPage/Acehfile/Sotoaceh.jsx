import React from 'react';

function Sotoaceh() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Aceh</h2>

      <div className="recipe-description">
        <p>
        Sejarah soto khas Aceh berasal dari pengaruh masakan Melayu yang masuk ke Aceh pada masa Kesultanan Aceh Darussalam. Pada masa itu, Aceh merupakan pusat perdagangan rempah-rempah yang strategis dan banyak didatangi oleh para pedagang dari berbagai negara, termasuk Melayu. Mereka membawa masakan dan bumbu-bumbu khas mereka ke Aceh dan terjadilah percampuran masakan Aceh dengan masakan Melayu.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/sotoaceh.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor ayam kampung, potong 4</li>
            <li>2 siung bawang putih, haluskan</li>
            <li>1/4 sdt lada</li>
            <li>1 sdt garam</li>
            <li>1 buah jeruk nipis, ambil airnya</li>
            <li>500 ml.air</li>
            <li>BUMBU HALUS:</li>
            <li>7 siung bawang merah</li>
            <li>3 siung bawang putih</li>
            <li>1 sdt lada butiran</li>
            <li>5 buah cabe rawit</li>
            <li>1 ruas kunyit</li>
            <li>1 sdm ketumbar butiran</li>
            <li>3 buah kemiri</li>
            <li>1 ruas jari jahe</li>
            <li>1 sdt jintan</li>
            <li>1/4 buah pala</li>
            <li>BAHAN REMPAH :</li>
            <li>2 ruas jari lengkuas, memarkan</li>
            <li>2 lembar daun salam</li>
            <li>1 batang serai, memarkan</li>
            <li>3 lembar daun jeruk, sobek2</li>
            <li>3 buah kapulaga</li>
            <li>3-4 cm kayu manis</li>
            <li>4 buah cengkeh</li>
            <li>2 buah pekak / bunga lawing</li>
            <li>BUMBU LAINNYA:</li>
            <li>2 siung bawang merah, iris</li>
            <li>1 buah wortel, potong2</li>
            <li>1 buah kentang, potong dadu</li>
            <li>3 batang daun bawang, iris 1/2 cm</li>
            <li>2 batang seledri, iris</li>
            <li>1 buah tomat, potong dadu</li>
            <li>1 sdt gula pasir</li>
            <li>3 sdt garam (sesuai selera)</li>
            <li>1 sdt kaldu jamur</li>
            <li>1,5 liter santan encer</li>
            <li>Minyak untuk menumis</li>
            <li>PELENGKAP:</li>
            <li>Tauge</li>
            <li>Perkedel atau tempe goreng</li>
            <li>Bawang goreng</li>
            <li>Sambal</li>
            <li>Potongan jeruk nipis</li>

          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Potong ayam menjadi 4 bagian, lalu cuci bersih dan lumuri dengan air jeruk dan garam, lalu diamkan selama 15 menit, lalu cuci kembali. Setelah bersih, ungkep ayam dengan bawang putih, garam, lada dan air sampai ayam empuk. Sangrai ketumbar, lada, kemiri, jintan dan pala.</li>
        <h3>Langkah 2</h3>
            <li>Setelah ayam empuk, lalu goreng asal jangan sampai keras. Lalu ayam di suir2</li>
        <h3>Langkah 3</h3>
            <li>Haluskan semua bumbu halus. Lalu panaskan minyak, goreng bawang sampai matang, lalu masukkan bumbu halus, dan bahan rempah, lalu tumis bumbu sampai harum dan matang.</li>
        <h3>Langkah 4</h3>
            <li>Setelah bumbu matang, masukkan santan, masak santan sampai mendidih, dan jangan lupa santan di aduk2 supaya tidak pecah santan. Setelah santan mendidih, masukkan kentang dan wortel, kaldu jamur dan garam, masak wortel sampai lembut. Jangan lupa koreksi rasa ya. Setelah rasa kuah siap, masukkan tomat, daun bawang dan seledri.</li>
        <h3>Langkah 5</h3>   
            <li>Soto siap di sajikan dengan pelengkap toge, perkedel bawang gorenng, perasan air jeruk nipis dan cabe rawit halus.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Soto khas Aceh diperkenalkan oleh para pedagang Melayu sebagai hidangan tradisional mereka yang disesuaikan dengan bahan-bahan lokal Aceh seperti rempah-rempah khas Aceh dan bahan-bahan seperti santan, daging atau ayam, dan sayuran. Hidangan ini kemudian diadaptasi oleh orang Aceh dan menjadi hidangan populer di Aceh.

Hingga saat ini, Soto khas Aceh tetap menjadi hidangan favorit di Aceh dan menjadi salah satu ikon kuliner Aceh yang terkenal di Indonesia. Soto khas Aceh juga sering dihidangkan dalam acara-acara adat seperti pernikahan, khitanan, dan acara keagamaan lainnya.

        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sotoaceh;