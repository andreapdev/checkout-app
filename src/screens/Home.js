import React from 'react';
import Body from '../layout/Body';
import ProductCard from '../components/ProductCard';

const Home = () => {

    return (
        <>
            <Body>
            <p>This is the Home Screen!</p>
            <ProductCard />
            </Body>
        </>
    );
}

export default Home;