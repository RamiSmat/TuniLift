import React from 'react';
import elevator from "../img/icons/elevator.png";
import { FaElevator } from "react-icons/fa6";
import { GiEscalator ,GiElevator } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { TbElevator } from "react-icons/tb";
import { GrHostMaintenance } from "react-icons/gr";


const NosProduits = () => {
  return (
    <div id="nosproduits" className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-[#1E5128] font-bold text-center'>
        Nos Produits
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8 mt-8 w-full max-w-screen-lg">
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <GiElevator size={70} className='mb-3'/>
          <h2 className="text-2xl sm:text-3xl font-bold">Ascenseurs</h2>
          <p className="mt-2">L'ascenseur sur mesure pour satisfaire toutes vos exigences.</p>
        </div>
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <FaElevator size={50} className='mb-3'/>
          <h2 className="text-2xl sm:text-3xl text-center font-bold">Ascenseurs Domestiques</h2>
          <p className="mt-2">Doter sa maison d'un système de mobilité verticale n'a jamais été aussi simple.</p>
        </div>
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <GrHostMaintenance size={70} className='mb-3'/>

          <h2 className="text-2xl sm:text-3xl font-bold">Modernisations</h2>
          <p className="mt-2">Une nouvelle vie aux vieux ascenseurs grâce aux solutions de modernisation.</p>
        </div>
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <TbElevator size={50} className='mb-3'/>

          <h2 className="text-2xl sm:text-3xl font-bold">Monte-charges</h2>
          <p className="mt-2">Des monte-charges sans limites pour des solutions illimitées.</p>
        </div>
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
          
          <GiEscalator size={50} className='mb-3'/>
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Escaliers mécaniques</h2>
          <p className="mt-2">Escaliers mécaniques et trottoirs roulants pour des bâtiments débordant de vie.</p>
        </div>
        <div className="bg-[#f6fffb] cursor-pointer rounded-lg shadow-normal p-6 hover:shadow-hover hover:bg-[#4E9F3D] text-[#191A19] hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center">
        <FiLoader size={50} className='mb-3'/>

          <h2 className="text-2xl sm:text-3xl font-bold">Tree Lift</h2>
          <p className="mt-2">L'éfficacité est la nature même des ascenseurs Tree Lift.</p>
        </div>
      </div>
    </div>
  );
};

export default NosProduits;
