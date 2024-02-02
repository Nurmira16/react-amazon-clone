import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <nav className='header' >
      <Link to={'/'}>
      <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'/>
      </Link>
      <div className='header__search'>
      <input className='searchInput '/>
      <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
        <Link to='/'className='header__link'>
          <div className='header__option'>
              <span>Hello,</span>
              <span>Sign in</span>
          </div>
        </Link>
        <Link to='/'className='header__link'>
          <div className='header__option'>
              <span>Returns</span>
              <span>& Orders</span>
          </div>
        </Link>
        <Link to='/'className='header__link'>
          <div className='header__option'>
              <span>Your</span>
              <span>Prime</span>
          </div>
        </Link>
        </div>
    </nav>
  );
}

export default Header;
