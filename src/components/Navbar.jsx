import React, { useState } from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import {Link } from "react-scroll"
const Navbar = () => {
  const [nav,setNav] = useState(true)
  const handleNav = () => {
        setNav(!nav)
  }
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black' >
        <h1 className='w-full text-3xl font-bold text-[#191A19]'>TuniLift</h1>
        <ul className='hidden md:flex'>
        <li className="p-4 navbar-links" style={{ whiteSpace: 'nowrap' }}><a style={{"text-decoration":"None"}} href="/">À propos</a></li>
        <li className="p-4 navbar-links" style={{ whiteSpace: 'nowrap' }}>Nos produits</li>
          <li className="p-4 navbar-links">Environnement</li>
          <li className="p-4 navbar-links">Service</li>
          <li className="p-4 navbar-links">Devis</li>
          <li className="p-4 navbar-links"><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div style={{"zIndex":1}} className={!nav ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 mobile-sidebar text-white bg-[#191A19] ease-in-out duration-500" : "fixed hidden"}>
        <h1 className='w-full text-3xl pt-2 font-bold text-[#ffffff] m-4'>TuniLift</h1>
          <ul className='p-4'>
            <li className="p-4 sidebar border-b border-gray-600" style={{ whiteSpace: 'nowrap' }}><a style={{"text-decoration":"None"}} href="/">À propos</a></li>
            <li className="p-4 sidebar border-b border-gray-600" style={{ whiteSpace: 'nowrap' }}>Nos produits</li>
            <li className="p-4 sidebar border-b border-gray-600">Environnement</li>
            <li className="p-4 sidebar border-b border-gray-600">Service</li>
            <li className="p-4 sidebar border-b border-gray-600">Devis</li>
            <li className="p-4 sidebar">Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar