import React from 'react';
import Body from '../layout/Body';
import ProductDeck from '../components/ProductDeck';

const Home = ({handleProductAdd}) => {

    return (
        <>
            <Body>
                <div style={{minHeight: "80vh"}}>
                    <ProductDeck handleProductAdd={handleProductAdd}/>
                </div>
            </Body>
        </>
    );
}

export default Home;