import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <h3 style={style}><Link to='/music'>سرگرمی</Link></h3>
        <h3 style={style}><Link to='/'>درباره ما</Link></h3>
        <h3 style={style}><Link to='/reviews'>نظرات</Link></h3>
        <h3 style={style}><Link to='/ListOrders'>سفارشات</Link></h3>
        <h3 style={style}><Link to='/projects'>محصولات</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default Header;
