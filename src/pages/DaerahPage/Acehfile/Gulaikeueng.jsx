import React from 'react';

function Gulaikeueng() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gulai Keueng</h2>

      <div className="recipe-description">
        <p>
        Hidangan Gule Masam Keeung kemudian menjadi sangat populer di Aceh dan menjadi salah satu hidangan wajib dalam acara-acara adat seperti pernikahan, khitanan, dan acara keagamaan lainnya. Hingga saat ini, Gule Masam Keueng tetap menjadi hidangan favorit di Aceh dan menjadi salah satu ikon kuliner Aceh yang terkenal di Indonesia dan dunia.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/gulaikeueng.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 ekor kepala ikan tongkol</li>
            <li>2 butir bawang merah iris tipis</li>
            <li>2 sendok makan minyak goreng untuk menumis</li>
            <li>Secukupnya garam</li>
            <li>Secukupnya kaldu bubuk</li>
            <li>BUMBU HALUS:</li>
            <li>5 buah cabe rawit merah</li>
            <li>3 siung bawang putih</li>
            <li>2 butir bawang merah</li>
            <li>2 buah cabe merah</li>
            <li>3 buah asam kandis</li>
            <li>1 ruas jahe</li>
            <li>1 ruas kunyit</li>
            <li>1/4 sendok teh ketumbar</li>
            <li>1/4 sendok teh jintan</li>
            <li>1/4 sendok teh adas </li>
            <li>BUMBU LAINNYA UTUH:</li>
            <li>5 buah cabe rawit utuh</li>
            <li>3 lembar daun kari</li>
            <li>3 buah asam kandis</li>
            <li>2 lembar daun jeruk</li>
            <li>1 batang sereh geprek</li>

          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Yuk kita mulai memasak!!!</h3>
            <li>Tumis bawang merah sampai kecoklatan, kemudian masukkan daun kari, daun jeruk, sereh geprek dan cabe rawit. Campurkan bumbu halus, aduk rata sampai bumbu matang</li>
            <li>Masukkan kepala ikan tongkol, aduk, bolak balik sampai bumbu meresap pada ikan. Tambahkan air, aduk rata, tutup panci dan biarkan air menyusut, sesekali kepala ikannya di balik-balik supaya matang merata.</li>
            <li>Tambahkan garam dan bubuk kaldu, aduk rata kuahnya, koreksi rasa.</li>
        <h3>Gulai pun siap disajikan, nikmat dimakan bersama nasi hangat.</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Gule Masam Keeung atau gulai asam pedas adalah hidangan khas Aceh yang terkenal dengan rasa pedas, asam, dan gurihnya. Sejarah Gule Masam Keueng berasal dari pengaruh masakan Melayu dan India yang masuk ke Aceh pada masa Kesultanan Aceh Darussalam.

Pada masa itu, Aceh merupakan pusat perdagangan rempah-rempah yang strategis dan banyak didatangi oleh para pedagang dari berbagai negara, termasuk India dan Melayu. Mereka membawa masakan dan bumbu-bumbu khas mereka ke Aceh dan terjadilah percampuran masakan Aceh dengan masakan Melayu dan India.

Gule Masam Keeung awalnya diperkenalkan oleh para pedagang Melayu dan India sebagai hidangan masakan tradisional mereka yang disesuaikan dengan bahan-bahan lokal Aceh.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Gulaikeueng;