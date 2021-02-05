import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  
  const Header = () => {
    return (
      <div style={containerStyle}>
        <div>
          <Link to='/'>LOGO</Link>
        </div>
        <div>Title</div>
        <div>
          <Link to='/checkout'>My Cart</Link>
        </div>
      </div>
    );
  };
  
  export default Header;