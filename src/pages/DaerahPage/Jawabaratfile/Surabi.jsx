import React from 'react';

function Surabi() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Surabi</h2>

      <div className="recipe-description">
        <p>
        Serabi atau surabi adalah camilan pasar yang berasal dari Indonesia. Di daerah Jawa Barat kudapan ini disebut dengan sorabi atau surabi. Penyajian serabi Sunda berbeda dengan Jawa. Di Sunda, serabi dihidangkan dengan isian oncom dan asinan lainnya
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/surabi.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>175 gr tepung beras</li>
            <li>50 gr tepung terigu</li>
            <li>90 gr gula pasir</li>
            <li>100 gr kelapa parut (setengah tua)</li>
            <li>350 ml santan kental (sy 100 ml santan instan+air)</li>
            <li>Rebus santan + 1 lbr daun pandan hingga mendidih,dinginkan</li>
            <li>1/2 sdt ragi instan, pastikan aktif</li>
            <li>1/2 sdt garam halus</li>
            <li>Topping(sesuai selera)</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Siapkan bahan2 yg akan digunakan. Campur jadi satu bahan kering, tepung beras, terigu, fermipan, gula pasir Masukkan santan yg sudah hangat, sedikit demi sedikit. Aduk dgn whisk. Tambahkan garam. Aduk. Diamkan selama 1-1.5 jam. Tutup dgn serbet.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan cetakan serabi, (saya menggunakan cetakan martabak mini) dengan api kecil. Tuang adonan sebanyak 3/4 penuh, tutup cetakan. Setengah matang taburi topping irisan pisang/ meises/selai/keju/nangka/lainnya sesuai selera, tutup kembali.</li>
        <h3>Langkah 3</h3>
            <li>Angkat setelah bagian bawahnya kecoklatan. Serabi Bandung dengan topping manis siap disajikan.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Surabi;