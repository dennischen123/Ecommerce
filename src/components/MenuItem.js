import React,{ useContext } from 'react';
import { CartContext } from '../context/CartContext';
export default function MenuItem(props) {
    const {store, dispatch} = useContext(CartContext);
    const handleAddProduct = () => {
        // updateCartTotal(Number(props.item.price));
        dispatch({type: 'Add_Product', payload: props.item});
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