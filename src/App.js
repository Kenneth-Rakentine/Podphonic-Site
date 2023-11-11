import './App.css';
import Head from './components/Head';
import Logo from './components/Logo';
import { useState, useEffect } from 'react';
import Splash from './pages/Splash';
import MicFore from './components/MicFore';
import Nav from './components/Nav';
import Lower from './components/Lower';
import LogoTxt from './components/LogoTxt';
import Top from './components/Top';


function App() {

  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 2050);
  }, []);


  return (
    <div className="App">
      {isLoading ? (
      <Splash/>
      ) : (
      <div>
      <Nav/>
      <Top/>
      <Logo/>
      <LogoTxt/>
        <div className='parallax'>
     <Head/>
     {/* <MicFore/> */}
        </div>
        
     
     <Lower/>
     </div>
    )}
    </div>
  );
}

export default App;
