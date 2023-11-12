import React from 'react'
import mainLogo from '../assets/mainLogo.png'


function Top() {
  return (
    <div className='topContain'>
        {/* <img className="mainLogo" src="https://i.ibb.co/HqZSYxp/PODPHONIC-MIC-LOGO-COMPLETE-1-11-11-23.png" alt="main logo" /> */}

        <img className="mainLogo" src={mainLogo} alt="main logo" />

        
    </div>
  )
}

export default Top