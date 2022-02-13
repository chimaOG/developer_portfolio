import Headroom from 'react-headroom';
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <div className="root bg-background">
      <Headroom className = 'w-full z-30'>
        <Header />
      </Headroom>

      <main>
        
      </main>
    </div>
  );
}

export default App;
