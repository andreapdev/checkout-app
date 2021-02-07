import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const logoSrc="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png";

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  minHeight: '10vh',
  backgroundColor: 'steelblue'
};

const logoStyle = {
  height: '6rem',
  width: '6rem'
}

const titleStyle = {
  color: 'white',
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const linkStyle = {
  color:'white',
}
  
const Header = ({title}) => {
  return (
    <div style={containerStyle}>
      <div>
        <Link to='/'><img src={logoSrc} alt="logo" style={logoStyle}/></Link>
      </div>
      <div style={titleStyle}>{title}</div>
      <div style={titleStyle}>
        <Link to='/checkout' style={linkStyle}><FontAwesomeIcon icon={faShoppingBasket} /></Link>
      </div>
    </div>
  );
};

export default Header;