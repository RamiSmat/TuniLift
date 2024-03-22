import React from 'react'
import logo from "../img/logotunilift.png"
const Footer = () => {
  return (
    
<footer class="bg-[#191A19] w-fullshadow dark:bg-[#191A19] ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/*<img src={logo} class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-3xl text-white font-semibold whitespace-nowrap dark:text-white">TuniLift</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#apropos" class="hover:underline me-4 md:me-6">À propos</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">politique de confidentialité</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">TuniLift™</a>. Tous droits réservés.</span>
    </div>
</footer>


  )
}

export default Footer