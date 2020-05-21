import React,{ useContext } from 'react';
import { CartContext } from '../../context/CartContext';
export default function MenuItem(props) {
    const { addProduct, cart, updateCartTotal, cartTotal } = useContext(CartContext);
    console.log(cartTotal);
    const handleAddProduct = () => {
        // console.log(cartTotal);
        updateCartTotal(Number(props.item.price));
        addProduct(props.item);
        // console.log(props.item.price);
        // console.log(cartTotal);
    }
    return (
        <div>

        <div className="MenuItem">
            <img alt="food" src={props.item.img}></img>
            <h5>{props.item.name}</h5>
            <h5>${props.item.price}</h5>
        </div>
            <button onClick={handleAddProduct} className="btn btn-danger">Add</button>
        </div>
    )
}