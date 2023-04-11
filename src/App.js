import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import ResepTrending from "./components/ResepTrending";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <ImageSection />
        <ResepTrending />
      </div>
    </div>
  );
}

export default App;
