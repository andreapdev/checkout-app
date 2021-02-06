import React from 'react';
const axios = require("axios");

const ProductDeck = () => {

    //loop assigning values to Product Cards
  async function getProducts() {
    try {
        const products = await axios.get("http://localhost:3001/products");
        console.log(products.data);
        
    } catch (error) {
        console.error(error);
    }
  }
    return (
        <>
            <div>This is the ProductDeck</div>
            <button onClick={getProducts}>GET</button>
        </>
    );
}

export default ProductDeck;