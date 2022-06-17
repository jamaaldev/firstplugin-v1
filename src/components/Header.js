import { useCallback, useEffect,useRef } from 'react';
import './Header.scss'
const Header = () => {
  
  const TabHome = useRef()

const handleClick = useCallback(() => {
  TabHome.current.click()
}, [])

useEffect(()=>{
      handleClick()
    })
    
    const openCity = (evt, cityName) => {
  
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <>
      <div className="tab" >
        <div className="logo">
          {/* <img className="logos" src="/" alt="logo" width="120px"/> */}
          {/* you can delete h3 after you insert your svg or img logo in img element */}
          <h3>Your Logo</h3>
        </div>
        <button id="tabhome" ref={TabHome} className="tablinks home" onClick={(e)=>openCity(e, 'Dashboard')}>Dashboard</button>
        <button className="tablinks support"    onClick={(e)=>openCity(e, 'Support')}>Support</button>
        <button className="tablinks settings"  onClick={(e)=>openCity(e, 'Settings')}>Settings</button>
        <button className="tablinks templates"  onClick={(e)=>openCity(e, 'Templates')}>Templates</button>
      </div>

  <div id="Dashboard"   className="tabcontent">
    <p className='pheadline'>Dashboard</p>
    <p>London is the capital city of England.</p>
  </div>
  
  <div id="Support"  className="tabcontent">
    <p className='pheadline'>Support</p>
    <p>Paris is the capital of France.</p>
  </div>
  
  <div id="Settings" className="tabcontent">
    <p className='pheadline'>Settings</p>
    <p>Tokyo is the capital of Japan.</p>
  </div>

  <div id="Templates" className="tabcontent">
    <p className='pheadline'>Templates</p>
    <p>Mogadishu is the capital of Somalia.</p>
  </div>

    </>
  );
};

export default Header;
