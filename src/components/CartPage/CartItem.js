import React,{ useState, useEffect, useContext } from 'react';
import { CartContext } from './../../context/CartContext'

export default function CartItem(props) {
    const [counter, setCounter] = useState(props.item.qty);
    const [total, setTotal] = useState(Number(props.item.price));
    const { cart, cartTotal, removeProduct} = useContext(CartContext);
    const handleDecrement = () => {
        if (counter > 0){
            setCounter(counter - 1);
            props.setTotalPrice(Number.parseFloat(props.totalPrice - Number(props.item.price)).toFixed(2));
        }
    }
    const handleIncrement = () => {
        props.setTotalPrice(Number.parseFloat(props.totalPrice + Number(props.item.price)).toFixed(2));
        setCounter(counter + 1);
    }
    useEffect(() => {
        setTotal(Number.parseFloat(props.item.price * counter).toFixed(2));
        // setTotal(Number.parseFloat(props.item.price).toFixed(2));
    })
    return (
        <div className="CartItem border-bottom mb-2 row">
            <div className="col-3">
              <img alt="food" src={props.item.img}></img>
            </div>
            <div className="col-5">
                <h5>{props.item.name}</h5>
                <div className="row">
                </div>
                <p>${props.item.price}</p>
            </div>
            <div className="col-3 row">
                <button onClick={handleDecrement}>-</button>
                {/* <input readOnly value={counter}/> */}
                <input readOnly value={counter}/>
                <button onClick={handleIncrement}>+</button>
            </div>
            <div className="col-1 text-center subTotal">
                <h5>${total}</h5>
            </div>
                <button className="btn btn-danger" onClick={() => removeProduct(props.item.id)}>remove</button>
        </div>
    )
}