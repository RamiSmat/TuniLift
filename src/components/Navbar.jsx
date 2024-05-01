import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../img/logotunilift.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [navBG, setNavBg] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY > 0) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
   
  }, []);

  return (
    <div style={{ zIndex: 1 }} className={!navBG ? 'w-full fixed  bg-[#f6fffb]' : 'w-full fixed bg-[#f6fffb] shadow-lg'}>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
        <img src={logo} className="h-11" alt="TuniLift logo" />
        <ul className='hidden md:flex'>
          <li className="p-4 navbar-links" style={{ whiteSpace: 'nowrap' }}><Link to="apropos" spy={true} smooth={true} offset={50} duration={500}>À propos</Link></li>
          <li className="p-4 navbar-links" style={{ whiteSpace: 'nowrap' }}><Link to="nosproduits" spy={true} smooth={true} offset={50} duration={500}>Nos Produits</Link></li>
          <li className="p-4 navbar-links">Environnement</li>
          <li className="p-4 navbar-links">Service</li>
          <li className="p-4 navbar-links">Devis</li>
          <li className="p-4 navbar-links"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose color='black' size={30} /> : <AiOutlineMenu color="black" size={30} />}
        </div>
        <div style={{ zIndex: 1 }} className={!nav ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 mobile-sidebar text-white bg-[#191A19] " : "fixed hidden"}>
          <h1 className='w-full text-3xl pt-2 font-bold text-[#ffffff] m-4'>TuniLift</h1>
          <ul className='p-4'>
            <li className="p-4 sidebar border-b border-gray-600" style={{ whiteSpace: 'nowrap' }}><a style={{ textDecoration: "none" }} href="/">À propos</a></li>
            <li className="p-4 sidebar border-b border-gray-600" style={{ whiteSpace: 'nowrap' }}>Nos produits</li>
            <li className="p-4 sidebar border-b border-gray-600">Environnement</li>
            <li className="p-4 sidebar border-b border-gray-600">Service</li>
            <li className="p-4 sidebar border-b border-gray-600">Devis</li>
            <li className="p-4 sidebar">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
