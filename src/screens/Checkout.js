import React from 'react';
import Body from '../layout/Body'

const Checkout = ({cart}) => {

    const CheckoutLine = ({name, quantity, price, newPrice}) => {
        return (
            <div style={{display: "flex", justifyContent:"space-around"}}>
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{`£${price}`}</div>
                <div>{`£${Math.round(newPrice*100)/100}`}</div>
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
            <Body>
                <div style={{minHeight: "80vh"}}>
                    <div style={{display: "flex", justifyContent:"space-around"}}>
                        <div>Product</div>
                        <div>Quantity</div>
                        <div>Original price</div>
                        <div>Discounted price</div>
                    </div>
                    <div><CheckoutList /></div>
                </div>
            </Body>
        </>
    );
}

export default Checkout;