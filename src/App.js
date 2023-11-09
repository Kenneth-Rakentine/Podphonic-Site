import './App.css';
import Head from './components/Head';
import Logo from './components/Logo';
import { useState, useEffect } from 'react';
import Splash from './pages/Splash';
import MicFore from './components/MicFore';
import Nav from './components/Nav';


function App() {

  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500);
  }, []);


  return (
    <div className="App">
      {isLoading ? (
      <Splash/>
      ) : (
      <div>
      <Nav/>
        <div className='parallax'>
     <Head/>
     <MicFore/>
        </div>
     <Logo/>
     </div>
    )}
    </div>
  );
}

export default App;
