import React from 'react'
import { Link } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png'
import spray from '../assets/sprayIcon.png'

function Top() {

    const reload = ()=>{
        window.location.href= '/'
    }

  return (
    <div className='topContain'>
        {/* <img className="mainLogo" src="https://i.ibb.co/HqZSYxp/PODPHONIC-MIC-LOGO-COMPLETE-1-11-11-23.png" alt="main logo" /> */}


        <div className='navcont'>
      
      <div className="sprayContain">
      <img onClick={reload} src={spray} alt="spray logo img" className="sprayIcon" />
      </div>

      <div className="btnContain">
        <Link to="/contactUS">
      <button className='btn1'>
        CONTACT
      </button>
      </Link>
      <button className='btn2'>
        SERVICES
      </button>
      <button className='btn3'>
        WORK
      </button>
      <button className='btn4'>
        ABOUT
      </button>
      <button className='btn5'>
        LINKS
      </button>
      </div>
    </div>


        <img className="mainLogo" src={mainLogo} alt="main logo" />

        
    </div>
  )
}

export default Top