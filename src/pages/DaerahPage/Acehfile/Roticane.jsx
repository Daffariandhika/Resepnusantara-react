import React from 'react';

function Roticane() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Roti Cane</h2>

      <div className="recipe-description">
        <p>
        Hidangan roti cane menjadi sangat populer di Aceh dan menjadi makanan yang biasa dijual di warung-warung dan pasar-pasar tradisional. Roti cane kemudian menyebar ke seluruh Indonesia dan menjadi salah satu makanan khas yang terkenal dari Aceh. Saat ini, roti cane menjadi salah satu ikon kuliner Aceh dan menjadi hidangan wajib yang harus dicoba ketika berkunjung ke Aceh.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/aceh/roti-cane.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>180 gr Tepung terigu protein tinggi</li>
            <li>10 gr Krimer nabati/ susu bubuk</li>
            <li>2 sdm minyak goreng</li>
            <li>1/2 butir telur</li>
            <li>1/4 sdt garam</li>
            <li>60 ml Air</li>
            <li>Secukupnya Mentega/ Margarin untuk olesan</li>
            <li>Secukupnya Minyak goreng untuk merendam</li>
            <li>Sesuai selera Topping</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Siapkan seluruh bahan dan alat</h3>
            <li>Siapkan wadah, masukkan tepung terigu, krimer, garam, minyak sayur, telur dan air aduk rata ulen sampai kalis</li>
            <li>Bagi adonan menjadi 5 bagian sama rata. Bulat2kan rendam dengan minyak sayur/goreng selama 1 jam atau lebih.</li>
            <li>Setelah satu jam, ambil satu buah adonan lalu dilebarkan dengan rolling pin sampai tipis atau cukup dengan jari2 tangan saja. lalu oles dengan mentega secukupnya, Iris2 dg pisau</li>
        <h3>Selanjutnya</h3>
            <li>Lalu gulung memanjang, dari kiri kearah dalam dan dari kanan kearah dalam. ketemu 2 gulungan di ditengah, kemudian gulung lagi bagian ujungnya berlawanan arah</li>
            <li>Lalu tumpuk menyerupai koNde. Diamkan 10 menit</li>
            <li>Pipihkan adonan dg tangan. Panaskan teflon beri sedikit margarin panggang roti sampai bagian bawah coklat lalu balik panggang lagi sampai kecoklatan. Angkat lalu bungkus kain bersih dan remas</li>
        <h3>Sajikan dengan toppingnya</h3>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Roti cane adalah salah satu makanan khas Aceh yang terkenal dan populer. Sejarah roti cane berasal dari pengaruh masakan India yang masuk ke Aceh pada abad ke-17 melalui perdagangan rempah-rempah. Pada masa itu, Aceh merupakan pusat perdagangan rempah-rempah yang strategis dan banyak didatangi oleh para pedagang dari berbagai negara, termasuk India.

Roti cane diperkenalkan oleh para pedagang India yang membuka toko roti di Aceh pada abad ke-17. Awalnya roti ini dibuat dengan bahan-bahan sederhana seperti tepung, air, dan garam, kemudian diolah dengan cara dipukul-pukul dan dilipat-lipat untuk menghasilkan tekstur yang lembut dan renyah.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Roticane;