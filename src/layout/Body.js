import React from 'react';
import Header from './Header';
import Footer from './Footer';

const bodyStyle={
  padding:"1rem",
  display: "flex",
  justifyContent: "center"
}

const Body = ({ children, title }) => {
  return (
    <div>
      <Header title={title}/>
      <div style={bodyStyle}>
        {children}
      </div> 
      <Footer />
    </div>
  );
};

export default Body;