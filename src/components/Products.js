import React, { useContext,useEffect } from 'react';
import { CartContext } from '../Global/CartContext';
import { JoDilKary } from '../Global/ProductsContext';


const Products = () => {
    const { products } = useContext(JoDilKary);
    const { dispatch } = useContext(CartContext);


    

    return (


        <div>
            <h4 className="heading">Welcome the world of Ecommerce  Blockchain </h4>

            <div className="productsWrapper">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img className='img' src={product.image} alt="" />
                        <h4>{product.name}</h4>
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className="btn" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>








    );

}

export default Products;