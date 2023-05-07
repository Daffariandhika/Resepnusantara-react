import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//import Settings from "./pages/Settings";//

import Yogyakarta from './pages/DaerahPage/Yogyakarta';
import Bali from './pages/DaerahPage/Bali';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          { /*<Route path="/settings" element={<Settings />} /> */}
          <Route path="/daerah/yogyakarta" element={<Yogyakarta/>} />
          <Route path="/daerah/bali" element={<Bali/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
