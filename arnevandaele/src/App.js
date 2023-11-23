import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Arne Van Daele - Propellor Digital';
  }, []);
  return (
    <div className='h-screen w-auto bg-gradient-to-tr from-indigo-500 to-indigo-900'>
      <Header />
      
      <div className='px-8'>
        <div className='bg-white rounded-md shadow-md p-6'>
          Deze module is tijdelijk niet beschikbaar.
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
