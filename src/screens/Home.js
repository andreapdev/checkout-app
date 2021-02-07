import React from 'react';
import Body from '../layout/Body';
import ProductDeck from '../components/ProductDeck';

const Home = ({handleProductAdd}) => {

    return (
        <>
            <Body title="Online shop">
                    <ProductDeck handleProductAdd={handleProductAdd}/>
            </Body>
        </>
    );
}

export default Home;