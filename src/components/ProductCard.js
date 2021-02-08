import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const imgSrc =
  "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

const cardStyle = {
  margin: "1rem", 
  padding: "1.5rem",
  borderRadius: "15px",
  boxShadow: '1px 1px 5px grey'
}
const inputStyle={
 width: "25%",
 height: "1.5rem",
};
const buttonStyle={
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  marginLeft: "1rem"
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
    <div id={id} style={cardStyle}>
      <img src={imgSrc} alt="product" style={{maxHeight: "200px"}} />
      <p>{name}</p>
      <p style={{color:"steelblue"}}>{`£${price} each`}</p>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          style={inputStyle}
          onChange={(e) => handleChange(e)}
        ></input>
        <button 
         onClick={(e) => handleClick(e)}
         style={buttonStyle}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;