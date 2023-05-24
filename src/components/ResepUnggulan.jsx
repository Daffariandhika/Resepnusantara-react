import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const list = [
  'Temukan cita rasa baru',
  'Latihan memasak',
  'Belajar resep baru',
  'Cari tau kandungan nutrisi',
  'Tips untuk memasak',
  'Sajikan kepada keluarga anda'
];
list.sort(() => Math.random() - 0.5);

const quotes = [
  {
    text:
      'Gudeg tidak hanya menjadi makanan yang lezat, tetapi juga mencerminkan nilai budaya dan tradisi yang kaya di daerah Yogyakarta. Hingga saat ini, gudeg terus menjadi salah satu kuliner yang dijaga keasliannya dan menjadi ikon kuliner dari kota Yogyakarta.'
  },
  {
    text:
      'Cakwe memiliki cita rasa yang gurih dan sedikit asin. Teksturnya yang renyah di luar dan empuk di dalam memberikan sensasi yang nikmat ketika dimakan.'
  },
  {
    text:
      'Ada beberapa varian klepon yang memiliki isian berbeda. Selain gula merah, klepon juga dapat diisi dengan kacang hijau, keju, atau bahkan daging ayam.'
  },
  {
    text:
      'Indonesia memiliki berbagai varian mie ayam. Misalnya cwie mie dari Malang, mie ayam khas Bangka, mie celor khas Palembang, dan sebagainya.'
  }
];

const images = [
  {
    path: '/Gudeg',
    url: '/gallery/yogyakarta/gudeg.jpg'
  },
  {
    path: '/',
    url: '/gallery/cakwe.jpg'
  },
  {
    path: '/',
    url: '/gallery/jawatengah/klepon.jpg'
  },
  {
    path: '/',
    url: '/gallery/mie-ayam.jpg'
  }
];

export default function ImproveSkills() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * images.length);
      setImageIndex(newIndex);
    }, 30000);
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
          <button className="btn" style={{ cursor: 'pointer' }}>
            Daftar Sekarang
          </button>
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
