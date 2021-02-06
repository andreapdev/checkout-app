import React from 'react';
import Body from '../layout/Body';
import ProductDeck from '../components/ProductDeck';

const Home = () => {

    return (
        <>
            <Body>
            <p>This is the Home Screen!</p>
            <ProductDeck />
            </Body>
        </>
    );
}

export default Home;