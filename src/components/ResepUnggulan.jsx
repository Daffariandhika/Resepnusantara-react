import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const list = [
  "Temukan cita rasa baru",
  "Latihan memasak",
  "Belajar resep baru",
  "Cari tau kandungan nutrisi",
  "Tips untuk memasak",
  "Sajikan kepada keluarga anda"
]
list.sort(() => Math.random() - 0.5);

const quotes = [
  {
    text: "Salad buah adalah hidangan yang terdiri dari berbagai macam buah-buahan, terkadang disajikan dalam bentuk cair, baik jus maupun sirup. Dalam berbagai bentuk, salad buah bisa disajikan sebagai makanan pembuka atau lalapan.",
  },
  {
    text: "Cakwe juga sering dijadikan bahan dasar dalam berbagai hidangan, seperti bubur ayam, mi ayam, atau cap cai.",
  },
  {
    text: "Ada beberapa varian klepon yang memiliki isian berbeda. Selain gula merah, klepon juga dapat diisi dengan kacang hijau, keju, atau bahkan daging ayam.",
  },
  {
    text: "Indonesia memiliki berbagai varian mie ayam. Misalnya cwie mie dari Malang, mie ayam khas Bangka, mie celor khas Palembang, dan sebagainya.",
  }
]

const images = [
  '/gallery/salad-buah.jpeg',
  '/gallery/cakwe.jpeg',
  '/gallery/klepon.jpeg',
  '/gallery/mie-ayam.jpeg'
]

export default function ImproveSkills() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * images.length);
      setImageIndex(newIndex);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const { text } = quotes[imageIndex];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src={images[imageIndex]} alt="" className="fade-in-out" />
      </div>
      <div className="col typography">
        <h1 className="title">Temukan Resep Baru</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <Link to="/signup">
        <button className="btn" style={{cursor: 'pointer'}}>Daftar Sekarang</button>
        </Link>
      </div>
      <div className="section quote">
        <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft}/>{text}  <FontAwesomeIcon icon={faQuoteRight}/></p>
      </div>
    </div>
  );
}