import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
    "/gallery/cakwe.jpeg",
    "/gallery/gudeg.jpg",
    "/gallery/klepon.jpeg",
    "/gallery/mie-ayam.jpeg",
    "/gallery/nasi-goreng.jpg",
    "/gallery/pempek.jpg",
    "/gallery/salad-buah.jpeg",
    "/gallery/sate-ayam.jpg",
    "/gallery/sop-buntut.jpg",
    "/gallery/babi-guling.jpg",
    "/gallery/mie-aceh.jpg",
    "/gallery/mie-belitung.jpg",
    "/gallery/nasi-tiwul.jpg",
    "/gallery/pindang-patin.jpg",
    "/gallery/soto-betawi.jpg",
    "/gallery/rendang.jpg",
    "/gallery/nasi-jinggo.jpg",
    "/gallery/sate-kambing.jpg",
  ]);
  
  const [currentGroup, setCurrentGroup] = useState(shuffleArray(images.slice(0, 9)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffledImages = shuffleArray(images);
      const newGroup = shuffledImages.slice(0, 9);
      setCurrentGroup(newGroup);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title"><span>Resep</span>Nusan<span>tara</span></h1>
        <p className="info">Temukan Resep Favoritmu!</p>
        <Link to="/recipes">
          <button className="btn">Temukan Cita Rasa</button>
        </Link>
      </div>
      <div className="col gallery">
        {currentGroup.map((src, index) => ( <CustomImage key={index} imgSrc={src} pt={"90%"} />))}
      </div>
    </div>
  )
}
