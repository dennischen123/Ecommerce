import React, { useState, useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../context/CartContext';

export default function CartContainer(props) {
	const { cart, cartTotal } = useContext(CartContext);
	const getTotal = (arr) => {
		let sum = 0;
		arr.forEach(ele => sum += Number(ele.price))
		return sum;
    }
	const [totalItem, setTotalItem] = useState(cart.length);
	const [totalPrice, setTotalPrice] = useState(getTotal(cart));
    const mapItems = cart.map((item, index) => <CartItem key={index} item={item} setTotalItem={setTotalItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)
    // const mapItems = cart.map((item, index) => <CartItem key={index} item={item}/>)
    return (
        <div className="CartContainer container">
              <div className="cart-items text-left">
                  <h4 className="bg-light pt-3 pb-3 text-left">YOUR CART({cart.length})</h4>
                  {mapItems}
              </div>
          <div className="cart-total row">
				<p className="col-7"></p>
				<h5 className="col-3">{cart.length}</h5>
				<h5 className="col-2">Total:${totalPrice}</h5>
          </div>
		  <button className="text-right">Order</button>
        </div>
    )
}