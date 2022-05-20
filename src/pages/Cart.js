import React from 'react'
import CartItem from '../components/CartItem'
import { Link } from "react-router-dom";

export default function Cart({ cart }) {

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Your Shopping Cart</h1>
        <div className="container-fluid">
            <div className="row row-cols-3">
                {cart.line_items.map(item => (
                    <div className="col my-3"><CartItem item={item}  /></div>
                ))}     
            </div>  
            <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
            <Link to="/checkout">
              <button type="button" className="btn btn-success">Checkout</button>
            </Link>
            
                  
        </div>
    </div>
  )
}
