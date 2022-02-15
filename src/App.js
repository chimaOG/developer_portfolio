import Headroom from 'react-headroom';
import './App.css';

import Header from './components/Header';
import LeftFixed from './components/LeftFixed';
import RightFixed from './components/RightFixed';
import Banner from './components/Banner';
import About from './components/About';



function App() {
  return (
    <div className="root bg-background font-serif">
      <Headroom className = 'w-full z-30'>
        <Header />
      </Headroom>

      <main className = 'px-12 md:px-24 lg:px-36 2xl:px-96 mt-52 bg-background'>
        <LeftFixed />
        <RightFixed />
        <Banner />
        <About />
        <div className='w-full h-40'></div>
      </main>
    </div>
  );
}

export default App;
