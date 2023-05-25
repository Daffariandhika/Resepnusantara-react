import React from 'react';

function Satelilit() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Lilit</h2>

      <div className="recipe-description">
        <p>
        Beberapa daerah di Indonesia memiliki kuliner berupa sate. Begitu juga dengan Bali yang memiliki sate lilit yang memiliki keunikan dibandingkan sate lainnya.

Sate lilit terbuat dari daging ayam atau ikan yang digiling. Daging ini kemudian dicampur dengan parutan kelapa dan dililit pada batang bambu atau sereh.

        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/bali/satelilit.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>250 gr daging ayam giling</li>
            <li>30 ml santan</li>
            <li>6-10 batang sereh</li>
            <li>3 sdm minyak kelapa</li>
            <li>2 lembar daun salam</li>
            <li>1/4 lada bubuk</li>
            <li>1/2 sdt garam</li>
            <li>1/2 sdt gula pasir</li>
            <li>10 siung bawang merah</li>
            <li>5 siung bawang putih</li>
            <li>3 cm kunyit</li>
            <li>4 cm lengkuas</li>
            <li>1 cm jahe</li>
            <li>1 cm kencur</li>
            <li>3 buah cabai keriting</li>
            <li>3 butir kemiri</li>
            <li>1 batang sereh iris halus</li>
            <li>3 lembar daun jeruk</li>
            <li>10 cabai rawit</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Haluskan daging ayam. Saya ambil bagian paha dan dada lalu pakai chopper.</li>
        <h3>Langkah 2</h3>
            <li>Siapkan semua bumbu. Haluskan base genep. Saya haluskan dengan blender dengan ditambah 3 sdm minyak kelapa.</li>
        <h3>Langkah 3</h3>
            <li>Tumis base genep dengan api sedang supaya tidak bau langu.</li>
        <h3>Langkah 4</h3>
            <li>Tambahkan daun salam. Tumis sampai mengeluarkan minyak.</li>
        <h3>Langkah 5</h3>   
            <li>Campurkan base genep pada daging ayam giling.</li>
        <h3>Langkah 6</h3>   
            <li>Tambahkan santan, garam, gula pasir dan lada bubuk pada adonan ayam giling dan base genep. Aduk </li>
        <h3>Langkah 7</h3>   
            <li>Jika ingin koreksi rasa, ambil sedikit adonan, masak di teflon, kemudian diicip lalu koreksi pada adonan.</li>
        <h3>Langkah 8</h3>   
            <li>Setelah rasa sesuai, lilit adonan pada batang serai untuk membuat sate.</li>
        <h3>Langkah 9</h3>   
            <li>Masak sate lilit pada teflon dengan api sedang. Bolak-balik agar matang merata.</li>
        <h3>Langkah 10</h3>   
            <li>Sate lilit ayam siap dihidangkan. Lebih nikmat dengan sambal matah atau sambal embe atau sesuai selera sambal.</li>
        </ul>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Awalnya, makanan ini merupakan makanan khas masyarakat Klungkung, namun Sate Lilit mulai tersebar di daerah Badung, Gianyar, dan Denpasar. Sate Lilit ini merupakan makanan yang wajib ada saat upacara adat di Bali dijadikan sebagai persembahan atau sesaji penghormatan kepada dewa.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Satelilit;