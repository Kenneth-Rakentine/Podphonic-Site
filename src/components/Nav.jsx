import React from 'react'
import spray from '../assets/sprayIcon.png'


function Nav() {
  return (
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
  )
}

export default Nav