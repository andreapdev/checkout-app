import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const imgSrc =
  "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

const imgStyle = {
  maxHeight: "200px"
};
const ProductCard = ({ id, name, price, handleProductAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleProductAdd(id, name, quantity, price);
  };

  return (
    <div id={id}>
      <img src={imgSrc} alt="product" style={imgStyle} />
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => handleChange(e)}
        ></input>
        <button 
         onClick={(e) => handleClick(e)}
        >
          <FontAwesomeIcon icon={faShoppingBasket} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;