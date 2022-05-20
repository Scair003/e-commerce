import React from 'react'

export default function NavBar({ totalItems }) {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a  className="navbar-brand">e-commerce</a>
                <div className="d-flex">
                  <a>Cart: {totalItems} items</a>
                </div>
            </div>
        </nav>
    </div>
  )
}
