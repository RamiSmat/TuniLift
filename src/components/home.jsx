import React from 'react'
import Hero from "./Hero";
import Contact from "./Contact";

import Apropos from './Apropos'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NosProduits from "./NosProduits";
import Devis from "./Devis";
const home = () => {
  return (
    <div className='app'>
      <Hero/>
      <Apropos/>
      <NosProduits/>
      <Devis/>
      <Contact/>
    </div>
  )
}

export default home