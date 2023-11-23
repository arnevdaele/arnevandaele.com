import React from 'react';

const Header = () => {
    return (
        <div className='flex w-screen text-center justify-center text-white py-12 lg:py-24'>
          <div className='flex flex-col items-center'>
            <img className='h-28 w-28 rounded-full border-2 border-white/10 drop-shadow-lg mb-5 lg:mb-8' src='arne.jpg'></img>
            <div className='font-bold text-2xl lg:text-4xl'>Arne Van Daele</div>
            <div className='text-leading font-light italic'>Full-stack developer</div>
          </div>
        </div>
      );
}

export default Header;