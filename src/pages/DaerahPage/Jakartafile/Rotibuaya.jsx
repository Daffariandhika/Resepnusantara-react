import React from 'react';

function Rotibuaya() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Roti Buaya</h2>

      <div className="recipe-description">
        <p>
        Roti buaya adalah makanan khas Jakarta yang kerap disajikan saat upacara adat terutama ketika prosesi acara pernikahan tradisional orang Betawi
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jakarta/roti_buaya.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>300 gr terigu protein tinggi</li>
            <li>40 gr gula pasir</li>
            <li>1/4 sdt garam</li>
            <li>160 ml susu cair dingin</li>
            <li>1 kuning telur</li>
            <li>4-5 gr ragi</li>
            <li>50 gr butter</li>
            <li>Olesan(campur merata):</li>
            <li>1 butir telur</li>
            <li>1 sdm susu cair</li>
            <li>Isian:</li>
            <li>Chococip</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Aktifkan ragi dulu dgn air hangat atau bisa juga langsunCampurkan terigu,kuning telur,susu cair,gula dan ragi hingga rata.Tambahkan butter dan garam.uleni hingga kalis</li>
        <h3>Langkah 2</h3>
            <li>Tutup adonan dgn plastik wrap/serbet bersih selama 1jam.Setelah 1jam,adonan akan mengembang 2x lipat.tinju2 adonan</li>
        <h3>Langkah 3</h3>
            <li>Bagi adonan menjadi 3 (badan,dan kaki kaki buaya)kaki:@25gr sisanya utk badan buaya</li>
        <h3>Langkah 4</h3>
            <li>Mulai membentuk dr kaki.plintir2 adonan hingga memanjang,lalu letakkan diloyang.bgtu juga badan buaya,plintir2 hingga membentuk panjang.sesuaikan utk bagian kepala kita bentuk agak pendek dan lebar,sedangkan bagian ekor panjang dan semakin mengecil. butuh imajinasi sendiri kalo step ini. buka sedikit bagian punggung buaya,lalu beri isian chococip lalu rapatkan Kembali.</li>
        <h3>Langkah 5</h3>   
            <li>Setelah buaya terbentuk,kita buat kulit2 kasar buaya dgn bantuan gunting.kita gunting kecil2 sibuaya dr badan hingga ekor.lalu beri mata dgn chococip</li>
        <h3>Langkah 6</h3>   
            <li>Panaskan oven.panggang roti buaya selama 20menit suhu 180°C atau sesuaikan oven masing2.</li>
        <h3>Langkah 7</h3>   
            <li>Krn pake oven tangkring,rajin2lah memutar loyang dan memindah letak loyang nya ya agar warna di buaya cantik.setelah 10menit,keluarkan roti buaya beri olesan.lalu panggang lagi pindah di rak paling atas.setiap 5menit sy putar loyang agar warna permukaan si roti buaya berwarna coklat merata</li>
        <h3>Langkah 8</h3>   
            <li>Hasil akhir,si buaya warnanya coklat merata</li>
        </ul>
      </div>

     

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Rotibuaya;