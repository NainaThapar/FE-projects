import ItemList from "./ItemList";
import { UseSelector, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    if(cartItems.length === 0){
        return(<div className="text-center m-4 p-4  font-sans font-semibold text-lg">Your cart is empty! Please add items to your cart to proceed. </div>)
    }
    return(
        <div className="text-center m-4 p-4 w-6/12 place-self-center">
            <h1 className="font-bold text-2xl">Cart Details</h1>
            <ItemList items={cartItems}></ItemList>
        </div> 
    )
}

export default Cart;