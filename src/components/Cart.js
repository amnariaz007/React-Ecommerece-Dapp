import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Global/CartContext';
import { AiOutlineBorderBottom, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import StripeCheckout from 'react-stripe-checkout';
import Web3 from 'web3';



const contractAddress = '0xf2c93326c73Bc8eb00BA15a35C601A64bBD8A5E7';
const abi = [{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaytheAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}];




async function PaywithMetamask ( abc )  {
    const web3 = window.web3;
  const webeProvider = new Web3(Web3.givenProvider);
  const Cartaccounts = await webeProvider.eth.getAccounts();
 // this.setState({ account: accounts[0] });
  console.log("Sender :  " + Cartaccounts[0]);
  let instance = new web3.eth.Contract(
    abi,
    contractAddress,
  );
  //console.log(id);
  await instance.methods
  .PaytheAmount(abc )
  .send({
    from: Cartaccounts[0],
  });
}









const Cart = () => {

    const { ShoppingCart, totalprice, qty, dispatch } = useContext(CartContext);
    const handletoken = (token) => {

    }

    useEffect(() => {
        async function loadWeb3() {
            if (window.ethereum) {
              window.web3 = new Web3(window.ethereum);
              await window.ethereum.enable();
            } else if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider);
            } else {
              window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
              );
            }
            //loadBlockchainData();
          }
          loadWeb3()
    }, []);
    

   




    return (
        <div className="c-container">
            <div className="c-details" style={{ marginTop: '70px' }}>
                {ShoppingCart.length > 0 ?
                    ShoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="c-img"> <img src={cart.image} alt="not founs" /></span>
                            <span className="c-name"> {cart.name}</span>
                            <span className="c-price"> {cart.price}</span>
                            <span className="inc" onClick={() => dispatch({ type: 'Add', id: cart.id, cart })}> <AiOutlinePlus /> </span>
                            <span className="c-qty"> {cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({ type: 'Dec', id: cart.id, cart })}> <AiOutlineMinus /> </span>
                            <span className="c-total"> {cart.price * cart.qty}</span>
                            <span className="del" onClick={() => dispatch({ type: 'Del', id: cart.id, cart })}> <AiOutlineDelete /></span>
                        </div>

                    ))
                    : 'cart is empty'}
            </div>

            {ShoppingCart.length > 0 ? <div className="c-summary">
                <div className="summary">
                    <h3> Cart Summary </h3>
                    <div className="t-items">
                        <div className="items"> Total items </div>
                        <div className="Count"> {qty} </div>
                    </div>
                    <div className="price-sec">
                        <div className="titel-p"> Total Price </div>
                        <div className="item-p"> ${totalprice}.00</div>
                    </div>

                    <button className='btn' 
                    style={{
                        position:'absolute',
                        right: '12%',
                        bottom: "35%"
                    }}
                    
                    onClick={()=>{
                        PaywithMetamask(totalprice)
                    }} >
                        Pay With Metamask
                    </button>
                    <div className="stripe">
                        <StripeCheckout
                            stripeKey="pk_test_51J4hdGFExPttYHAe7N5K5vyxLspvnZrC4U5Upqf0Md8PK6Qe89MzaW4ROKMOwFD1dkqAposhjZwXUJ1vCLo7JNT300VDYnZpNb"
                            token={handletoken}
                            billingAddress
                            shippingAddress
                            amount={totalprice * 100}
                            name= "All products"
                        >

                        </StripeCheckout>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default Cart;