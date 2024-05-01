import React from 'react'
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
  } from 'flowbite-react';
import devis from "../img/6029471.png"
const Devis = () => {
  return (
    <div id="devis" className='text-white mt-11 h-[100vh] grid place-items-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl text-[#1E5128] font-bold text-center'>
                Demander un devis
            </h1>
       
        
    <div className="container flex flex-wrap gap-10 justify-center place-items-center">
       
        <form className=" mb-20 md:w-1/3 flex flex-col gap-2 " >
                   
                    <Label>Demande</Label>
                    
                    <Textarea rows="5" name="devis" placeholder='Écrire votre demande de devis ici' />
                    
                    <Button type="submit" value="Send" className='bg-[#1E5128] hover:bg-[#4E9F3D]'>Envoyer</Button>
        </form>
        <div className="hidden md:flex w-full md:w-1/3">
            <img className='object-contain hover:object-scale-down' src={devis} alt="" />
        </div>
    </div>

    </div>
  )
}

export default Devis