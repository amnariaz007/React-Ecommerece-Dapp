import { createContext } from 'react';
import React  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Nav from './components/Nav';
import Cart from './components/Cart';
import CartContextProvider from './Global/CartContext';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
       <ProductsContextProvider>
         <CartContextProvider>
      <Router>
      <Nav/>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>  
    </div>
  );
}

export default App;

