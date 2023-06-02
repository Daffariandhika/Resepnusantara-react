import React from 'react';

function Sateklathak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Sate Klathak</h2>

      <div className="recipe-description">
        <p>
        Sate Klathak terdiri dari potongan daging sapi atau kambing yang ditusuk menggunakan bambu atau tusuk sate, kemudian dipanggang di atas bara api terbuka. Daging sate ini memiliki tekstur yang empuk dan beraroma sedap.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/yogyakarta/sate-klathak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>500 gr daging sapi atau kambing</li>
            <li>Tusuk sate secukupnya</li>
            <li>Minyak goreng secukupnya</li>
            <li>5 siung bawang putih</li>
            <li>5 butir kemiri</li>
            <li>2 cm jahe</li>
            <li>2 cm kunyit</li>
            <li>2 cm lengkuas</li>
            <li>1 batang serai, memarkan</li>
            <li>1 sdt ketumbar bubuk</li>
            <li>1 sdt garam</li>
            <li>1 sdt merica bubuk</li>
            <li>1 sdt gula pasir</li>
            <li>100 gr kacang tanah, sangrai dan haluskan</li>
            <li>2 siung bawang putih, haluskan</li>
            <li>2 sdm kecap manis</li>
            <li>1 sdm air asam jawa</li>
            <li>Air secukupnya</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ol>
            <li>Siapkan tusuk sate/bambu, rendam dalam air agar tidak gosong saat dipanggang.</li>
            <li>Haluskan semua bahan bumbu klathak dengan menggunakan blender atau ulek dengan cobek hingga halus.</li>
            <li>Panaskan minyak dalam wajan, tumis bumbu klathak hingga harum dan matang. Angkat dan sisihkan.</li>
            <li>Tusukkan potongan daging sapi atau kambing pada tusuk sate/bambu.</li>
            <li>Oleskan bumbu klathak yang sudah ditumis pada daging sate secara merata. Diamkan selama 1 jam agar bumbu meresap.</li> 
            <li>Siapkan panggangan atau grill, panggang sate klathak di atas bara api hingga matang dan berwarna kecokelatan.</li> 
            <li>Selama proses memanggang, oleskan sisa bumbu klathak secara berkala agar sate tidak kering.</li>
            <li>Sementara itu, siapkan bumbu kacang dengan mencampurkan kacang tanah yang sudah dihaluskan, bawang putih, kecap manis, air asam jawa, dan air secukupnya hingga membentuk saus yang kental.</li>
            <li>Angkat sate klathak dari panggangan, sajikan dengan lontong, irisan mentimun, bawang merah, dan sambal kacang.</li>
            <li>Sate Klathak siap disajikan. Nikmati dengan menikmati kelezatan daging sate yang empuk dan cita rasa bumbu klathak yang khas.</li>
        </ol>
      </div>

      <div className="recipe-history">
        <h2>History</h2>
        <p>
        Sejarah Sate Klathak dapat ditelusuri hingga abad ke-19, ketika kerbau atau sapi banyak digunakan sebagai hewan pekerja dalam pertanian dan transportasi di daerah Yogyakarta. Para pekerja atau petani yang menggunakan kerbau atau sapi tersebut seringkali memiliki sisa daging yang tidak digunakan. Untuk menghindari pemborosan, mereka kemudian menciptakan cara untuk memanfaatkan sisa daging tersebut dengan membuat sate menggunakan potongan daging dari bagian punggung atau sekitar tulang belakang hewan tersebut.
        </p>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Sateklathak;