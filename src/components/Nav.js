import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';















const Nav = ({ cartToggle }) => {
    const { ShoppingCart } = useContext(CartContext);

    const connectMetaMask = async () => {
        console.log('Requesting account...');

        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                return accounts;
            }
            catch (error) {

            }
        } else {
            console.log('Meta Mask not detected!')
        }
    }






    return (


        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">AMAN STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <span onClick={cartToggle} >
                    <Link to="/cart"><span className="dollor"><i > <AiOutlineShoppingCart /></i></span><span className="shoppingCartTotal">{ShoppingCart ? ShoppingCart.length : 0}</span></Link>
                </span>
                <span className="connect" > Connect </span>
            </div>
        </div>







       
       
    );
}



export default Nav;