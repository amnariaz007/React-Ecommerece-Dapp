export const CartReducer = ( state, action) => {

    const {ShoppingCart, totalprice, qty} = state;
    let index;
    let product;
    let updatedPrice;
    let updatedQty;
    switch(action.type){
        case 'ADD_TO_CART':
        const check = ShoppingCart.find(product=> product.id === action.id)
        if(check){
            return state;
        }else{
            product= action.product;
            product['qty'] = 1;
            updatedQty = qty + 1;
            updatedPrice = totalprice + product.price;
            return { ShoppingCart:[product , ...ShoppingCart] , totalprice: updatedPrice, qty : updatedQty}
        }
        break;

        case 'Add':
                product= action.cart;
               
                    product.qty = product.qty + 1;
                    updatedQty = qty + 1;
                    updatedPrice= totalprice + product.price;
                    index = ShoppingCart.findIndex(cart=> cart.id === action.id);
                    ShoppingCart[index] = product;
                    return {ShoppingCart:[...ShoppingCart], totalprice: updatedPrice, qty: updatedQty}
                
                break;

            case 'Dec':
                product= action.cart;
                if(product.qty > 1){

                    product.qty = product.qty - 1;
                    updatedQty = qty - 1;
                    updatedPrice= totalprice - product.price;
                    index = ShoppingCart.findIndex(cart=> cart.id === action.id);
                    ShoppingCart[index] = product;
                    return {ShoppingCart:[...ShoppingCart], totalprice: updatedPrice, qty: updatedQty}
                }else{
                    return state;
                }
                break;
                case 'Del':
                  const filterr = ShoppingCart.filter(product=> product.id !== action.id);
                  product = action.cart;
                  updatedQty =  qty - product.qty ;
                  updatedQty = totalprice - product.price * product.qty;
                  return {ShoppingCart:[...filterr], totalprice: updatedPrice, qty: updatedQty}
                  break;

        
     
        default: return state;
    }



}