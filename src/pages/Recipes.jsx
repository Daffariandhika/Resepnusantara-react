import React, { useState } from "react";
import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";

export const recipes = [
  { // Menu Daerah Yogyakarta // 
    province: "Yogyakarta",
    title: "Gudeg",
    image: "/gallery/yogyakarta/gudeg.jpg",
    desc: "Makanan khas Yogyakarta terkenal bercita rasa manis gurih",
    path: "/Gudeg",
  },
  {
    province: "Yogyakarta",
    title: "Sate Klathak",
    image: "/gallery/yogyakarta/sate-klathak.jpg",
    desc: "Sate ini sangat berbeda dari ragam sate lainnya, Tusukan yang dipakai untuk memanggang terbuat dari besi, Tusukan besi sebagai konduktor penghangat akan membuat daging lebih masak dari bagian dalam.",
  },
  {
    province: "Yogyakarta",
    title: "Bakmi Jawa",
    image: "/gallery/yogyakarta/bakmi-jawa.jpg",
    desc: "Bakmi Jawa merupakan salah satu makanan khas khususnya di wilayah Yogyakarta dan sekitarnya. Bakmi Jawa atau Mi Jawa dahulu dikenal dengan istilah bakmi rebus atau dalam bahasa jawa disebut dengan Bakmi godhog.",
  },
  {
    province: "Yogyakarta",
    title: "Soto Lenthok",
    image: "/gallery/yogyakarta/soto-lenthok.jpg",
    desc: "soto lenthok adalah makanan yang khas dari Yogyakarta. Makanan khas Yogyakarta ini memiliki ciri khas disantap dengan lenthok atau singkong goreng yang sudah dibentuk lonjong.",
  },
  {
    province: "Yogyakarta",
    title: "Es Dawet",
    image: "/gallery/yogyakarta/es-dawet.jpg",
    desc: "Es Dawet merupakan minuman khas Jawa yang terbuat dari tepung beras ataupun tepung beras ketan, disajikan dengan es parut serta gula merah cair dan santan. minuman ini memiliki rasa yang manis dan gurih.",
  },
  {
    province: "Yogyakarta",
    title: "Ayam Goreng Kalasan",
    image: "/gallery/yogyakarta/ayam-kalasan.jpg",
    desc: "Ayam goreng Kalasan atau ayam Kalasan merupakan salah satu makanan khas Yogyakarta. Sesuai namanya, ayam goreng ini berasal dari daerah Kalasan, Sleman, Yogyakarta. Ayam goreng Kalasan mempunyai cita rasa gurih yang dipandu dengan rempah-rempah khas Indonesia.",
  },
  {
    province: "Yogyakarta",
    title: "Jadah Tempe",
    image: "/gallery/yogyakarta/jadah-tempe.jpg",
    desc: "Jadah biasanya dimakan bersamaan dengan tempe, jadi kita bisa menyebutnya jadah tempe. Jadah tempe merupakan nama gabungan dari dua jenis makanan, yaitu jadah yang terbuat dari beras ketan sedangkan tempe yang terbuat dari kedelai yang di olah dengan cara di bacem.",
  },
  // Batas Menu Yogyakarta //


  { // Menu Daerah Jawa Tengah //
    province: "Jawa Tengah",
    title: "Klepon",
    image: "/gallery/jawatengah/klepon.jpg",
    desc: "kue manis kenyal berisi gula merah yang lumer ketika digigit",
  },
  {
    province: "Jawa Tengah",
    title: "Nasi Tiwul",
    image: "/gallery/jawatengah/nasi-tiwul.jpg",
    desc: "nasi yang di tiwul-tiwul",
  },
  // Batas Menu Jawa Tengah //

  { // Menu Daerah Jambi //
    province: "Jambi",
    title: "Daging Masak Itam",
    image: "/gallery/jambi/daging_masakitam.jpg",
    desc: "Kuliner berbahan dasar daging sapi ini seperti yang sudah diduga, menggunakan kecap manis untuk bumbu hitamnya. Perpaduan rasa gurih manis yang berpadu rempah-rempah Nusantara.",
  },
  {
    province: "Jambi",
    title: "Gulai Tepek Ikan",
    image: "/gallery/jambi/gulai_tepek.jpg",
    desc: "Gulai tepek ini sangat unik karena dibuat dari bahan utama berupa bakso ikan (fishcake) dan nanas yang dipotong-potong kotak dan dibumbui dengan bumbu gulai.",
  },
  {
    province: "Jambi",
    title: "Kerutup Ikan",
    image: "/gallery/jambi/kerutup_ikan.jpg",
    desc: "Olahan berbahan dasar ikan segar yang dimasak dengan balutan daun pisang dan dibumbui dengan rempah yang kuat menghilangkan rasa amis ikan.",
  },
  {
    province: "Jambi",
    title: "Kue Padamaran",
    image: "/gallery/jambi/kue_padamaran.jpg",
    desc: "Kue padamaran mungkin bisa jadi alternatif kue sederhana namun enak untuk dibuat sendiri di rumah. Kue padamaran adalah kue tradisional dari Jambi yang sekilas mirip dengan kue talam.",
  },
  {
    province: "Jambi",
    title: "Lakso Jambi",
    image: "/gallery/jambi/lakso_jambi.jpg",
    desc: "Lakso merupakan makanan warisan Melayu yang bisa ditemukan di Jambi dan beberapa daerah di Sumatera. Lakso menyerupai mi yang dibuat dari tepung sagu.",
  },
  {
    province: "Jambi",
    title: "Nasi Minyak",
    image: "/gallery/jambi/nasi_minyak.jpg",
    desc: "Nasi minyak adalah salah satu sajian otentik Jambi, yang biasanya dijadikan hidangan untuk acara-acara tertentu. Meski namanya nasi minyak, nasi minyak tidak oily dan punya aroma khas menggugah selera.",
  },
  {
    province: "Jambi",
    title: "Sambal Kweni",
    image: "/gallery/jambi/sambal_kweni.jpg",
    desc: "Orang Jambi menggunakan mangga kweni karena memiliki aroma harum, rasa asam yang khas dan tekstur dagingnya lembut dan padat. Sambal kweni paling cocok dijadikan sebagai pendamping santapan ikan bakar dan hidangan bakar-bakaran lainnya.",
  },
  {
    province: "Jambi",
    title: "Sate Ikan Khas Jambi",
    image: "/gallery/jambi/sate_ikan.jpg",
    desc: "Sate ikan khas Jambi tidak diolah dengan ditusuk dan dibakar, melainkan dengan menghaluskan daging ikan, lalu dibungkus daun pisang dan direbus.",
  },
  {
    province: "Jambi",
    title: "Sate Tempe Rangkayo Hitam",
    image: "/gallery/jambi/sate_tempe.jpg",
    desc: "Tempe yang direndam rempah-rempah perpaduan bumbu ini membuat tempe menjadi lebih gurih dan beraroma nikmat. Sementara warna hitamnya merupakan campuran kecap manis. ",
  },
  {
    province: "Jambi",
    title: "Tempoyak Ikan",
    image: "/gallery/jambi/tempoyak_ikan.jpg",
    desc: "Tempoyak adalah hasil fermentasi dari buah durian. Ya, Jambi memang salah satu daerah penghasil durian. Di Jambi, ikan patin diolah dengan tempoyak yang dicampur rempah-rempah Cita rasanya segar dan nikmat, perpaduan antara rasa pedas, manis dan asam yang menyatu.",
  },
  // Batas Menu Jambi


  { // Menu Daerah Aceh //
    province: "Aceh",
    title: "Nasi Gurih",
    image: "/gallery/aceh/nasi-gurih.jpg",
    desc: "Sejenis nasi uduk yang berasal dari aceh, perbedaan terletak pada lauk yang dipakai yang biasanya terdapat kari ayam atau rendang",
  },
  {
    province: "Aceh",
    title: "Roti Cane",
    image: "/gallery/aceh/roti-cane.jpg",
    desc: "hidangan Aceh yang diinfluensi budaya India. berbahan dasar tepung cocok untuk dijadikan makanan pokok ",
  },
  {
    province: "Aceh",
    title: "Soto Aceh",
    image: "/gallery/aceh/soto-aceh.jpg",
    desc: "Hidangan kuah kaya rempah khas aceh yang menyegarkan dan terasa berani karena perpaduan santan dan sambal",
  },
  {
    province: "Aceh",
    title: "Sate Matang",
    image: "/gallery/aceh/sate-matang.jpg",
    desc: "Sate khas aceh dengan potongan daging yang tebal yang disajikan dengan sambal kacang yang khas gurih pedas",
  },
  {
    province: "Aceh",
    title: "Timphan",
    image: "/gallery/aceh/timphan.jpg",
    desc: "kue legit berbahan dasar tepung beras dan dapat diisi dengan berbagai macam toping manis",
  },
  {
    province: "Aceh",
    title: "Ayam Tangkap",
    image: "/gallery/aceh/ayamtangkap.jpg",
    desc: "Ayam yang digoreng dengan rempah dan daun pandan, memadukan gurihnya ayam dan aroma rempah dan daun pandan yang kuat",
  },
  {
    province: "Aceh",
    title: "Gulai Keueng",
    image: "/gallery/aceh/gulaikeueng.jpg",
    desc: "Gule Masam Keeung atau gulai asam pedas adalah hidangan khas Aceh yang terkenal dengan rasa pedas, asam, dan gurihnya.",
  },
  {
    province: "Aceh",
    title: "Keumamah",
    image: "/gallery/aceh/keumamah.jpg",
    desc: "salah satu kuliner tradisional masyarakat Aceh yang dibuat dari bahan baku ikan, yaitu tongkol dan cakalang. Keumamah terkenal juga dengan nama ikan kayu karena keras seperti kayu.",
  },
  {
    province: "Aceh",
    title: "Kuah Pliek U",
    image: "/gallery/aceh/kuahpliek-u.jpg",
    desc: "Pliek u merupakan salah satu hidangan yang merangkap sebagai bumbu di Aceh. Pliek u berasal dari ampas kering sisa minyak kelapa tua yang telah melalui beberapa kali proses pemerasan.",
  },
  {
    province: "Aceh",
    title: "Mie Aceh",
    image: "../gallery/aceh/mieaceh.jpg",
    desc: "hidangan khas Aceh yang memiliki cita rasa kaya akan perpaduan rempah Nusantara",
  },
  // Batas Menu Aceh //
  

  { // Menu Daerah Bali //
    province: "Bali",
    title: "Ayam Betutu ",
    image: "/gallery/bali/ayambetutu.jpg",
    desc: "Ayam betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali. Daging ayam yang lembut dipadukan dengan bumbu yang kaya akan rempah.",
  },
  {
    province: "Bali",
    title: "Babi Guling",
    image: "/gallery/bali/babi-guling.jpg",
    desc: "Babi panggang khas bali bercitarasa dominan gurih, kaya akan lemak yang meleleh sehingga lumer di mulut. ",
  },
  {
    province: "Bali",
    title: "Bebek Betutu",
    image: "/gallery/bali/bebekbetutu.jpg",
    desc: "Bebek Betutu juga merupakan salah satu makanan khas Bali yang wajib kamu coba. Hidangan ini menggunakan bahan utama bebek yang dimasak dengan bumbu betutu khas Bali.",
  },
  {
    province: "Bali",
    title: "Sambal Matah",
    image: "/gallery/bali/sambalmatah.jpg",
    desc: "Rasanya yang pedas dari cabai rawit yang diiris kasar dan segar dari Jeruk nipis dipadukan dengan sereh yang aromatik.",
  },
  {
    province: "Bali",
    title: "Sate Kakul",
    image: "/gallery/bali/satekakul.jpg",
    desc: "Sate kaku merupakan kuliner tradisional Bali yang berasal dari daerah Ubud. Sate kakul menggunakan bahan utama berupa siput dan memiliki cita rasa yang khas",
  },
  {
    province: "Bali",
    title: "Sate Lilit",
    image: "/gallery/bali/satelilit.jpg",
    desc: "Sate lilit terbuat dari daging ayam atau ikan yang digiling. Daging ini kemudian dicampur dengan parutan kelapa dan dililit pada batang bambu atau sereh.",
  },
  {
    province: "Bali",
    title: "Jakut Urap",
    image: "/gallery/bali/jakuturap.jpg",
    desc: "Jukut urap sering ditemukan dalam sajian nasi campur. Jukut urap terdiri dari berbagai sayuran yang disiram dengan bumbu khas Bali.",
  },
  {
    province: "Bali",
    title: "Sate Pelecing",
    image: "/gallery/bali/satepelecing.jpg",
    desc: "Sate ini dimasak dengan bumbu khas Bali yang bernama plecing yang terbuat dari kemiri, terasi, tomat, bawang putih, dan beberapa bumbu lainnya.",
  },
  {
    province: "Bali",
    title: "Lempet Ikan",
    image: "/gallery/bali/lempetikan.jpg",
    desc: "Lempet adalah makanan khas Bali yang terbuat dari ikan yang sudah diberi bumbu dan dibungkus dengan daun pisang.",
  },
  {
    province: "Bali",
    title: "Serapah Daging",
    image: "../gallery/bali/serapahdaging.jpg",
    desc: "Serapah adalah sejenis lauk setengah basah yang terbuat dari daging yang dibumbui dengan aneka rempah, santan, dan tepung beras sebagai pengental. ",
  },
  // Batas Menu Bali //


  { // Menu Daerah Belitung //
    province: "Bangka Belitung",
    title: "Kue Rintak",
    image: "/gallery/belitung/kuerintak.jpg",
    desc: "Jenis Kue ini di racik dari bahan baku tepung sagu, santan kental dan telur. Kue nya memang cukup alot namun mempunyai rasa yang enak dan juga otentik.",
  },
  {
    province: "Bangka Belitung",
    title: "Lakso Bangka",
    image: "/gallery/belitung/laksobangka.jpg",
    desc: "Lakso merupakan sebuah kuliner yang diciptakan dari perpaduan antara masakan Melayu dengan Tionghoa. Kuliner ini sendiri terdiri dari mie putih yang berbahan dasar sagu dan tepung beras.",
  },
  {
    province: "Bangka Belitung",
    title: "Lempah Darat",
    image: "/gallery/belitung/lempahdarat.jpg",
    desc: ". Bahan utama membuat sayur ini bisa berbagai macam dan berbeda-beda diantaranya ada daun papaya muda, akar keladi, pucuk idat, dan lain sebagainya. Sayur ini dimasak dengan rempah yang kaya dan kuat.",
  },
  {
    province: "Bangka Belitung",
    title: "Lepet Bangka",
    image: "/gallery/belitung/lepetbangka.jpg",
    desc: "Lapet dari Bangka Belitung dibuat dari beras ketan yang dikukus dalam wadah. Yang uniknya, wadahnya terbuat dari daun kelapa yang masih muda atau janur.",
  },
  {
    province: "Bangka Belitung",
    title: "Lokan",
    image: "/gallery/belitung/lokan.jpg",
    desc: "Lokan adalah kerang yang biasa hidup di daerah rawa atau muara sungai yang berpapasan dengan laut. yang cukup direbus dengan serai dan ada yang dijadikan kuah kuning atau pun bumbu saus tiram. ",
  },
  {
    province: "Bangka Belitung",
    title: "Martabak Bangka",
    image: "/gallery/belitung/martabakbangka.jpg",
    desc: "Makanan manis yang tak pernah salah di lidah masyarakat. dengan toping beraneka ragam membuat ledakan rasa didalam mulut.",
  },
  {
    province: "Bangka Belitung",
    title: "Mie Koba",
    image: "/gallery/belitung/miekoba.jpg",
    desc: "Terdapat satu lagi olahan mie yang berasal dari Bangka Belitung, yaitu mie Koba. Mie Koba merupakan sejenis mie yang di dalamnya terdapat isian ikan tenggiri.",
  },
  {
    province: "Bangka Belitung",
    title: "Otak-otak Bangka",
    image: "/gallery/belitung/otakotakbangka.jpg",
    desc: "Makanan khas Bangka Belitung ini adalah salah satu kuliner yang memanfaatkan hasil laut. Otak-otak dibuat dari campuran daging ikan, tepung dan bumbu-bumbu rempah yang akan menambah kenikmatan cita rasanya.",
  },
  {
    province: "Bangka Belitung",
    title: "Sambelikung",
    image: "/gallery/belitung/sambelikung.jpg",
    desc: "Sambal lingkung adalah sejenis abon atau serundeng yang terbuat dari ikan, santan kelapa, dan rempah-rempah lainnya. Biasanya sambal lingkung dapat dengan mudah dijumpai di momen-momen lebaran.",
  },
  {
    province: "Bangka Belitung",
    title: "Soto Bangka",
    image: "/gallery/belitung/sotobangka.jpg",
    desc: "Meski bumbunya banyak, soto Belitung termasuk sajian sederhana. Soto Belitung biasanya dibuat dengan dua kuah: kuah santan dan kuah bening.",
  },
  {
    province: "Bangka Belitung",
    title: "Lempah Kuning",
    image: "/gallery/belitung/lempah-kuning.jpg",
    desc: "Biasanya lempah kuning terbuat dari ikan kakap merah dan ikan tenggiri. Cara pembuatannya sendiri ikan tersebut dimasak dengan bumbu berwarna kuning yang berasal dari kunyit.",
  },
  {
    province: "Bangka Belitung",
    title: "Lempah Kuning",
    image: "/gallery/belitung/lempah-kuning.jpg",
    desc: "Ikan berkuah kuning bercitarasa gurih asam khas Bangka, dapat menggunakan berbagai macam ikan ",
  },
  // Batas Menu Belitung //


  { // Menu Daerah Banten //
    province: "Banten",
    title: "Angeun Lada",
    image: "/gallery/banten/angeunlada.jpg",
    desc: "Angeun lada termasuk salah satu makanan khas Banten yang sering dijadikan menu saat merayakan hari-hari besar. jika anda menyukai pedas maka makanan ini cocok untuk anda",
  },
  {
    province: "Banten",
    title: "Ketan Bintul",
    image: "/gallery/banten/ketanbintul.jpg",
    desc: "Konon ketan bintul ini sudah menjadi makanan favorit para Sultan Banten sejak zaman dahulu. Bahkan hingga sekarang pun selalu tersaji di meja makan keturunan para Sultan Banten saat Ramadhan.",
  },
  {
    province: "Banten",
    title: "Kue Jojorong",
    image: "/gallery/banten/kuejojorong.jpg",
    desc: "Ciri khas dari makanan khas Banten ini adalah teksturnya yang lembut dan lumer di mulut dengan rasa gurih dan manis. Kue satu ini banyak dijual di pasar tradisional dan sering dijadikan sebagai menu sarapan masyarakat Banten.",
  },
  {
    province: "Banten",
    title: "Laksa",
    image: "/gallery/banten/laksa.jpg",
    desc: "Laksa adalah makanan yang cukup banyak dijumpai, dengan rasa gurih dari rebusan daging dan kuatnya rempah yang bercampur dengan santan sangat meningkatkan selera makan.",
  },
  {
    province: "Banten",
    title: "Leumeung",
    image: "/gallery/banten/leumeung.jpg",
    desc: "Makanan khas Banten untuk oleh-oleh lainnya yang bisa menjadi pilihan adalah leumeung. Kudapan ini terbuat dari beras ketan dan santan.",
  },
  {
    province: "Banten",
    title: "Nasi Bakar Sumsum",
    image: "/gallery/banten/nasibakarsumsum.jpg",
    desc: "Nasi bakar yang telah dicampur rempah dan lemak dari sumsum kemudian dibakar dengan dibalut daun pisang yang menambah aroma khas makanan ini.",
  },
  {
    province: "Banten",
    title: "Pecak Bandeng",
    image: "/gallery/banten/pecakbandeng.jpg",
    desc: "Pecak bandeng adalah salah satu makanan khas Serang, ibu kota Banten, yang bisa dengan mudah  temui di Jakarta. Nah, makanan satu ini umumnya dibuat untuk makanan para petani saat berada di sawah untuk makan siang. Hanya 2 bahan utamanya, yaitu pecak dan ikan bandeng.",
  },
  {
    province: "Banten",
    title: "Sambal Buroq",
    image: "/gallery/banten/sambalburoq.jpg",
    desc: "Sambal buroq yakni hidangan wajib untuk acara besar di daerah Banten. Terutama acara menuju Lebaran Haji. Cocok disantap dengan nasi hangat ataupun nasi bakar sum-sum.",
  },
  {
    province: "Banten",
    title: "Sate Bandeng",
    image: "/gallery/banten/satebandeng.jpg",
    desc: "Sate Bandeng dibuat dari ikan bandeng yang dihilangkan durinya, dagingnya dibumbui dan dimasukkan kembali ke kulitnya, lalu ditusuk atau dijepit tusukan tangkai bambu, lalu dibakar di atas bara arang",
  },
  {
    province: "Banten",
    title: "Sayur Besan",
    image: "/gallery/banten/sayurbesan.jpg",
    desc: "Dinamakan Sayur Besan karena dihidangkan saat pernikahan dari pihak mempelai wanita kepada orang tua mempelai pria",
  },
  // Batas Menu Banten //

  { // Menu Daerah Bengkulu //
    province: "Bengkulu",
    title: "Bagar Hiu",
    image: "/gallery/bengkulu/bagarhiu.jpg",
    desc: "Bagar hiu menjadi salah satu makanan khas Bengkulu yang pernah dicicip oleh presiden pertama Indonesia yakni Ir. Soekarno.",
  },
  {
    province: "Bengkulu",
    title: "Bolu Koja",
    image: "/gallery/bengkulu/bolukoja.jpg",
    desc: "Sama seperti kue bolu pada umumnya, bolu koja memiliki tekstur yang sangat lembut. Namun, uniknya kue bolu ini menggunakan agar-agar sebagai bahan campurannya (walau tak semua).",
  },
  {
    province: "Bengkulu",
    title: "Bubur Sekoi",
    image: "/gallery/bengkulu/bubursekoi.jpg",
    desc: "Makanan khas Bengkulu ini merupakan jenis bubur manis karena dibuat dari bahan dasar biji sekoi atau jewawut yang dimasak dengan santan, jahe, daun pandan, gula pasir, dan gula merah.",
  },
  {
    province: "Bengkulu",
    title: "Gulai Kemba'ang",
    image: "/gallery/bengkulu/gulaikembaang.jpg",
    desc: "Gulai kemba`ang adalah makanan khas Bengkulu yang dibuat dari bahan dasar iga sapi yang dimasak dengan aneka rempah. Gulai kemba’ang memiliki cita rasa yang sangat khas dengan aroma rempah yang cukup tajam.",
  },
  {
    province: "Bengkulu",
    title: "Gulai Pisang",
    image: "/gallery/bengkulu/gulaipisang.jpg",
    desc: "Gulai memang biasanya dibuat dari bahan dasar ayam, ikan, daging, telur, tempe, hingga tahu. Gulai pisang dibuat dari bahan dasar pisang lalu dimasak dengan bumbu gulai.",
  },
  {
    province: "Bengkulu",
    title: "Kue Bay Tat",
    image: "/gallery/bengkulu/kuebaytat.jpg",
    desc: "Bay Tat adalah Kue Tart berukuran besar khas Bengkulu. Makanan ini dipercaya pada zaman dahulu menjadi makanan para raja dan bangsawan Bengkulu.",
  },
  {
    province: "Bengkulu",
    title: "Kue Lepek Biniti",
    image: "/gallery/bengkulu/kuelepekbiniti.jpg",
    desc: "Kue lepek binti merupakan penganan yang terbuat dari bahan dasar ketan dengan isian gilingan daging sapi.",
  },
  {
    province: "Bengkulu",
    title: "Manisan Terong",
    image: "/gallery/bengkulu/manisanterong.jpg",
    desc: "Keunikan hidangan ini ialah terong yang termasuk jenis sayuran sangat jarang dijadikan sebagai manisan karena biasanya olahan manisan dibuat dari bahan dasar buah-buahan.",
  },
  {
    province: "Bengkulu",
    title: "Pendap",
    image: "/gallery/bengkulu/pendap.jpg",
    desc: "Pendap adalah makanan khas Bengkulu yang terbuat dari bahan dasar ikan. Jenis ikan yang digunakan bisa apa saja, yakni ikan air tawar maupun ikan air laut.",
  },
  // Batas Menu Bengkulu //

  {// Menu Daerah Gorontalo //
    province: "Gorontalo",
    title: "Ayam Iloni",
    image: "/gallery/gorontalo/ayam_iloni.jpg",
    desc: "Keunikan ayam bakar iloni terletak pada cara mengolahnya. Jika ayam bakar pada umumnya dipanggang setelah dibersihkan, ayam iloni harus ditambahkan bumbu khas terlebih dahulu sehingga meresap ke dalam daging dan dicampur dengan santan.",
  },
  {
    province: "Gorontalo",
    title: "Bilenthango",
    image: "/gallery/gorontalo/bilenthango.jpg",
    desc: "Keunikan dari kuliner khas Gorontalo satu ini adalah proses pengolahannya yang terletak pada keberadaan daun pisang yang digunakan sebagai alas minyak dan ikan ketika digoreng",
  },
  {
    province: "Gorontalo",
    title: "Binte Biluhuta",
    image: "/gallery/gorontalo/binte_biluhuta.jpg",
    desc: "Sajian binte biluhuta menjadi salah satu makanan khas Gorontalo yang terkenal. Dalam bahasa Indonesia, binte biluhuta berarti jagung yang disiram. ",
  },
  {
    province: "Gorontalo",
    title: "Es Brenebon",
    image: "/gallery/gorontalo/es_brenebon.jpg",
    desc: "Es brenebon sendiri merupakan es kacang merah yang dipadu dengan gula merah dan cokelat. Rasanya manis unik dan menyegarkan.",
  },
  {
    province: "Gorontalo",
    title: "Ilabulo",
    image: "/gallery/gorontalo/ilabulo.jpg",
    desc: "Sekilas mirip sekali dengan otak-otak tapi dibuatnya dari ati ampela ayam, bisa juga ditambahkan jeroan lain dan kulit ayamnya. Rasanya yang khas dengan asin gurih pedas tentu bikin nagih.",
  },
  {
    province: "Gorontalo",
    title: "Kue Karawo",
    image: "/gallery/gorontalo/kue_karawo.jpg",
    desc: "Kue karawo merupakan kue kering yang hanya bisa ditemui di Gorontalo. Layaknya kue kering lainnya, kue karawo juga memiliki aneka varian rasa seperti rasa keju, coklat, kopi, atau strawberry.",
  },
  {
    province: "Gorontalo",
    title: "Kue Sabongi",
    image: "/gallery/gorontalo/kue_sabongi.jpg",
    desc: "Camilan dari bahan singkong ini punya rasa gurih manis yang bikin nagih. Penasaran seperti apa rasanya?",
  },
  {
    province: "Gorontalo",
    title: "Perkedel Nike",
    image: "/gallery/gorontalo/perkedel_nike.jpg",
    desc: "Berbeda dengan perkedel kebanyakan, perkedel khas Gorontalo ini merupakan perkedel yang terbuat dari ikan nike yaitu ikan yang berukuran kecil mirip seperti ikan teri.",
  },
  {
    province: "Gorontalo",
    title: "Sayur Putungo",
    image: "/gallery/gorontalo/sayur_putungo.jpg",
    desc: "lebih umum dikenal sebagai sayur ontong atau jantung pisang di Pulau Jawa. Sayur putungo ini merupakan sajian yang juga menjadi makanan khas Gorontalo",
  },
  {
    province: "Gorontalo",
    title: "Tili Aya",
    image: "/gallery/gorontalo/tili_aya.jpg",
    desc: "kue tili aya yang ternyata bahannya sangat sederhana dan manisnya bikin nagih. Tidak harus pergi ke Gorontalo jika ingin mencicipinya, ini resep kue tili aya yang bisa kamu coba di rumah.",
  },
  // Batas Menu Gorontalo //

  { // Menu Daerah Jakarta //
    province: "Jakarta",
    title: "Rebung asam undak liling",
    image: "/gallery/bengkulu/rebungasamundakliling.jpg",
    desc: "Makanan bersantan ini terbuat dari rebung atau tunas bambu muda. Rebung akan diolah menjadi gulai dan dipadukan dengan keong sawah (liling).",
  },
  {
    province: "Jakarta",
    title: "Asinan Betawi",
    image: "/gallery/jakarta/asinan_betawi.jpg",
    desc: "ciri khas dari asinan betawi adalah penggunaan sawi asin, air gula, serta bumbu kacangnya yang menjadi pembeda diantara asinan lainnya.",
  },
  {
    province: "Jakarta",
    title: "Dodol Betawi",
    image: "/gallery/jakarta/dodol_betawi.jpg",
    desc: "Dodol Betawi bercitarasa manis, berwarna hitam kecoklatan, dan teksturnya yang lengket.Varian rasa dodol Betawi hanya ada 3, yaitu ketan putih, durian, dan ketan hitam.",
  },
  {
    province: "Jakarta",
    title: "Kerak Telor",
    image: "/gallery/jakarta/kerak_telor.jpg",
    desc: "Sajian ini terdiri dari telur dihadapkan pada panas arang hingga jadi mirip kerak dan tampak agak gosong, lalu diberi bawang goreng dan serundeng.",
  },
  {
    province: "Jakarta",
    title: "Ketoprak",
    image: "/gallery/jakarta/ketoprak.jpg",
    desc: "Ketupat yang dicampur berbagai sayur dan dibalut dengan saus kacang yang didominasi rasa manis dari kecap dengan pelengkap taburan bawang merah.",
  },
  {
    province: "Jakarta",
    title: "Laksa Betawi",
    image: "/gallery/jakarta/laksa_betawi.jpg",
    desc: "Rasa kuahnya yang gurih dengan sedikit asam sangat menggugah selera",
  },
  {
    province: "Jakarta",
    title: "Roti Buaya",
    image: "/gallery/jakarta/roti_buaya.jpg",
    desc: "Roti buaya adalah makanan khas Jakarta yang kerap disajikan saat upacara adat terutama ketika prosesi acara pernikahan tradisional orang Betawi",
  },
  {
    province: "Jakarta",
    title: "Sayur Babanci",
    image: "/gallery/jakarta/sayur_babanci.jpg",
    desc: "Makanan khas Jakarta ini kerap disajikan saat buka puasa dan Lebaran. Uniknya, meski namanya sayur babanci, ternyata justru tak ada sayurannya.",
  },
  {
    province: "Jakarta",
    title: "Semur Jengkol",
    image: "/gallery/jakarta/semur_jengkol.jpg",
    desc: "Olahan santan yang seringnya didominasi rasa manis gurih yang menimbulkan minyak di permukaan selalu menggoda di kala lapar tiba. Olahan sayur ini sangat mudah ditemukan di warteg atau rumah makan di Jakarta dan sekitarnya.",
  },
  {
    province: "Jakarta",
    title: "Soto Betawi",
    image: "/gallery/jakarta/soto_betawi.jpg",
    desc: "Soto ini menjadi unik karena memiliki kuah kental yang membedakan dari soto dari daerah lainnya yang biasa menggunakan kuah bening. Salah satu ciri khas soto Betawi yakni adanya jeroan.",
  },
  {
    province: "Jakarta",
    title: "Soto Tangkar",
    image: "/gallery/jakarta/soto_tangkar.jpg",
    desc: "Soto ini berarti iga yang dimasak dengan rempah-rempah, biasanya disajikan dengan emping dan sambal.",
  },
  // Batas Menu Jakarta //

  { // Menu Daerah Sumatra Barat //
    province: "Sumatra Barat",
    title: "Rendang",
    image: "/gallery/rendang.jpg",
    desc: "Hidangan daging Khas padang yang dipadukan dengan rempah-rempah yang kental bercita rasa gurih pedas ",
  },
  // Batas Menu Sumatra Barat //
].sort(() => Math.random() - 0.5);

export default function Recipes() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const limitedRecipes =
    filteredRecipes.length > 0 ? filteredRecipes : recipes.slice(0, 16);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="recipes-container">
        {limitedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
