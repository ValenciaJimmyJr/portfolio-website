import React, { useState, useEffect } from 'react';
import { BiMoon, BiSun, BiGridAlt, BiX } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) setScrollHeader(true);
      else setScrollHeader(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <div className="container nav-container">
        <Link to="home" smooth={true} duration={500} className="logo" style={{cursor: 'pointer'}}>
          Dev<span>Portfolio</span>
        </Link>
        
        <div className={`nav-menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(item => (
              <li className="nav-item" key={item}>
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="nav-link"
                  onClick={closeMenu}
                  style={{textTransform: 'capitalize'}}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-close" id="nav-close" onClick={closeMenu}>
            <BiX />
          </div>
        </div>
        
        <div className="nav-actions">
          <div className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <BiSun /> : <BiMoon />}
          </div>
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <BiGridAlt />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
