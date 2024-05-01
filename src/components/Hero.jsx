import React from 'react';
import Img1 from '../img/fig1.jpg'
import Img2 from '../img/fig2.jpg'
import Img3 from '../img/fig3.jpg'
import Img4 from '../img/fig4.jpg'
import ImageSlider from './ImageSlider';
import { ImageData } from '../json/JsonData';
import { Carousel } from 'flowbite-react';
const Hero = () => {
  return (
    <div className='text-white pt-20 h-[100vh]'>
      <h1 className='md:text-5xl sm:text-4xl mt-9 text-3xl text-[#1E5128] font-bold pt-4 text-center'>
        Nous vous accompagnons durant votre <span className='text-[#4E9F3D]'>projet</span>
      </h1>

      <div className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] mx-auto pt-20">
        <Carousel slideInterval={5000} className=" h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] ">
          <img src={Img1} alt="..." />
          <img src={Img2} alt="..." />
          <img src={Img3} alt="..." />
          <img src={Img4} alt="..." />
        </Carousel>
      </div>
      
     {/*<ImageSlider ImageData={ImageData} />*/ } 
      <br/>
    </div>
  );
}

export default Hero;
