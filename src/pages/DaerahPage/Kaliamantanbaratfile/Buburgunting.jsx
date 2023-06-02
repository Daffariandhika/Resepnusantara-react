import React from 'react';

function Buburgunting() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Bubur Gunting</h2>

      <div className="recipe-description">
        <p>
        Bubur Gunting adalah bubur khas yang berasal dari Kota Singkawang, Kalimantan Barat. Bubur Gunting adalah cakwe atau roti goreng yang disajikan di dalam mangkuk kecil lengkap dengan kuah kental kacang hijau.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/kalimantanbarat/bubutgunting.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>200 gram kacang hijau kupas</li>
            <li>1 liter air</li>
            <li>4 sdm tepung tapioka</li>
            <li>4 lembar daun pandan</li>
            <li>4 sdm gula pasir</li>
            <li>1 sdt garam</li>
            <li>sejumput vanili</li>
            <li>Bahan cakwe:</li>
            <li>250 gr tepung terigu</li>
            <li>150 ml air</li>
            <li>1 sdt garam</li>
            <li>1 sdm minyak goreng</li>
            <li>1 sdt ragi</li>
            <li>1/2 sdt baking powder</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Untuk membuat cakwe, campurkan terigu, ragi, garam dan baking powder. Tuang air sedikit demi sedikit sambil diaduk merata.</li>
        <h3>Langkah 2</h3>
            <li>ika air sudah masuk semua, uleni adonan sampai tercampur merata. Tuang minyak dan uleni kalis. Tutup wadah dan diamkan selama 30 menit.</li>
        <h3>Langkah 3</h3>
            <li>Setelah 30 menit, gilas adonan, bagi-bagi menjadi beberapa bagian sama besar. Gilas lagi hingga memanjang, tumbuh dua lapisan. Goreng hingga matang kecokelatan. Angkat dan tiriskan.</li>
        <h3>Langkah 4</h3>
            <li>Untuk membuat bubur, rendam kacang hijau kupas selama semalam agar empuk. Tiriskan dan cuci bersih. Kukus selama 10 menit. </li>
        <h3>Langkah 5</h3>   
            <li>Rebus air, masukkan daun pandan gula pasir dan sejumput garam, aduk lagi hingga larut dan mendidih. Angkat daun pandan yang ikut direbus.</li>
        <h3>Langkah 6</h3>   
            <li>Larutkan tapioka dengan 200 ml air, tuang ke dalam kuah mendidih sedikit demi sedikit sambil diaduk rata agar tidak menggumpal. Aduk rata hingga mengental.</li>
        <h3>Langkah 7</h3>   
            <li>Tes rasa, jika sudah pas gurihnya, tuang kacang hijau ke dalamnya. Aduk rata, angkat.
Sajikan bubur kacang hijau di mangkuk dengan cakwe yang sudah digunting-gunting di atasnya.</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Buburgunting;