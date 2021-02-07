import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './screens/Home';
import Checkout from './screens/Checkout';

//
const axios=require('axios');

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect (()=>{console.log('effect',cart)}, [cart]);

  const handleProductAdd = async(id, name, quantity, price) => {
    const posRepeated = cart.findIndex(i => i.id === id);

    if(posRepeated>-1){
      const newQuantity=quantity+cart[posRepeated].quantity;
      const newPrice=await checkOffers(id, newQuantity, price);
      const helperObject={id: id, name: name, quantity: newQuantity, price: price, newPrice: newPrice};
      cart.splice(posRepeated, 1, helperObject);
    }else{
      const newPrice=await checkOffers(id, quantity, price);
      const addedObject={ id: id, name: name, quantity: quantity, price: price, newPrice: newPrice };
      cart.push(addedObject);
    }

    let sum=0;
    cart.forEach(item =>{sum=sum+parseFloat(item.price)} );
    setTotalAmount(sum);
  };

  const checkOffers = async(id, quantity, price) =>{
    console.log('checking offers')
    try{
      const offers=await axios.get(`http://localhost:3001/offers?id=${id}`)
      const offerData=offers.data[0];
      //eval is unsafe if the data source is not trusted (it is in this case)
      //alternatively use JSON.parse (not working here-maybe because json-server)
      //another alternative: try fetch instead of axios
      if (eval(offerData.condition)){
        const newPrice=eval(offerData.newPrice);
        console.log(eval(offerData.condition),'discounted', newPrice);
        return newPrice;
      }else{
        return price;
      }
    }catch(error){
      console.error(error);
    }
  }

  const handleOrder = async() => {
    await axios.post('http://localhost:3001/checkoutData', {
      cart: cart,
      total: totalAmount
    })
    console.log('order ok')
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home handleProductAdd={handleProductAdd} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart} totalAmount={totalAmount} handleOrder={handleOrder}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;