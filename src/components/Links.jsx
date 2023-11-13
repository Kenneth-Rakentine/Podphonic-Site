import React from 'react'
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import { Link } from 'react-router-dom';

function Links() {
  return (
    
<div className="linkContain">
    <Link to="https://www.facebook.com/podphonic">
        <img src={fb} alt="fb icon" className="fb" />
    </Link>
    <br></br>
    <Link to="https://twitter.com/pod_phonic">
        <img className='xIcon'src={x} alt="x icon" />
    </Link>
    

    </div>
    
  )
}

export default Links