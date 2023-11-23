import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from './components/Link';
import './App.css';
import items from './config/items';
import playlist from './config/playlist';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    document.title = 'Arne Van Daele - Propellor Digital';
  }, []);
  return (
    <div className='bg-gradient-to-tr from-indigo-500 to-indigo-900'>
      <Header />

        <div className='px-8 mb-8'>
            <p className='text-white text-sm uppercase mb-2'>My preferred languages and stacks</p>
            <div className='flex space-x-3 items-center bg-black/40 backdrop-blur-lg rounded-md p-4 text-white'>
                <div className='grid grid-cols-2 w-full'>
                    <p className='text-gray-200'>- Laravel (TALL)</p>
                    <p className='text-gray-200'>- React</p>
                    <p className='text-gray-200'>- Vue</p>
                    <p className='text-gray-200'>- TailwindCSS</p>
                    <p className='text-gray-200'>- Javascript</p>
                    <p className='text-gray-200'>- HTML & (S)CSS</p>
                    <p className='text-gray-200'>- Python</p>
                    <p className='text-gray-200'>- Lua</p>
                    <p className='text-gray-200'>- C#</p>
                    <p className='text-gray-200'>- PHP</p>
                </div>
            </div>

            {/*<a target='_blank' className='flex space-x-3 items-center bg-black/40 backdrop-blur-lg rounded-md p-4 text-white hover:bg-black/60 transition ease-in-out duration-300 mt-2'>*/}
            {/*    <FontAwesomeIcon icon={faChevronRight} className='text-xl'/>*/}
            {/*    <p className='-mt-0.5 font-bold'>My expertise</p>*/}
            {/*</a>*/}
        </div>

        <div className='px-8 mb-8'>
            <p class='text-white text-sm uppercase mb-2'>My Socials</p>
            <div className='flex flex-col space-y-2'>
                {items.map((item, index) => (
                    <Link key={index} item={item} />
                ))}
            </div>
        </div>

        <div className='px-8'>
            <p className='text-white text-sm uppercase mb-2'>My Spotify playlists</p>
            <div className='flex flex-col space-y-2'>
                {playlist.map((item, index) => (
                    <Link key={index} item={item} />
                ))}
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default App;
