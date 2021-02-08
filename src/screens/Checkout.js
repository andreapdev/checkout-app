import React from 'react';
import Body from '../layout/Body'

const Checkout = ({cart, totalAmount, handleOrder}) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleOrder();
    }

    const CheckoutLine = ({name, quantity, price, newPrice}) => {
        return (
            <div style={{display: "flex", justifyContent:"space-around", margin: "1rem 0"}}>
                <div style={lineItemStyle}>{name}</div>
                <div style={lineItemStyle}>{quantity}</div>
                <div style={lineItemStyle}>
                    <div>
                        £{(Math.round(price*quantity*100)/100)} 
                    </div>
                    <div style={subpriceStyle}>
                        ({(Math.round(price*100)/100)} each)
                    </div>
                
                </div>
                <div style={lineItemStyle}>{`£${(Math.round(newPrice*100)/100)}`}</div>
            </div>
        );
    }

    const CheckoutList = () => {
        const checkoutDisplay=cart.map(item=>{
            return <CheckoutLine key={item.name} name={item.name} quantity={item.quantity} price={item.price} newPrice={item.newPrice}/>
        })
        return checkoutDisplay;
    }

    return (
        <>
            <Body title="My Cart">
                <div style={{display: "block"}}>
                    {
                    totalAmount>0?
                        <>
                            <div style={{display: "flex", justifyContent:"center"}}>
                                <div style={titleItemStyle}>Product</div>
                                <div style={titleItemStyle}>Quantity</div>
                                <div style={titleItemStyle}>Original price</div>
                                <div style={titleItemStyle}>Final price</div>
                            </div>
                            <div><CheckoutList /></div>
                            <div style={{textAlign: "center", marginTop: "2rem"}}>{`Total: £${(Math.round(totalAmount*100)/100)}`}</div>
                            <button onClick={(e)=>handleClick(e)} style={buttonStyle}>Confirm Order</button>
                        </>
                    :
                        <div style={{textAlign: "center", marginTop: "2rem"}}>Your cart is empty!</div>
                    }

                </div>
            </Body>
        </>
    );
}

const lineItemStyle = {
    flex: 1, 
    textAlign: 'left',
    minWidth: '10rem'
}
const titleItemStyle = {
    flex: 1, 
    textAlign: 'left',
    color: 'steelblue',
    fontSize: '1.2rem',
    minWidth: '10rem'
}
const buttonStyle = {
    fontSize: "1.5rem",
    marginTop: "2rem"
}
const subpriceStyle = {
    fontSize: "0.8rem",
    color: "grey",
    fontSyle: "italic"
}

export default Checkout;