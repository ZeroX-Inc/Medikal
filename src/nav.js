import {React, useEffect} from 'react'
import logo from './img/logo.png'
import './nav.css'
import { LogOut } from 'react-feather';

function Nav() {
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          const logo = document.querySelector('.logo');
          const logox = document.querySelector('.logo-text');

          if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
            logo.classList.add('hide-logo');
            logox.classList.add('hide-logo');
          } else {
            navbar.classList.remove('scrolled');
            logo.classList.remove('hide-logo');
            logox.classList.remove('hide-logo');
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

        function scrollToTop(event) {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
          event.preventDefault();
          document.getElementById("scrollableDiv").scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }

    return (
        <div className="top-nav">
          <div className='logo-text'>
            <a href="admin">
              <img src={logo} className="logo" style={{ width: '5%', position: 'fixed', top: 10, zIndex: 1}} />
            </a>
              <a href="admin" id='log-txt' className="logtex"><strong>MEDIKU - DOCTOR SPACE</strong></a>
          </div>
        <nav className="navbar">
        <ul className="nav-links">
                <li><a href="#home"><strong>CONTACT</strong></a></li>
                <li style={{transform: "translateY(3px)"}}><a href="login"><strong><LogOut size={20}/></strong></a></li>
            </ul>
        </nav>
        <br/>
        <br/>
      </div>
    )
}

export default Nav;