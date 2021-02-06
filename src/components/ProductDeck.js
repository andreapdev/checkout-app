import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
const axios = require('axios');

const ProductDeck = ({handleProductAdd}) => {

  const [productRender, setProductRender] = useState([]);
 
  const productLoop = async() => {
    let helperArray = [];
    try {
        const products = await axios.get("http://localhost:3001/products");
        const productData=products.data;
        console.log(productData);
        helperArray.push(
            productData.map((product) => {
                return (
                <ProductCard
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    handleProductAdd={handleProductAdd}
                />
                );
            })
        );
        setProductRender(helperArray);
    } catch (error) {
        console.error(error);
    }

  };

  useEffect(()=>productLoop(), []);

  const deckStyle = {
    display: "flex",
    justifyContent: "space-around"
  };

  return <div style={deckStyle}>{productRender}</div>;
};

export default ProductDeck;