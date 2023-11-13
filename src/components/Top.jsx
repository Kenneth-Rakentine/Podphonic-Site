import React from 'react'
import mainLogo from '../assets/mainLogo.png'
import spray from '../assets/sprayIcon.png'

function Top() {
  return (
    <div className='topContain'>
        {/* <img className="mainLogo" src="https://i.ibb.co/HqZSYxp/PODPHONIC-MIC-LOGO-COMPLETE-1-11-11-23.png" alt="main logo" /> */}


        <div className='navcont'>
      
      <div className="sprayContain">
      <img src={spray} alt="spray logo img" className="sprayIcon" />
      </div>

      <div className="btnContain">
      <button className='btn1'>
        CONTACT
      </button>
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