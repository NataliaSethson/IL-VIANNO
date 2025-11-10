import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  
  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', handleTouch, { once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.menu-item')) {
        setHoverMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

 
  const toggleMenu = () => {
    if (isTouch) {
      setHoverMenu(!hoverMenu);
    }
  };

  return (
    <div className='navConteiner'>
      <header>
        <Link to='/' className='titleCont'>IL VIANNO</Link>
        <nav className='barraNav'>
          <ul>
            <li>
              <Link to='/resenas'>RESEÑAS</Link>
            </li>

            <li
              className="menu-item dropdown"
              onMouseEnter={() => !isTouch && setHoverMenu(true)}
              onMouseLeave={() => !isTouch && setHoverMenu(false)}
              onClick={toggleMenu}
            >  
              <Link to ="/menu">
              <span className="menu-link">MENÚ</span>
              </Link>
              {hoverMenu && (
                <ul className="dropdown-menu">
                  <li><Link to="/menu/comida">COMIDA</Link></li>
                  <li><Link to="/menu/postre">POSTRES</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to='/ubicacion'>UBICACIÓN</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;



