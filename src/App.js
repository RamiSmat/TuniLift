import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Contact/>
   {/* <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/contact" element={<Contact />} />
       
    </Routes>
  </BrowserRouter>  */ }
    </div>

  );
}

export default App;
