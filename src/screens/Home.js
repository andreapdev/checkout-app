import React from 'react';
import Body from '../layout/Body';
import ProductDeck from '../components/ProductDeck';

const Home = ({handleProductAdd}) => {

    return (
        <>
            <Body>
                <ProductDeck handleProductAdd={handleProductAdd}/>
            </Body>
        </>
    );
}

export default Home;