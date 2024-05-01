import React from 'react'

const Apropos = () => {
  return (
    <div id="apropos" className='place-items-center mb-11'>
            <h1 className='md:text-5xl mb-7 sm:text-4xl text-3xl text-[#1E5128] font-bold text-center'>
                À propos
            </h1>
            
            <p class="text-xl text-black p-5 text-center dark:text-gray-400">TuniLift est une société Tuniso-italienne spécialisée dans le monde des moyens de transport vertical (vente, installation, maintenance et entretien des ascenseurs)</p>

            <div className="flex place-items-center gap-10 justify-center mt-12 flex-wrap"> 
              <div className='mb-10'>
                    <a  class="block h-[25vh] max-w-sm p-6 bg-[#4E9F3D] border border-gray-200 rounded-lg shadow hover:bg-[#1E5128] transition duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-white dark:text-white">10 ans d'expérience dans le domaine d'ascenseurs en Italie</h5>
                    <p class="font-normal text-white dark:text-gray-400">Nous avons Réalisés des grand projets :
                    <ul className="max-w-md space-y-1 mt-3 text-white list-disc list-inside dark:text-gray-400">
                      <li>Vodafone centrale à Milan</li>
                      <li>Porta Nova de 42 étages.</li>
                    </ul></p>
                    </a>
              </div>
              <div className='mb-10'>
                    <a class="block h-[25vh] max-w-sm p-6 bg-[#4E9F3D] border border-gray-200 rounded-lg shadow hover:bg-[#1E5128] transition duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-white dark:text-white">Nous occupons le marché tunisien et algérien depuis 2013</h5>
                    <p class="font-normal text-white dark:text-gray-400">En visant le grand Maghreb.</p>
                    </a>
              </div>
              <div className='mb-10'>
                    <a  class="block  h-[25vh] max-w-sm p-6 bg-[#4E9F3D] border border-gray-200 rounded-lg shadow hover:bg-[#1E5128] transition duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-white dark:text-white">TUNILIFT met sa passion</h5>
                    <p class="font-normal text-white pt-5 dark:text-gray-400">pour mettre en place des services solides, ponctuels et de haute qualité.</p>
                    </a>
              </div>
            </div>
    </div>
  )
}

export default Apropos