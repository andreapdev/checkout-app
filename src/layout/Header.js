import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const logoSrc="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png";
  
const Header = ({title, totalAmount}) => {
  return (
    <div style={containerStyle}>
      <div>
        <Link to='/'><img src={logoSrc} alt="logo" style={logoStyle}/></Link>
      </div>
      <div style={titleStyle}>{title}</div>
      <div style={cartStyle}>
        <Link to='/checkout' style={iconStyle}><FontAwesomeIcon icon={faShoppingBasket} /></Link>
        {totalAmount>0?
          <p style={amountStyle}>£{(Math.round(totalAmount*100)/100)}</p>
        :
          null
        }
      </div>
    </div>
  );
};

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

const cartStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const iconStyle = {
  color:'white',
  fontSize: '3rem',
}

const amountStyle ={
 color: 'white',
 padding: '0.2rem',
 margin: '0'
}

export default Header;