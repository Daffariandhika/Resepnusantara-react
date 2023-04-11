import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
