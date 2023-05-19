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
    { src: "/gallery/cakwe.jpg", path: "/cakwe" },
    { src: "/gallery/yogyakarta/gudeg.jpg", path: "/Gudeg" },
    { src: "/gallery/jawatengah/klepon.jpg", path: "/jawatengah/klepon" },
    { src: "/gallery/yogyakarta/ayam-kalasan.jpg", path: "/yogyakarta/Ayamkalasan" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
    { src: "/gallery/mie-ayam.jpg", path: "/mie-ayam" },
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
          <button className="btn"> <FontAwesomeIcon icon={faCutlery}/> Temukan Cita Rasa</button>
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