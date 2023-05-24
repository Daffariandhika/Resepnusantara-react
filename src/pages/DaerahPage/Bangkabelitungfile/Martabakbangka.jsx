import React from 'react';

function Martabakbangka() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Martabak Bangka</h2>

      <div className="recipe-description">
        <p>
        Martabak Bangka memiliki cita rasa yang manis hingga banyak orang yang menyebut martabak ini sebagai martabak manis. Kuliner khas Bangka ini dibuat dari tepung terigu dan mentega yang kemudian dibuat adonan bulat membentang. Di bagian atas adonan tepung yang sudah mengembang ini nantinya dapat diberi banyak topping seperti keju, kacang tanah, meises, susu kental manis, dan juga wijen.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/belitung/martabakbangka.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>100 gr gula pasir</li>
            <li>400 gr terigu segitiga</li>
            <li>2 telur</li>
            <li>1 sdt baking powder</li>
            <li>1 sdt soda kue</li>
            <li>1 sdt garam</li>
            <li>500 ml air (350+150)</li>
            <li>1/2 sdt vanilly</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Campurkan bahan kering kecuali baking powder (terigu,gula, soda,garam) di baskom</li>
        <h3>Langkah 2</h3>
            <li>Masukan air 350 ml, aduk pakai whisk sampai berbuih</li>
        <h3>Langkah 3</h3>
            <li>Diamkan 30 menit</li>
        <h3>Langkah 4</h3>
            <li>Setelah 30 menit, panaskan cetakan martabak, tambahkan air sisa yg 150 ml juga 2 butir telur dan baking powder, mixer sebentar dengan kecepatan 1</li>
        <h3>Langkah 5</h3>   
            <li>Setelah cetakan panas tuangkan adonan ke cetakan tunggu sampai keluar buih2 tanda martabaknya bersarang jangan dulu ditutup</li>
        <h3>Langkah 6</h3>   
            <li>Setelah berbuih semua dan agak kering tabur gula pasir, lalu tutup dan tunggu sampai matang sempurna</li>
        <h3>Langkah 7</h3>   
            <li>Angkat, oles butter/margarin di permukaan martabak, beri topping dan susu kental manis, potong dan lipat, olesi permukaan luar dengan butter/margarin lalu potong2.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Tidak banyak yang tahu asal usul Martabak Manis Bangka, camilan favorit nasional. Ternyata, asalnya dari Kepulauan Bangka Belitung. Masyarakat lokal menyebutnya sebagai Hok Lo Pan. Para penambang timah dari suku Hakka, China datang ke area Bangka. Pada zaman dulu, mereka kerap membuatnya sebagai jajanan tradisional. Hok Lo Pan sendiri mempunyai arti kue orang Hok Lo, kemudian diterjemahkan bebas dengan sebutan Martabak Bangka.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Martabakbangka;