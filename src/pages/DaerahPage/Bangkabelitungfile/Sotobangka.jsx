import React from 'react';

function Sotobangka() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Soto Bangka</h2>

      <div className="recipe-description">
        <p>
        Meski bumbunya banyak, soto Belitung termasuk sajian sederhana. Soto Belitung biasanya dibuat dengan dua kuah: kuah santan dan kuah bening. Soto dengan kuah santan biasa disajikan pada hari raya sebagai makanan pelengkap ketupat, soto dengan kuah bening biasa dijual bebas dan dijajakan di kedai makanan di Belitung.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/sotobangka.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr daging sapi</li>
            <li>1 batang serai (memarkan)</li>
            <li>2 lmbar daun salam</li>
            <li>2 lmbar daun jeruk</li>
            <li>200 cc santan kental</li>
            <li>200 cc santan cair</li>
            <li>minyak sayur</li>
            <li>BUMBU HALUS:</li>
            <li>8 siung bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>5 gr ketumbar</li>
            <li>6 gr merica</li>
            <li>1 cm lengkuas</li>
            <li>2 cm kunyit</li>
            <li>2 gr jinten</li>
            <li>1 gr jahe</li>
            <li>bahan pelengkap :</li>
            <li>jeruk pecel</li>
            <li>kecambah (direbus)</li>
            <li>mie (direbus)</li>
            <li>2 buah kentang (direbus)</li>
            <li>Kerupuk</li>
            <li>Sambal</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Rebus daging terlebih dahulu agar empuk (10 menit)</li>
        <h3>Langkah 2</h3>
            <li>Sangrai bumbu seperti ketumbar, merica, dan jintan terlebih dahulu</li>
        <h3>Langkah 3</h3>
            <li>Lalu haluskan bumbu</li>
        <h3>Langkah 4</h3>
            <li>Tuang minyak pada pan,lalu tumis bumbu hingga matang,tambahkan serai,daun salam dan daun jeruk purut yg telah dimemarkan </li>
        <h3>Langkah 5</h3>   
            <li>Lalu Tuang santan kental,aduk perlahan</li>
        <h3>Langkah 6</h3>   
            <li>Lalu tuang santan cair</li>
        <h3>Langkah 7</h3>   
            <li>Lalu masukkan daging yg telah direbus </li>
        <h3>Langkah 8</h3>   
            <li>Aduk hingga matang dan tercium aroma rampah</li>
        <h3>Langkah 9</h3>   
            <li>Lalu sajikan bahan pelengkap pada bowl</li>
        <h3>Langkah 10</h3>   
            <li>Siapkan jeruk pecel dan sambal</li>
        <h3>Langkah 11</h3>   
            <li>Tuang kuah soto beserta daging pada mangkok</li>
        <h3>Langkah 12</h3>   
            <li>Lalu sajikan</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Selain destinasi wisata alam terutama baharinya, Bangka Belitung begitu populer lewat novel dan film Laskar Pelangi ini juga merupakan surga kuliner. Sajian tradisional Bangka Belitung tergolong unik dengan pengaruh besar budaya peranakan dan Suku Melayu yang mayoritas mendiami wilayahnya.

Salah satu sajian tradisional wajib ada dalam lis buruan kamu di Bangka Belitung yaitu soto Belitung. Soto Belitung terkenal sangat enak dengan bumbu rempah sangat banyak. Kuliner satu ini merupakan favorit masyarakat. Seperti di Tanjung Pandan, kamu bisa menemukan banyak kedai soto yang bisa memanjakan lidah kamu.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sotobangka;