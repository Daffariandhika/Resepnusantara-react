import React from 'react';

function Bakpia() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bakpia</h2>

      <div className="recipe-description">
        <p>
        Bakpia adalah sejenis makanan ringan atau kue tradisional yang berasal dari Yogyakarta dan menjadi salah satu makanan khas dari kota tersebut. Bakpia terbuat dari adonan tepung terigu yang diisi dengan berbagai jenis isian, seperti kacang hijau, wijen, keju, cokelat, dan buah-buahan.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/bakpia.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr tepung terigu</li>
            <li>150 gr margarin</li>
            <li>100 ml air hangat</li>
            <li>50 gr gula halus</li>
            <li>Isian bakpia (sesuai selera)</li>
            <li>Telur untuk olesan</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Untuk membuat adonan kulit, campurkan tepung terigu dan margarin dalam wadah. Remas-remas dengan tangan hingga tercampur rata dan berbutir-butir.</li>
            <li>Tambahkan air sedikit-sedikit sambil terus diuleni hingga adonan bisa dipulung dan tidak lengket di tangan.</li>
            <li>Diamkan adonan selama 15-20 menit.</li>
            <li>Setelah membuat adonan kulit, ambil sejumput adonan kulit dan pipihkan dengan tangan hingga membentuk lingkaran tipis.</li>
            <li>Letakkan isian bakpia di tengah adonan dan rapatkan hingga membentuk bulat atau segi empat.</li> 
            <li>Ulangi langkah ini hingga adonan habis.</li> 
            <li>Panaskan oven pada suhu 180 derajat Celsius.</li>
            <li>Letakkan bakpia di atas loyang yang telah diolesi dengan sedikit margarin atau diolesi dengan kertas roti.</li>
            <li>Olesi permukaan bakpia dengan telur untuk memberikan kilauan saat dipanggang.</li>
            <li>Panggang bakpia dalam oven selama 25-30 menit atau hingga matang dan berwarna keemasan.</li>
            <li>Angkat dan biarkan dingin sebelum disajikan.</li> 
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Bakpia dapat ditelusuri hingga abad ke-20, saat imigran Tionghoa pertama kali membawa resep kue ini dari Tiongkok ke Indonesia. Bakpia awalnya dikenal sebagai "Hopia" dalam bahasa Tionghoa, dan kemudian disesuaikan dengan cita rasa dan bahan-bahan lokal di Yogyakarta.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Bakpia;