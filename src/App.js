import './App.css';
import Head from './components/Head';
import Logo from './components/Logo';
import { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from './pages/Splash';
import MicFore from './components/MicFore';
import Nav from './components/Nav';
import Lower from './components/Lower';
import LogoTxt from './components/LogoTxt';
import Top from './components/Top';
import Bottom from './components/Bottom';
import ContactUs from './components/ContactUs';
import Links from './components/Links';


function App() {

  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1700);
  }, []);

  

  return (
    <div className="App">
      {isLoading ? (
      <Splash/>
      ) : (
      <div>
      {/* <Nav/> */}
      <Top/>
      {/* <Links/> */}
      <Logo/>
      <LogoTxt/>
        <div className='parallax'>
     <Head/>
     {/* <MicFore/> */}
        </div>
        
     <Bottom/>
     {/* <Lower/> */}
     <Routes>
        <Route path="/contactUs" element={<ContactUs/>}/>
    </Routes>
     </div>
    )}
    </div>
  );
}

export default App;
