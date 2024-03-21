import React from 'react';

import ImageSliderAuto from './ImageSliderAuto';
import ImageSlider from './ImageSlider';
import { ImageData } from '../json/JsonData';

const Hero = () => {
  return (
    <div className='text-white'>
      <h1 className='md:text-5xl sm:text-4xl text-3xl text-[#4E9F3D] font-bold p-2 pt-4 text-center'>
        Nous vous accompagnons durant votre projet
      </h1>
      <br></br>
      <ImageSlider ImageData={ImageData} />
      <br/>
    </div>
  );
}

export default Hero;
