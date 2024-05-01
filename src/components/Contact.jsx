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
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactUS from "../img/7056549.png"
const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_u4li6as', 'template_fjb3xaa', form.current, {
        publicKey: '0DWdM-65KYkU_D5Rr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="contact" className='text-white mt-11 grid place-items-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl text-[#1E5128] font-bold text-center'>
                Contacter nous
            </h1>
            <br/>
        
    <div className="container flex flex-wrap gap-10 justify-center place-items-center">
        <div className="hidden md:flex w-full md:w-1/3">
            <img className='object-contain hover:object-scale-down' src={contactUS} alt="" />
        </div>
        <form className=" mb-20 md:w-1/3 flex flex-col gap-2 " ref={form} onSubmit={sendEmail}>
                    <div className="flex w-full justify-center flex-row gap-4">
                    <div className="mb-2 w-[50%]">
                        <Label>Nom</Label>
                        <TextInput type="text" placeholder="flen benfoulen" />
                    </div>
                    <div className="mb-2 w-[50%]">
                        <Label>Email</Label>
                        <TextInput type="email" name="user_email" placeholder="flen@benfoulen.com" required />
                    </div>
                    </div>
                    <Label>Message</Label>
                    
                    <Textarea rows="5" name="message" placeholder='Écrire votre message ici' />
                    
                    <Button type="submit" value="Send" className='bg-[#1E5128] hover:bg-[#4E9F3D]'>Envoyer</Button>
        </form>
    </div>

    </div>
  )
}

export default Contact

