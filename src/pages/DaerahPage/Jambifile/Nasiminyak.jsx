import React from 'react';

function Nasiminyak() {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="recipe-page-container">
      <h2 className="recipe-title-page">Nasi Minyak</h2>

      <div className="recipe-description">
        <p>
         Nasi minyak adalah salah satu sajian otentik Jambi, yang biasanya dijadikan hidangan untuk acara-acara tertentu. Meski namanya nasi minyak, Nasi minyak tidak oily dan punya aroma khas menggugah selera.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-image">
          <img src="/gallery/jambi/nasi_minyak.jpg"/>
        </div>

        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>2 kg beras </li>
            <li>2 kaleng susu bear brand</li>
            <li>260 gram saos tomat</li>
            <li>5 sdt garam halus</li>
            <li>3 sdt kaldu jamur</li>
            <li>2 bungkus minyak Samin (400 gram)</li>
            <li>60 gram minyak sayur</li>
            <li>Bahan B, haluskan</li>
            <li>200 gram bawang merah</li>
            <li>40 gram bawang putih</li>
            <li>5 sdm minyak sayur</li>
            <li>Bahan C</li>
            <li>1 tangkai daun bawang, iris</li>
            <li>2 buah bawang bombay, iris tipis</li>
            <li>1 buah nanas (400 gram) blender</li>
            <li>10 gram jahe, geprek</li>
            <li>10 gram lengkuas, geprek</li>
            <li>5 gram daun kari</li>
            <li>Bahan D</li>
            <li>650 ml air</li>
            <li>5 buah kapulaga</li>
            <li>2 cm kayu manis</li>
            <li>5 butir cengkeh</li>
            <li>5 buah kembang pala</li>
            <li>5 buah kembang Lawang</li>
            <li>1/2 sdt adas manis</li>
            <li>1/4 sdt jinten</li>
          </ul>
        </div>
      </div>

      <div className="recipe-tutorial">
        <h2>Tutorial</h2>
        <ul>
        <h3>Langkah 1</h3>
            <li>Blender halus bawang merah, bawang putih dan 5 sdm minyak goreng, sisihkan.</li>
        <h3>Langkah 2</h3>
            <li>potong daun bawang, iris halus bawang bombay, cincang halus nanas yang sudah matang lebih enak diblender</li>
        <h3>Langkah 3</h3>
            <li>Geprek jahe dan lengkuas. Geprek bumbu rempah</li>
        <h3>Langkah 4</h3>
            <li>Kita rebus bahan D, sampai benar2 mendidih</li>
        <h3>Langkah 5</h3>   
            <li>Setelah air dan rempah mendidih dan keluar harumnya, kemudian kita saring rempahnya. untuk airnya akan kita pakai untuk mengaron beras. setengah sisa rempahnya akan kita pakai untuk aron nasi kemudian setengah sisa rempahnya kita masukan kedal;am air kukusan nasi</li>
        <h3>Langkah 6</h3>   
            <li>Kita masukkan 1/2 sisa rempah tadi untuk mengukus nasi, jika nasi buru2 kita pakai sebelum mengaron beras, kita bisa menghidupkan kukusan untuk mengukus nasi, hidupkan dengan api kecil saja. Jika tidak buru2 silahkan hidupkan kukusan setelah nasi selesai di aron</li>
        <h3>Langkah 7</h3>   
            <li>Masukkan 60 ml minyak goreng dan 2 bungkus minyak Samin, biarkan minyak Samin meleleh dan tunggu hingga minyak panas, Setelah panas tumis bawang merah dan bawang putih yg sudah dihaluskan tadi. Tumis hingga harum.</li>
        <h3>Langkah 8</h3>   
            <li>Setelah tumisan bawang harum masukkan 1/2 sisa rempah tadi, irisan bawang Bombay, daun bawang, garam halus, kaldu jamur, aduk rata.</li>
        <h3>Langkah 9</h3>   
            <li>Note : masak dengan api besar sambil terus di adukMasukkan daun kari, susu bear brand dan saos tomat. Aduk lagi.</li>
        <h3>Langkah 10</h3>   
            <li>Masukkan air rebusan rempah tadi dan juga beras yang sudah dicuci bersih. Dibagian ini bisa icip rasa ya.</li>
        <h3>Langkah 11</h3>   
            <li>Aron/aduk terus beras hingga air menyusut, ketika air sudah mulai menyusut boleh kecilkan api agar tidak mudah gosong.</li>
        <h3>Langkah 12</h3>   
            <li>Setelah beras sudah selesai di aron, beras bisa langsung dikukus.</li>
        <h3>Langkah 13</h3>   
            <li>1. Lama pengukusan sesuaikan dengan kompor dan kukusan masing2 ya, bisa tes icip nasinya apakah udah mateng.
2. Ketika nasi dikukus sering bolak balik nasi agar matang merata.
3. Susu bear brand bisa diganti dengan susu evaporasi agar rasa lebih enak, gurih dan lemak (kalo kato wong Palembang).
4. Sebagusnya gunakan kuali yg tebal karena mengaron nasi pakai api besar, agar tidak mudah gosong.
5. Sebaiknya nanas diblender agar lebih meresap ke nasi
</li>
        </ul>
      </div>

      <button className="btn" onClick={goBack}>
        Back
      </button>
    </div>
  )
}

export default Nasiminyak;