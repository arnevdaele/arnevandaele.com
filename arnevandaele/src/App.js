import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import items from './items';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
  useEffect(() => {
    document.title = 'Arne Van Daele - Propellor Digital';
  }, []);
  return (
    <div className='h-screen w-auto bg-gradient-to-tr from-indigo-500 to-indigo-900'>
      <Header />

        <div className='px-8'>
            <p class='text-white text-sm uppercase mb-2'>Socials</p>
            <div className='flex flex-col space-y-2'>
                {items.map((item, index) => (
                    <a key={index} href={item.url} target='_blank' className='flex space-x-3 items-center bg-black/40 backdrop-blur-lg rounded-md p-4 text-white hover:bg-black/60 transition ease-in-out duration-300'>
                        <FontAwesomeIcon icon={item.icon} className='text-2xl'/>
                        <p className='-mt-0.5 font-bold'>{item.title}</p>
                    </a>
                ))}
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default App;
