import {React, useEffect} from 'react';
import logo from './img/logo.png';
import logoE from './img/logo.png';
import logoD from './img/doc-white.png';
import logoG from './img/nurse-white.png';

export default function Super() {

  useEffect(() => {
    document.title = 'General AdmiDash';
  }, []);

  return (
    <div className='Super'>
      <h1>General Admin Dashboard</h1>
      <p>The PassKey everyone wants</p>
      <div className='link-container'>
        <a href="/login">LOGIN</a>
        <img src={logo} alt="MEDIC Logo" className="hover-image" />
      </div> <br/>
      <div className='link-container'>
        <a href="/admin">DOC</a>
        <img src={logoD} alt="MEDIC Logo" className="hover-image" />
      </div>
      <div className='link-container'>
        <a href="/adminNURSE">NURSE</a>
        <img src={logoG} alt="NURSE Logo" className="hover-image" />
      </div>
    </div>
  );
}
