import React from 'react'
import micon2 from '../assets/miconFoot.png'

function Bottom() {
  return (
    <div> 

    <div className="bottomCont">
        <h4 className='infoTxt'>
        I’ve worked in podcasting since 2011 <br></br>I have produced shows that have had Nobel Prize-winning guests and have received millions of downloads.
        <br></br>
        <hr></hr>
If you’re looking to start a podcast, you’re in the right place.
<br></br>
 I will edit, mix, master, administer, and help you find guests for your podcast. 
 <br></br>
 Starting a podcast is a very powerful marketing tool and a great way to make connections with others within your industry. 
 <br></br>
 <br></br>
 Ever thought about it? It might be the time.
<br></br>
<br></br><br></br>
Lots of ‘umms’ and ‘uhhs’ in your speech? 
<br></br>I can make anyone sound like a professional public speaker with some magic editing. <br></br><br></br>Show notes? 
<br></br>Check. I’ll do that for you. <br></br><br></br>Making sure episodes go up on all the platforms on time? <br></br>That’s me. <br></br><br></br>If you’re scared off by tech stuff, don’t worry, I’ve got your back. <br></br>All you have to do is press record, upload the file to me, and I’ll take care of the rest!
&nbsp;<br></br>
<br></br>
Want to work with me?
<br></br>

Send me an email at info@podphonic.co
<br></br>
<br></br>
EDITING | ADMINISTRATION | MIXING | MASTERING | GUESTING | & MORE
        </h4>
        {/* <p></p> */}
        <div className="creditContain">
        <p className='rightsTxt'>© All rights reserved by PodPhonic</p><img src={micon2} className='micon2' onClick={() => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    });
}} alt='microphone icon small'></img>
        </div>
    </div>

    </div>
  )
}

export default Bottom