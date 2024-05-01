import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/home";
import Footer from './components/Footer';
import Ascenseurs from './components/Ascenseurs.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ascenseurs" element={<Ascenseurs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
