import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const imgSrc =
  "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

const imgStyle = {
  maxHeight: '200px'
};
const ProductCard = () => {
  return (
    <div>
      <img src={imgSrc} alt="product" style={imgStyle} />
      <p>Product name</p>
      <div>
        <input type="number" min="1" defaultValue="1"></input>
        <button>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;