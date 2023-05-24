import React from 'react';

function Sambelikung() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sambelikung</h2>

      <div className="recipe-description">
        <p>
        Sambal lingkung adalah sejenis abon atau serundeng yang terbuat dari ikan, santan kelapa, dan rempah-rempah lainnya. Biasanya sambal lingkung dapat dengan mudah dijumpai di momen-momen lebaran. Kuliner ini sangat nikmat untuk dijadikan sebagai lauk atau isian kue. Seperti halnya Rusip, sambal lingkung juga dapat dijadikan sebagai oleh-oleh khas Bangka Belitung.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/sambelikung.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr ikan segar berdaging tebal (tongkol/tenggiri/tuna)</li>
            <li>Air perasan dr 1 buah jeruk nipis/lemon ukuran kecil</li>
            <li>250 ml air santan (bisa pakai santan segar / kara 200ml+50ml air)</li>
            <li>BUMBU HALUS:</li>
            <li>9 siung bawang merah ukuran besar</li>
            <li>5 siung bawang putih</li>
            <li>1 sendok makan ketumbar biji (sangrai)</li>
            <li>Lengkuas seruas jari</li>
            <li>Kunyit seruas jari</li>
            <li>5 buah sereh (ambil putihnya saja)</li>
            <li>Bahan cemplung</li>
            <li>5 lembar daun jeruk</li>
            <li>Secukupnya garam</li>
            <li>Secukupnya gula</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Cuci bersih ikan, lalu balur dg perasan air jeruk</li>
        <h3>Langkah 2</h3>
            <li>Kukus ikan sampai matang. Setelah dingin suir ikan sampai halus.</li>
        <h3>Langkah 3</h3>
            <li>Blender semua bahan halus</li>
        <h3>Langkah 4</h3>
            <li>Masukkan semua bahan ke dalam wajan. Ikan suir, bumbu halus, daun jeruk, garam dan gula</li>
        <h3>Langkah 5</h3>   
            <li>Tambahkan santan dan masak dengan api sedang. Aduk sesekali</li>
        <h3>Langkah 6</h3>   
            <li>Saat air sudah mulaiengering, kecilkan api, terus aduk jangan sampai gosong sambil koreksi rasa</li>
        <h3>Langkah 7</h3>   
            <li>Terus aduk hingga berubah warna kecoklatan dan kering (penampakan seperti serundeng kelapa).</li>
        <h3>Langkah 8</h3>   
            <li>Abon ikan siap disantap.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Menurut sejarahnya, sambalingkung dibuat agar hasil tangkapan ikan yang melimpah tidak terbuang percuma, yakni dengan cara mengolah ikan-ikan tangkapan tersebut menjadi makanan yang tahan lama, awet serta lezat. Dengan kreatifitas penduduk Melayu Bangka Belitung maka terciptalah sambalingkung atau semblingkung.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sambelikung;