import React from 'react';
import Body from '../layout/Body'

const Checkout = ({cart}) => {

    const CheckoutLine = ({name, quantity, price}) => {
        return (
            <div style={{display: "flex", justifyContent:"space-around"}}>
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{price}</div>
            </div>
        );
    }

    const CheckoutList = () => {
        console.log('checkout',cart);
        const checkoutDisplay=cart.map(item=>{
            return <CheckoutLine name={item.name} quantity={item.quantity} price={item.price}/>
        })
        return checkoutDisplay;
    }

    return (
        <>
            <Body>
                <div><CheckoutList /></div>
            </Body>
        </>
    );
}

export default Checkout;