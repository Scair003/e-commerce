import React from 'react'
import { Link } from "react-router-dom";


export default function NavBar({ totalItems }) {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">e-commerce</Link>
                <div className="d-flex">
                  <Link style={{textDecoration: 'none', color: 'black'}} to="/cart">Cart: {totalItems} items</Link>
                </div>
            </div>
        </nav>
    </div>
  )
}
