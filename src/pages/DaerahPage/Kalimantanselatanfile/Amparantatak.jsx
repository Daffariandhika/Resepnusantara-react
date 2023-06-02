import React from 'react';

function Amparantatak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Amparan Tatak</h2>

      <div className="recipe-description">
        <p>
        Amparan Tatak adalah kue tradisional khas dari suku Banjar. Kue ini termasuk ke dalam kategori kue basah dengan bahan utama berupa tepung beras, santan, gula dan pisang. Kue ini didominasi oleh rasa gurih dan manis sehingga menjadi salah satu jajanan yang dicari di pasar wadai selama bulan Ramadan
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanselatan/amparantatak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gr tepung beras</li>
            <li>600 cc santan sedang</li>
            <li>100 gr gulapasir</li>
            <li>1 kotak vanili</li>
            <li>1 butir telur</li>
            <li>1/2 sdt garam</li>
            <li>400 gr pisang yg sdah matang </li>
            <li>1 lmbr daun pandan</li>
            <li>lapisan atas :</li>
            <li>50 gr tepung beras</li>
            <li>500 cc santan kental</li>
            <li>gr gulapasir</li>
            <li>1 sdt garam</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Kerjakan bahan utk lapisan bawah dulu,rebus santan,gula pasir,daunpandan sampai mndidih,matikan api</li>
        <h3>Langkah 2</h3>
            <li>Dalam wadah campur tepung beras,garam,vanili,telur aduk rata kmudian tuangi santan panas yg sudah direbus tadi,aduk kmbli sampai adonan licin tidak bergerindil saring klo perlu.</li>
        <h3>Langkah 3</h3>
            <li>Masukan kedalam loyang yg sudah diberi minyak dan dialasi plastik tahan panas,sisakan 1/4 bagian utk dicampur dgn cacahan pisang.</li>
        <h3>Langkah 4</h3>
            <li>Kukus adonan lapisan bawah kurleb 20 menit,baru kmudian masukan adonan 1/4 td yg sudah dicampur cacahan pisang,kukus lagi kurleb 20 menit.</li>
        <h3>Langkah 5</h3>   
            <li>Sambil menunggu kukusan lapisan bawah mengeras,kita kerjakan untuk lapisan atasnya,campur tepung beras,gula,garam lalu rebus sampai mendidih,matikan api</li>
        <h3>Langkah 6</h3>   
            <li>Aduk rata adonan sampai halus dan kalis tidak bergerindil.</li>
        <h3>Langkah 7</h3>   
            <li>Masukan kedalam loyang tuang keatas lapisan bawah,kukus kmbli kurleb 20 menit atau smpai matang merata.</li>
        <h3>Langkah 8</h3>   
            <li>Setelah matang dan dingin disuhu ruangan,baru amparan tatak dipotong sesuai selera.</li>
        <h3>Langkah 9</h3>   
            <li>Sajikan dan nikmati bersama keluarga.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Amparantatak;