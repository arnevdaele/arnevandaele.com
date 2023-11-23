import Header from './components/Header';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Arne Van Daele - Propellor Digital';
  }, []);
  return (
    <div className='h-screen w-auto bg-gray-100'>
      <Header />
      
      <div className='flex justify-center mt-8'>
        Deze module is tijdelijk niet beschikbaar.
      </div>
    </div>
  );
}

export default App;
