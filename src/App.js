import React, { useEffect } from 'react';
import './App.css';
import Login from './login';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const logo = document.querySelector('.logo');

      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        logo.classList.add('hide-logo');
      } else {
        navbar.classList.remove('scrolled');
        logo.classList.remove('hide-logo');
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
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
