import { createContext, useReducer } from 'react';
import {CartReducer} from './CartReducer';
import React from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer( CartReducer, {ShoppingCart: [] , totalprice: 0, qty: 0  });

    return (
            <CartContext.Provider value={{...cart, dispatch}}>
                    {props.children}
            </CartContext.Provider>
    )
}

export default CartContextProvider;