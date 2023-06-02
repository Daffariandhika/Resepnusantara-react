import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import CustomImage from "./CustomImage";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function HeroSection() {
  const [images] = useState([
    //Yogyakarta
    { src: "/gallery/yogyakarta/gudeg.jpg", path: "/Gudeg" },
    { src: "/gallery/yogyakarta/ayam-kalasan.jpg", path: "/Ayamkalasan" },
    { src: "/gallery/yogyakarta/bakmi-jawa.jpg", path: "/Bakmijawa" },
    { src: "/gallery/yogyakarta/sate-klathak.jpg", path: "/Sateklathak" },
    { src: "/gallery/yogyakarta/bakpia.jpg", path: "/Bakpia"},
    { src: "/gallery/yogyakarta/mielethek.jpg", path: "/Mielethek"},
    { src: "/gallery/yogyakarta/nasikucing.jpg", path: "/NasiKucing"},
    { src: "/gallery/yogyakarta/soto-lenthok.jpg", path: "/Sotolenthok"},
    //Batas Yogyakarta
    //Jawatengah
    { src: "/gallery/jawatengah/klepon.jpg", path: "/jawatengah/klepon" },
    //Batas Jawatengah
    //Bali
    { src: "/gallery/bali/ayambetutu.jpg", path: "/Ayambetutu" },
    { src: "/gallery/bali/babi-guling.jpg", path: "/Babiguling" },
    { src: "/gallery/bali/bebekbetutu.jpg", path: "/Bebekbetutu" },
    { src: "/gallery/bali/sambalmatah.jpg", path: "/Sambalmatah" },
    { src: "/gallery/bali/satekakul.jpg", path: "/Satekakul" },
    { src: "/gallery/bali/satelilit.jpg", path: "/Satelilit" },
    { src: "/gallery/bali/jakuturap.jpg", path: "/Jakuturap" },
    { src: "/gallery/bali/sateplecing.jpg", path: "/Satepelecing" },
    { src: "/gallery/bali/lempetikan.jpg", path: "/Lempetikan" },
    { src: "/gallery/bali/serapahdaging.jpg", path: "/Serapahdaging" },
    //Batas Bali
    //Banten
    { src: "/gallery/banten/nasibakarsumsum.jpg", path: "/Nasibakarsumsum" },
    { src: "/gallery/banten/angeunlada.jpg", path: "/Angeunlada" },
    { src: "/gallery/banten/ketanbintul.jpg", path: "/Ketanbintul" },
    { src: "/gallery/banten/kuejojorong.jpg", path: "/Kuejojorong" },
    { src: "/gallery/banten/laksa.jpg", path: "/Laksa" },
    { src: "/gallery/banten/leumeung.jpg", path: "/Leumeung" },
    { src: "/gallery/banten/sayurbesan.jpg", path: "/Sayurbesan" },
    { src: "/gallery/banten/pecakbandeng.jpg", path: "/Pecakbandeng" },
    { src: "/gallery/banten/sambalburoq.jpg", path: "/Sambalburoq" },
    { src: "/gallery/banten/satebandeng.jpg", path: "/Satebandeng" },
    //Batas Banten
    //Belitung
    { src: "/gallery/belitung/martabakbangka.jpg", path: "Martabakbangka" },
    //Batas Belitung
    //Bengkulu
    { src: "/gallery/bengkulu/gulaikembaang.jpg", path: "/Gulaikembaang" },
    //Batas Bengkulu
    //Gorontalo
    { src: "/gallery/gorontalo/binte_biluhuta.jpg", path: "/Bintebiluhuta" },
    { src: "/gallery/gorontalo/es_brenebon.jpg", path: "/Esbrenebon" },
    //Batas Gorontalo
    //Jakarta
    { src: "/gallery/jakarta/soto_betawi.jpg", path: "/Sotobetawi" },
    { src: "/gallery/jakarta/kerak_telor.jpg", path: "Keraktelor" },
    //Batas Jakarta
    //Jambi
    { src: "/gallery/jambi/kerutup_ikan.jpg", path: "/Kerutupikan" },
    { src: "/gallery/jambi/sambal_kweni.jpg", path: "/Sambalkweni" },
    //Batas Jambi
    //Aceh
    { src: "/gallery/aceh/mieaceh.jpg", path: "/Mieaceh" },
    //Batas Aceh
  ]);

  const [currentGroup, setCurrentGroup] = useState(shuffleArray(images.slice(0, 9)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffledImages = shuffleArray(images);
      const newGroup = shuffledImages.slice(0, 9);
      setCurrentGroup(newGroup);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title"><span>Resep</span>Nusan<span>tara</span></h1>
        <p className="info">Temukan Resep Favoritmu!</p>
        <Link to="/recipes">
          <button className="btn"> <FontAwesomeIcon icon={faCutlery} shake/> Temukan Cita Rasa</button>
        </Link>
      </div>
      <div className="col gallery">
        {currentGroup.map((image, index) => (
          <Link to={image.path} key={index}>
            <CustomImage imgSrc={image.src} pt={"90%"} />
          </Link>
        ))}
      </div>
    </div>
  )
}