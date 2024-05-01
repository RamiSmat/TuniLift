import React from 'react'
import logo from "../img/logotunilift.png"
const Footer = () => {
  return (
    
<footer class="bg-[#191A19] w-fullshadow dark:bg-[#191A19] ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="relative  w-full h-96 mb-7 ">
                <iframe class="absolute rounded-xl top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.7180004796382!2d10.185386676331545!3d36.87316826358219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb274ca5e8bd%3A0xeb693821f372c8bf!2stunilift!5e0!3m2!1sen!2stn!4v1711601177806!5m2!1sen!2stn"
                    frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/*<img src={logo} class="h-8" alt="TuniLift logo" /> */}
                <span class="self-center text-3xl text-white font-semibold whitespace-nowrap dark:text-white">TuniLift</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#apropos" class="hover:underline me-4 md:me-6">À propos</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Politique de confidentialité</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">TuniLift</a>. Tous droits réservés.</span>
    </div>
</footer>


  )
}

export default Footer