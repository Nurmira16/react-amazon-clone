import React from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';


function Header() {
  const navigate=useNavigate()
  const handleLogoClick = () => {
    // Navigate back one step
    navigate(-1);
  };

  const[{basket}]=useStateValue()
  console.log(basket)
  return (
    <nav className='header' >
      <Link to='/' >
      <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' onClick={handleLogoClick}/>
      </Link>
      <div className='header__search'>
      <input className='searchInput '/>
      <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
        <Link to='/login'className='header__link'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Hello,</span>
              <span  className='header__optionLineTwo'>Sign in</span>
          </div>
        </Link>
        <Link to='/login'className='header__link'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/login'className='header__link'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon/>
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
        </Link>
        </div>
    </nav>
  );
}

export default Header;
