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
    {//1
      daerah: "Yogyakarta",
      img: "/gallery/yogyakarta/gudeg.jpg",
      jumlah_menu: "8",
      paling_terkenal: "Gudeg",
    },
    {//2
      daerah: "Bangka Belitung",
      img: "/gallery/belitung/lempah-kuning.jpg",
      jumlah_menu: "11",
      paling_terkenal: "Lempah Kuning",
    },
    {//3
      daerah: "Bengkulu",
      img: "/gallery/bengkulu/gulaikembaang.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Gulai Kemba`ang",
    },
    {//4
      daerah: "Bali",
      img: "/gallery/bali/ayambetutu.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Ayam Betutu",
    },
    {//5
      daerah: "Jakarta",
      img: "/gallery/jakarta/soto_betawi.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Soto Betawi",
    },
    {//6
      daerah: "Aceh",
      img: "/gallery/aceh/mieaceh.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Mie Aceh",
    },
    {//7
      daerah: "Sumatra Barat",
      img: "/gallery/sumatrabarat/rendang.jpg",
      jumlah_menu: "8",
      paling_terkenal: "Rendang",
    },
    {//8
      daerah: "Banten",
      img: "/gallery/banten/satebandeng.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Sate Bandeng",
    },
    {//9
      daerah: "Gorontalo",
      img: "/gallery/gorontalo/binte_biluhuta.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Ayam Iloni",
    },
    {//10
      daerah: "Jambi",
      img: "/gallery/jambi/tempoyak_ikan.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Tempoyak Ikan Patin",
    },
    {//11
      daerah: "Jawa Barat",
      img: "/gallery/jawabarat/seblak.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Seblak",
    },
    {//12
      daerah: "Jawa Tengah",
      img: "/gallery/jawatengah/brongkos.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Brongkos",
    },
    {//13
      daerah: "Jawa Timur",
      img: "/gallery/jawatimur/pecel.jpg",
      jumlah_menu: "10",
      paling_terkenal: "Pecel",
    },
    {//14
      daerah: "Kalimantan Barat",
      img: "/gallery/kalimantanbarat/buburgunting.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Bubur Gunting",
    },
    {//15
      daerah: "Kalimantan Selatan",
      img: "/gallery/kalimantanselatan/habangbanjar.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Habang Banjar",
    },
    {//16
      daerah: "Kalimantan Tengah",
      img: "/gallery/kalimantantengah/cotomenggala.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Coto Menggala",
    },
    {//17
      daerah: "Kalimantan Timur",
      img: "/gallery/kalimantantimur/sambalgamiudang.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Sambal Gami Udang",
    },
    {//18
      daerah: "Kalimantan Utara",
      img: "/gallery/kalimantanutara/sateikanpari.jpg",
      jumlah_menu: "5",
      paling_terkenal: "Sate Ikan Pari",
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
