import React from 'react';
import Body from '../layout/Body';
import ProductDeck from '../components/ProductDeck';

const Home = ({handleProductAdd, totalAmount}) => {

    return (
        <>
            <Body title="Online shop" totalAmount={totalAmount}>
                    <ProductDeck handleProductAdd={handleProductAdd}/>
            </Body>
        </>
    );
}

export default Home;