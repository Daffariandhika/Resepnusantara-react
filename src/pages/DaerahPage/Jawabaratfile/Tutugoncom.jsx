import React from 'react';

function Tutugoncom() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Tutug Oncom</h2>

      <div className="recipe-description">
        <p>
        Nasi Tutug Oncom adalah makanan khas Tasikmalaya yang terbuat dari nasi yang diaduk dengan oncom goreng atau bakar. Penyajian makanan ini umumnya dalam keadaan hangat.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jawabarat/tutugoncom.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>600
g nasi putih</li>
            <li>400
g oncom, iris</li>
            <li>2
sdm
Bango Kecap Manis Light</li>
            <li>2
sdm
Royco Kaldu Jamur</li>
            <li>5
sdt merica putih bubuk</li>
            <li>1
sdm terasi, bakar</li>
            <li>3
sdm minyak
daun pisang, untuk membungkus</li>
            <li>BUMBU HALUS:</li>
            <li>7
butir bawang merah</li>
            <li>6
siung bawang putih</li>
            <li>3
cm kencur</li>
            <li>6
buah cabai keriting merah</li>
            <li>5
buah cabai rawit merah</li>
            <li>PELENGKAP:</li>
            <li>tempe goreng, tahu goreng, sambal terasi,lalapan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Panaskan 1 sdm minyak, masak oncom sambil diaduk hingga aroma langunya berkurang.</li>
        <h3>Langkah 2</h3>
            <li>Panaskan sisa minyak, tumis bumbu halus hingga harum. Masukkan oncom, Royco Kaldu Jamur, Bango Kecap Manis Light, merica, dan terasi. Masak hingga matang dan tumisan mengering.</li>
        <h3>Langkah 3</h3>
            <li>Tambahkan nasi putih, aduk hingga rata. Angkat. Bagi menjadi 4 bagian. Sisihkan.</li>
        <h3>Langkah 4</h3>
            <li>Siapkan daun pisang, olesi dengan minyak. Sisihkan.</li>
        <h3>Langkah 5</h3>   
            <li>Taruh nasi ke atas daun pisang. Bungkus. Sematkan dengan tusuk gigi.</li>
        <h3>Langkah 6</h3>   
            <li>Sajikan nasi tutug oncom dengan pelengkap.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Tutugoncom;