import { useState } from "react";
import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const recipes = [
    {
      title: "Gudeg",
      image: "/gallery/yogyakarta/gudeg.jpg",
      desc: "Makanan khas Yogyakarta terkenal bercita rasa manis gurih ",
    },
    {
      title: "Klepon",
      image: "/gallery/jawatengah/klepon.jpg",
      desc: "kue manis kenyal berisi gula merah yang lumer ketika digigit",
    },
    {
      title: "Nasi Tiwul",
      image: "/gallery/jawatengah/nasi-tiwul.jpg",
      desc: "nasi yang di tiwul-tiwul",
    },
    {
      title: "Salad Buah",
      image: "/gallery/salad-buah.jpg",
      desc: "campuran buah untuk makanan pembuka biasa dicampur yougrt atau mayonais",
    },
    {
      title: "Sate Ayam",
      image: "/gallery/sate-ayam.jpg",
      desc: "Sate daging ayam dengan kuah kacang atau kecap",
    },
    {
      title: "Sate Kambing",
      image: "/gallery/sate-kambing.jpg",
      desc: "Dagingnya dapat diganti dengan ayam atau sapi yang dapat dijumpai di mayoritas wilayan Indonesia",
    },
    {
      title: "Cakwe",
      image: "/gallery/cakwe.jpg",
      desc: "kue goreng yang gurih yang dibawa pedagang Cina pada masa lalu",
    },
    {
      title: "Rendang",
      image: "/gallery/rendang.jpg",
      desc: "Hidangan daging Khas padang yang dipadukan dengan rempah-rempah yang kental bercita rasa gurih pedas ",
    },
    {
      title: "Babi Guling",
      image: "/gallery/bali/babi-guling.jpg",
      desc: "Babi panggang khas bali bercitarasa dominan gurih, kaya akan lemak yang meleleh sehingga lumer di mulut. ",
    },
    {
      title: "Nasi Gurih",
      image: "/gallery/aceh/nasi-gurih.jpg",
      desc: "Sejenis nasi uduk yang berasal dari aceh, perbedaan terletak pada lauk yang dipakai yang biasanya terdapat kari ayam atau rendang",
    },
    {
      title: "Roti Cane",
      image: "/gallery/aceh/roti-cane.jpg",
      desc: "hidangan Aceh yang diinfluensi budaya India. berbahan dasar tepung cocok untuk dijadikan makanan pokok ",
    },
    {
      title: "Lempah Kuning",
      image: "/gallery/belitung/lempah-kuning.jpg",
      desc: "Ikan berkuah kuning bercitarasa gurih asam khas Bangka, dapat menggunakan berbagai macam ikan ",
    },
    {
      title: "Soto Aceh",
      image: "/gallery/aceh/soto-aceh.jpg",
      desc: "Hidangan kuah kaya rempah khas aceh yang menyegarkan dan terasa berani karena perpaduan santan dan sambal",
    },
    {
      title: "Sate Matang",
      image: "/gallery/aceh/sate-matang.jpg",
      desc: "Sate khas aceh dengan potongan daging yang tebal yang disajikan dengan sambal kacang yang khas gurih pedas",
    },
    {
      title: "Timphan",
      image: "/gallery/aceh/timphan.jpg",
      desc: "kue legit berbahan dasar tepung beras dan dapat diisi dengan berbagai macam toping manis",
    },
    {
      title: "Ayam Tangkap",
      image: "/gallery/aceh/ayamtangkap.jpg",
      desc: "Ayam yang digoreng dengan rempah dan daun pandan, memadukan gurihnya ayam dan aroma rempah dan daun pandan yang kuat",
    },
    {
      title: "Ayam Betutu ",
      image: "/gallery/bali/ayambetutu.jpg",
      desc: "Ayam betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali. Daging ayam yang lembut dipadukan dengan bumbu yang kaya akan rempah.",
    },
    {
      title: "Bebek Betutu",
      image: "/gallery/bali/bebekbetutu.jpg",
      desc: "Bebek Betutu juga merupakan salah satu makanan khas Bali yang wajib kamu coba. Hidangan ini menggunakan bahan utama bebek yang dimasak dengan bumbu betutu khas Bali.",
    },
    {
      title: "Sambal Matah",
      image: "/gallery/bali/sambalmatah.jpg",
      desc: "Rasanya yang pedas dari cabai rawit yang diiris kasar dan segar dari Jeruk nipis dipadukan dengan sereh yang aromatik.",
    },
    {
      title: "Sate Kakul",
      image: "/gallery/bali/satekakul.jpg",
      desc: "Sate kaku merupakan kuliner tradisional Bali yang berasal dari daerah Ubud. Sate kakul menggunakan bahan utama berupa siput dan memiliki cita rasa yang khas",
    },
    {
      title: "Sate Lilit",
      image: "/gallery/bali/satelilit.jpg",
      desc: "Sate lilit terbuat dari daging ayam atau ikan yang digiling. Daging ini kemudian dicampur dengan parutan kelapa dan dililit pada batang bambu atau sereh.",
    },
    {
      title: "Jakut Urap",
      image: "/gallery/bali/jakuturap.jpg",
      desc: "Jukut urap sering ditemukan dalam sajian nasi campur. Jukut urap terdiri dari berbagai sayuran yang disiram dengan bumbu khas Bali.",
    },
    {
      title: "Sate Pelecing",
      image: "/gallery/bali/satepelecing.jpg",
      desc: "Sate ini dimasak dengan bumbu khas Bali yang bernama plecing yang terbuat dari kemiri, terasi, tomat, bawang putih, dan beberapa bumbu lainnya.",
    },
    {
      title: "Lempet Ikan",
      image: "/gallery/bali/lempetikan.jpg",
      desc: "Lempet adalah makanan khas Bali yang terbuat dari ikan yang sudah diberi bumbu dan dibungkus dengan daun pisang.",
    },
    {
      title: "Gulai Keueng",
      image: "/gallery/aceh/gulaikeueng.jpg",
      desc: "Gule Masam Keeung atau gulai asam pedas adalah hidangan khas Aceh yang terkenal dengan rasa pedas, asam, dan gurihnya.",
    },
    {
      title: "Keumamah",
      image: "/gallery/aceh/keumamah.jpg",
      desc: "salah satu kuliner tradisional masyarakat Aceh yang dibuat dari bahan baku ikan, yaitu tongkol dan cakalang. Keumamah terkenal juga dengan nama ikan kayu karena keras seperti kayu.",
    },
    {
      title: "Kuah Pliek U",
      image: "/gallery/aceh/kuahpliek-u.jpg",
      desc: "Pliek u merupakan salah satu hidangan yang merangkap sebagai bumbu di Aceh. Pliek u berasal dari ampas kering sisa minyak kelapa tua yang telah melalui beberapa kali proses pemerasan.",
    },
    {
      title: "Mie Aceh",
      image: "../gallery/aceh/mieaceh.jpg",
      desc: "hidangan khas Aceh yang memiliki cita rasa kaya akan perpaduan rempah Nusantara",
    },
    {
      title: "Serapah Daging",
      image: "../gallery/bali/serapahdaging.jpg",
      desc: "Serapah adalah sejenis lauk setengah basah yang terbuat dari daging yang dibumbui dengan aneka rempah, santan, dan tepung beras sebagai pengental. ",
    },
    {
      title: "Kue Rintak",
      image: "/gallery/belitung/kuerintak.jpg",
      desc: "Jenis Kue ini di racik dari bahan baku tepung sagu, santan kental dan telur. Kue nya memang cukup alot namun mempunyai rasa yang enak dan juga otentik.",
    },
    {
      title: "Lakso Bangka",
      image: "/gallery/belitung/laksobangka.jpg",
      desc: "Lakso merupakan sebuah kuliner yang diciptakan dari perpaduan antara masakan Melayu dengan Tionghoa. Kuliner ini sendiri terdiri dari mie putih yang berbahan dasar sagu dan tepung beras.",
    },
    {
      title: "Lempah Darat",
      image: "/gallery/belitung/lempahdarat.jpg",
      desc: ". Bahan utama membuat sayur ini bisa berbagai macam dan berbeda-beda diantaranya ada daun papaya muda, akar keladi, pucuk idat, dan lain sebagainya. Sayur ini dimasak dengan rempah yang kaya dan kuat.",
    },
    {
      title: "Lepet Bangka",
      image: "/gallery/belitung/lepetbangka.jpg",
      desc: "Lapet dari Bangka Belitung dibuat dari beras ketan yang dikukus dalam wadah. Yang uniknya, wadahnya terbuat dari daun kelapa yang masih muda atau janur.",
    },
    {
      title: "Lokan",
      image: "/gallery/belitung/lokan.jpg",
      desc: "Lokan adalah kerang yang biasa hidup di daerah rawa atau muara sungai yang berpapasan dengan laut. yang cukup direbus dengan serai dan ada yang dijadikan kuah kuning atau pun bumbu saus tiram. ",
    },
    {
      title: "Martabak Bangka",
      image: "/gallery/belitung/martabakbangka.jpg",
      desc: "Makanan manis yang tak pernah salah di lidah masyarakat. dengan toping beraneka ragam membuat ledakan rasa didalam mulut.",
    },
    {
      title: "Mie Koba",
      image: "/gallery/belitung/miekoba.jpg",
      desc: "Terdapat satu lagi olahan mie yang berasal dari Bangka Belitung, yaitu mie Koba. Mie Koba merupakan sejenis mie yang di dalamnya terdapat isian ikan tenggiri.",
    },
    {
      title: "Otak-otak Bangka",
      image: "/gallery/belitung/otakotakbangka.jpg",
      desc: "Makanan khas Bangka Belitung ini adalah salah satu kuliner yang memanfaatkan hasil laut. Otak-otak dibuat dari campuran daging ikan, tepung dan bumbu-bumbu rempah yang akan menambah kenikmatan cita rasanya.",
    },
    {
      title: "Sambelikung",
      image: "/gallery/belitung/sambelikung.jpg",
      desc: "Sambal lingkung adalah sejenis abon atau serundeng yang terbuat dari ikan, santan kelapa, dan rempah-rempah lainnya. Biasanya sambal lingkung dapat dengan mudah dijumpai di momen-momen lebaran.",
    },
    {
      title: "Soto Bangka",
      image: "/gallery/belitung/sotobangka.jpg",
      desc: "Meski bumbunya banyak, soto Belitung termasuk sajian sederhana. Soto Belitung biasanya dibuat dengan dua kuah: kuah santan dan kuah bening.",
    },
    {
      title: "Lempah Kuning",
      image: "/gallery/belitung/lempah-kuning.jpg",
      desc: "Biasanya lempah kuning terbuat dari ikan kakap merah dan ikan tenggiri. Cara pembuatannya sendiri ikan tersebut dimasak dengan bumbu berwarna kuning yang berasal dari kunyit.",
    },
  ].sort(() => Math.random() - 0.5)

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const limitedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes.slice(0, 12);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="recipes-container">
        {limitedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
