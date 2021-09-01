import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

  return (
    <>
      <nav className='header'>
        <div className='header-container'>  
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='menu-logo'>
            <img src='images/logo.svg' alt="Logo" onClick={scrollToTop} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/repository'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Repositório
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recommender'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recomendações
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}