import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css';

function Nav() {

  let menuMobile = useRef();
  //This constant obtains windows' width
  const [screenWidth, setScreenWidth] = useState(parseInt(window.innerWidth));

  useEffect(()=>{
    setScreenWidth(parseInt(window.innerWidth));
  }, 
  [screenWidth]);

  function showDropDownMenu(){
    if(screenWidth <= 635){
      menuMobile.current.style.display === 'none' ? menuMobile.current.style.display = 'block' : 
      menuMobile.current.style.display = 'none';
    }
    
  }

  return (
    <nav>
      <h1 className="title">Co-Calories</h1>
      <ul ref={menuMobile} className='nav-links'>
        <Link to="/"><li onClick={showDropDownMenu}>Home</li></Link>
        <Link to="favourites"><li onClick={showDropDownMenu}>Favourites</li></Link>       
      </ul>
      <div className='dropDownMenu' onClick={showDropDownMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
    </nav>
  )
}

export default Nav