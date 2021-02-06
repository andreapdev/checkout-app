import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './screens/Home';
import Checkout from './screens/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect (()=>{console.log('effect',cart)}, [cart]);

  const handleProductAdd = (id, name, quantity, price) => {
    console.log('entered handleProductAdd', cart);
    let posRepeated = cart.map((item) =>{ return item.id; }).indexOf(id);
    console.log('repeated', posRepeated)

    if(posRepeated>-1){
      const newQuantity=quantity+cart[posRepeated].quantity;
      const helperObject={id: id, name: name, quantity: newQuantity, price: price};
          cart.splice(posRepeated, 1, helperObject);
    }else{
      const addedObject={ id: id, name: name, quantity: quantity, price: price };
      cart.push(addedObject);
    }
  };


  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home handleProductAdd={handleProductAdd} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;