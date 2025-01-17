import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/mainLogo11-18-23.png';
import spray from '../assets/sprayIcon.png';
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import circle from '../assets/blackCircle.png'


function Top() {

    const reload = ()=>{
        window.location.href= '/'
    };
    
    const clicker = ()=>{
      window.scrollTo(0, document.body.scrollHeight);
   }

   

    // const facebook = 'https://www.facebook.com/podphonic';

    // const twitter = 'https://twitter.com/pod_phonic';

  return (
    
    <div className='topContain'>
        {/* <img className="mainLogo" src="https://i.ibb.co/HqZSYxp/PODPHONIC-MIC-LOGO-COMPLETE-1-11-11-23.png" alt="main logo" /> */}


        <div className='navcont'>
      
      <div className="sprayContain">
      <img onClick={reload} src={spray} alt="spray logo img" className="sprayIcon" />
      </div>

      <div className="btnContain">
        <Link to="/contactUS">
      <button onClick={clicker} className='btn1'>
        CONTACT
      </button>
      </Link>
      <button className='btn2'>
        SERVICES
      </button>
      <button className='btn3'>
        WORK
      </button>
      <Link to="https://podphonic.co/?fbclid=IwAR1RkkY6zPoKeUE8GHRGmaipiBBKTBhRTNZomKf2BbOfzKiHwMEIWKBAWjo">
      <button className='btn4'>
        ABOUT
      </button>
      </Link>
      <Link to="mailto:info@podphonic.co">
      <button className='btn5'>
        EMAIL
      </button>
      </Link>
      </div>
    </div>

    
    <div className="linkContain">
    <Link to="https://www.facebook.com/podphonic">
        <img src={fb} alt="fb icon" className="fb" />
    </Link>
    <br></br>
    <Link to="https://twitter.com/pod_phonic">
        <img className='xIcon'src={x} alt="x icon" />
    </Link>
    

    </div>
   
        

        <img className="mainLogo" src={mainLogo} alt="main logo" />
        <h1 className='subTxt'>PRECISION PODCAST EDITING SERVICE</h1>
        
    </div>
    
  )
}

export default Top