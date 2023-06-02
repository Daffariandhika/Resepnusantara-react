import React from 'react';

function Ipau() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Ipau</h2>

      <div className="recipe-description">
        <p>
        Ipau adalah makanan khas dari Banjarmasin, Kalimantan Selatan dan sudah ditetapkan dalam SK Walikota nomor 811/2017. Kue Ipau berwarna putih, berbentuk bulat dengan taburan daging di lapisan atasnya dan memiliki tekstur lembut
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanselatan/ipau.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 ml air</li>
            <li>150 g tepung terigu</li>
            <li>2 sdm tepung tapioka</li>
            <li>1 butir telur</li>
            <li>2 sdm minyak goreng</li>
            <li>Bahan isian:</li>
            <li>100 g daging dada ayam</li>
            <li>50 gr wortel potong dadu</li>
            <li>50 gr kentang potong dadu</li>
            <li>2 batang daun bawang</li>
            <li>2 batang daun bawang
2 butir telur ayam rebus</li>
            <li>Bumbu halus:</li>
            <li>3 siung bawang merah</li>
            <li>1 butir bawang putih</li>
            <li>1/2 sdt garam</li>
            <li>1/4 sdt kaldu bubuk</li>
            <li>pala dan merica bubuk secukupnya</li>
            <li>air secukupnya</li>
            <li>air secukupnya
Bahan perekat:</li>
            <li>100 ml santan kental</li>
            <li>50 g tepung terigu</li>
            <li>Sejumput garam</li>
            <li>Bahan saus:</li>
            <li>250 ml santan kekentalan sedang</li>
            <li>1 sdm maizena</li>
            <li>Gula dan garam secukupnya</li>
            <li>Pelengkap:</li>
            <li>Bawang goreng dan daun seledri secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campur semua bahan kulit, aduk rata dengan whisk hingga tidak ada yang bergerindil. Saring ke wadah lain untuk memastikan adonan telah halus.</li>
        <h3>Langkah 2</h3>
            <li>Siapkan teflon, tuang secukupnya. Ratakan satu teflon dan balik ketika adonan sudah kering dan mulai bergelembung, tanda sudah matang. Lakukan hingga adonan habis.</li>
        <h3>Langkah 3</h3>
            <li>Panaskan sedikit minyak, tumis bumbu halus hingga harum. Masukkan daging ayam, tumis hingga ayam matang. </li>
        <h3>Langkah 4</h3>
            <li>Masukkan wortel dan kentang. Tuang sedikit air untuk membantu bahan cepat matang. Masak hingga air habis dan isian empuk.</li>
        <h3>Langkah 5</h3>   
            <li>Masukkan daun bawang iris tipis, aduk rata, angkat isian dan biarkan dingin. </li>
        <h3>Langkah 6</h3>   
            <li>Campurkan semua bahan perekat hingga tidak ada yang bergerindil, masak hingga mengental dan matang. Gunakan api kecil agar tidak cepat gosong.</li>
        <h3>Langkah 7</h3>   
            <li>Siapkan loyang, lapisi dengan kertas roti. Letakkan kulit, beri isian ayam, potongan telur dan tuang bahan perekat. Tutup dengan kulit.</li>
        <h3>Langkah 8</h3>   
            <li>Lakukan terus hingga berlapis-lapis. Kukus wadai ipau selama 20 menit.</li>
        <h3>Langkah 9</h3>   
            <li>Sambil menunggu ipau matang, buat sausnya. Campur semua bahan, aduk hingga tidak ada yang bergerindil. Masak hingga matang, tes rasa, jika sudah pas, angkat.</li>
        <h3>Langkah 10</h3>   
            <li>Keluarkan wadai ipau dari loyang, sajikan dengan saus yang dituang di atasnya dan tabur dengan daun seledri dan bawang goreng. Potong-potong dan nikmati.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Ipau;