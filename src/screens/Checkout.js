import React from 'react';
import Body from '../layout/Body'

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

const Checkout = ({cart}) => {

    const CheckoutLine = ({name, quantity, price, newPrice}) => {
        return (
            <div style={{display: "flex", justifyContent:"space-around"}}>
                <div style={lineItemStyle}>{name}</div>
                <div style={lineItemStyle}>{quantity}</div>
                <div style={lineItemStyle}>{`£${(Math.round(price*100)/100)}`}</div>
                <div style={lineItemStyle}>{`£${(Math.round(newPrice*100)/100)}`}</div>
            </div>
        );
    }

    const CheckoutList = () => {
        console.log('checkout',cart);
        const checkoutDisplay=cart.map(item=>{
            return <CheckoutLine key={item.name} name={item.name} quantity={item.quantity} price={item.price} newPrice={item.newPrice}/>
        })
        return checkoutDisplay;
    }

    return (
        <>
            <Body title="My Cart">
                <div style={{display: "block"}}>
                    <div style={{display: "flex", justifyContent:"center"}}>
                        <div style={titleItemStyle}>Product</div>
                        <div style={titleItemStyle}>Quantity</div>
                        <div style={titleItemStyle}>Original price</div>
                        <div style={titleItemStyle}>Final price</div>
                    </div>
                    <div><CheckoutList /></div>
                </div>
            </Body>
        </>
    );
}

export default Checkout;