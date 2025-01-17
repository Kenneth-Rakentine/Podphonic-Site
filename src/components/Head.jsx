import React from 'react';
import rec from '../assets/recordbtn.png';
import recTxt from '../assets/recTxt.png'


function Head() {
  return (
    <div className='headCont'>
       
        {/* <img className="waveformGif" src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/6229d40f625c70840c12bcd7_BlogGif_2.gif" alt="waveform gif" /> */}

        
        

        <img className="waveformGif" src="https://i.ibb.co/qmCsVQg/ezgif-com-resize.gif" alt="waveform gif" />


        <div className='lowerCont'>
        <img className="presentGif" src="https://www.thehatchergroup.com/wp-content/uploads/2022/10/podcast.jpg" alt="presentation gif" />
    </div>

    <div className="recTxtContain">
    {/* <h1 className='rectagTxt'> UNLEASH YOUR VOICE, JUST PRESS<h1 className='recordSUbTxt'>RECORD </h1></h1>  */}
    
    <img className='recTxtImg' src={recTxt} alt='record text img'></img>
    
    {/* <img className='recBtnImg' src={rec} alt='record button icon'></img> */}
    </div>

        {/* <img className="logoImg" src="https://i.ibb.co/CztcJWJ/Pod-Phonic-good-Logo-TRansparent-CUT-SHADOW-SMALLER-302x181-11-10-23.png" alt="" /> */}

        {/* <img  className="logoImg" src="" alt="sketch logo img" /> */}

    </div>
  )
}

export default Head