import React from 'react';
import {BsPersonFill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// import Nav from './Nav';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='center-with-padding grid-col'>
      <div className="logo" onClick={()=>navigate("/")}>
        <span className='logo-span'>MY</span>EVENT
      </div>
      <div className="profil-icon" onClick={()=>navigate("/profil")}>
        <BsPersonFill color='orange'/>
      </div>
    </header>
  )
}

export default Header;