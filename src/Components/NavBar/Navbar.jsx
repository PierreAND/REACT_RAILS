import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState(window.innerWidth);

const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

const logout = () => {
  Cookies.remove('token');
}

useEffect(()=> {

  const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
window.addEventListener("resize", changeWidth);


  return () => {
    window.removeEventListener("resize", changeWidth);
  }
}, [])


  return (
    <nav>
      {(toggleMenu ||largeur > 500) && (

        <ul className="liste">
  <li className="items"><Link to="/">Accueil</Link></li>
  <li className="items"><Link to="/register">Register</Link></li>
  <li className="items"><Link to="/login">Login</Link></li>
  <button onClick={logout} className="btn-deconect">Log Out</button>
   
 </ul>
   )}
 <button onClick={toggleNav} className="btn">☰</button>

 </nav>
 
  )
}

export default Navbar;