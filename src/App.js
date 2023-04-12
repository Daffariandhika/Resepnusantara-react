import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import ResepTrending from "./components/ResepTrending";
import QouteSection from "./components/FunFact";
import Daerah from "./components/Daerah";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <ImageSection />
        <ResepTrending />
        <QouteSection />
        <Daerah />
      </div>
      <Footer />
    </div>
  );
}

export default App;
