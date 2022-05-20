import React from 'react'
import Product from '../components/Product'

export default function Home({ products, handleAddToCart }) {
  return (
    <div>
        <div className="container-fluid">
            <div className="row row-cols-3">
                {products.map(product => <div className="col my-3"><Product product={product} handleAddToCart={handleAddToCart} /></div> )}
            </div>
        </div>
    </div>
  )
}
