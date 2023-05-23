import React from 'react';

function Kuahplieku() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Gudeg</h2>

      <div className="recipe-description">
        <p>
        "Bagi orang Aceh, semua bagian kelapa bisa digunakan bahkan sampai ampasnya juga dipakai. Kuah pliek u kemudian diciptakan dengan memasukkan banyak rempah sehingga menghasilkan makanan yang luar biasa enaknya,"
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/kuahpliek-u.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>Kacang panjang ¼ kg</li>
            <li>Daun melinjo 4 ikat</li>
            <li>Buah melinjo muda 1 ons</li>
            <li>Nangka muda 2 plastik</li>
            <li>Terong hijau 10 buah</li>
            <li>Kangkung 1 ikat</li>
            <li>Pliek U ¾ gelas duralex kecil</li>
            <li>Kalapa kukur 1 buah</li>
            <li>Udang ¼ kg- Kikil sesuka</li>
            <li>Garam secukupnya</li>
            <li>BAHAN BUMBU GILING :</li>
            <li>Ketumbar giling kering 2 sdm</li>
            <li>Cabe merah 6 buah</li>
            <li>Cabe rawit 20 buah</li>
            <li>Bawang Merah 6 siung</li>
            <li>Bawang putih 3 siung</li>
            <li>Jahe 1 cm</li>
            <li>Kunyit halus 1 sd</li>
            <li>Ketumbar masak 1 sdt</li>
            <li>Kelapa gongseng (ulhee) 2 sdm</li>
            <li>Merica bulat ½ sdm</li>
            <li>Asam sunti 3 buah</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Gongseng pliek u dengan api kecil sampai harum baunya, tambahkan 1 gelas duralex panjang air sampai mendidih. Sesudah mendidih disaring (buang airnya). Blender pliek u hingga halus.</h3>
            <li>Rebus buah melinjo dan nangka muda sampai empuk kemudian buang airnya</li>
            <li>Rebus kikil hingga empuk buang airnya</li>
            <li>Potong sayur-sayuran, giling bumbu sampai halus dan rajang bumbu rajang</li>
            <li>Peras kelapa kukur sampai mejadi santan encer</li>
        <h3>Masukkan ke dalam panci sayur-sayuran, bumbu giling, bumbu rajang, udang, garam, pliek u (kecuali kangkung dan daun jeruk) aduk- aduk hingga rata. Masukkan air sedikit lalu direbus.</h3>
        <li>Sesudah berasap masukkan santan encer aduk-aduk</li>
        <li>Ketika hampir matang masukkan kangkung dan daun jeruk</li>
        <h3>Selamat mencoba</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Pliek u merupakan salah satu hidangan yang merangkap sebagai bumbu di Aceh. Pliek u berasal dari ampas kering sisa minyak kelapa tua yang telah melalui beberapa kali proses pemerasan.

"Bagi orang Aceh, semua bagian kelapa bisa digunakan bahkan sampai ampasnya juga dipakai. Kuah pliek u kemudian diciptakan dengan memasukkan banyak rempah sehingga menghasilkan makanan yang luar biasa enaknya."

        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Kuahplieku;