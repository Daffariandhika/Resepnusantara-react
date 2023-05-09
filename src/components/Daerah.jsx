/* eslint-disable react-hooks/exhaustive-deps */

// Import the necessary modules and components
import { useState, useEffect } from "react";
import ChiefCard from "./FunctionDaerah";

// Define the functional component ChiefsSection
export default function ChiefsSection() {
  // Initialize the state variable topChiefs as an empty array
  const [topChiefs, setTopChiefs] = useState([]);

  // Define the chiefs array with all the options
  const chiefs = [
    {
      daerah: "Yogyakarta",
      img: "/gallery/yogyakarta/gudeg.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Gudeg",
    },
    {
      daerah: "Bangka Belitung",
      img: "/gallery/bangkabelitung/lempah-kuning.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Lempah Kuning",
    },
    {
      daerah: "Bengkulu",
      img: "/gallery/pindang-patin.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Pindang Patin",
    },
    {
      daerah: "Jawa Tengah",
      img: "/gallery/jawatengah/nasi-tiwul.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Nasi Tiwul",
    },
    {
      daerah: "Bali",
      img: "/gallery/bali/babi-guling.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Babi Guling",
    },
    {
      daerah: "Jakarta",
      img: "/gallery/soto-betawi.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Pempek",
    },
    {
      daerah: "Aceh",
      img: "/gallery/aceh/mieaceh.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Mie Aceh",
    },
    {
      daerah: "Sumatra Barat",
      img: "/gallery/rendang.jpg",
      jumlah_menu: "0",
      paling_terkenal: "Rendang",
    },
  ];

  // Use the useEffect hook to update the topChiefs array every 15 seconds
  useEffect(() => {
    // Define a function that updates the topChiefs array with a new set of 6 chiefs
    function updateTopChiefs() {
      // Shuffle the chiefs array
      const shuffledChiefs = chiefs.sort(() => Math.random() - 0.5);

      // Select the first 6 elements of the shuffled array
      const newTopChiefs = shuffledChiefs.slice(0, 6);

      // Assign a random percentage to each chief
      newTopChiefs.forEach((chief) => {
        chief.percentage = Math.floor(Math.random() * 100) + 1;
      });

      // Update the state with the new topChiefs array
      setTopChiefs(newTopChiefs);
    }

    // Call the updateTopChiefs function immediately to set the initial array
    updateTopChiefs();

    // Set an interval to call the updateTopChiefs function every 15 seconds
    const intervalId = setInterval(updateTopChiefs, 15000);

    // Clear the interval when the component is unmounted or updated
    return () => clearInterval(intervalId);
  }, []);

  // Render the component
  return (
    <div className="section chiefs">
      <h1 className="title">Temukan Makanan Khas Daerahmu</h1>
      <div className="top-chiefs-container">
        {topChiefs.map((chief) => (
          <ChiefCard key={chief.daerah} chief={chief} />
        ))}
      </div>
    </div>
  )
}
