import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faPen } from '@fortawesome/free-solid-svg-icons';

const list = [
  'mencoba resep baru! Dalam setiap potongan bahan dan sentuhan rempah, tersembunyi kesempatan untuk menciptakan keajaiban di dapurmu. Berani melangkah dan berkreasi dengan kelezatan baru, dan siapkanlah dirimu untuk petualangan rasa yang tak terlupakan!'
];
list.sort(() => Math.random() - 0.5);

const quotes = [
  {
    text:
      'Gudeg tidak hanya menjadi makanan yang lezat, tetapi juga mencerminkan nilai budaya dan tradisi yang kaya di daerah Yogyakarta. Hingga saat ini, gudeg terus menjadi salah satu kuliner yang dijaga keasliannya dan menjadi ikon kuliner dari kota Yogyakarta.'
  },
  {
    text:
      'Lempah kuning Memiliki rasa gurih dan aroma rempah yang khas. Lempah Kuning terbuat dari bahan dasar ikan, seperti ikan patin atau ikan mas, yang direbus bersama dengan bumbu-bumbu yang kaya rempah.'
  },
  {
    text:
      'Gulai kemba’ang adalah makanan khas Bengkulu yang dibuat dari bahan dasar iga sapi yang dimasak dengan aneka rempah. Gulai kemba’ang memiliki cita rasa yang sangat khas dengan aroma rempah yang cukup tajam.'
  },
  {
    text:
      'Ayam Betutu adalah hidangan khas dari Bali, Indonesia. Hidangan ini terkenal dengan ayam yang dimasak dengan bumbu khas Bali yang kaya rempah dan disajikan dengan nasi putih serta pelengkap lainnya.'
  }
];

const images = [
  {
    path: '/Gudeg',
    url: '/gallery/yogyakarta/gudeg.jpg'
  },
  {
    path: '/Lempahkuning',
    url: '/gallery/belitung/lempah-kuning.jpg'
  },
  {
    path: '/Gulaikembaang',
    url: '/gallery/bengkulu/gulaikembaang.jpg'
  },
  {
    path: '/Ayambetutu',
    url: '/gallery/bali/ayambetutu.jpg'
  }
];

export default function ImproveSkills() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * images.length);
      setImageIndex(newIndex);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  const { text } = quotes[imageIndex];
  const { path, url } = images[imageIndex];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <Link to={path}>
          <img src={process.env.PUBLIC_URL + url} alt="" className="fade-in-out" />
        </Link>
      </div>
      <div className="col typography">
        <h1 className="title">Temukan Resep Baru</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <Link to="/signup">
          <button className="btn" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faPen}/> Daftar Sekarang</button>
        </Link>
      </div>
      <div className="section quote">
        <p className="qoute-text">
          <FontAwesomeIcon icon={faQuoteLeft}/>
          {text}<FontAwesomeIcon icon={faQuoteRight} />
        </p>
      </div>
    </div>
  );
}
