import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Body = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Body;