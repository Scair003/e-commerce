import React from 'react'

export default function Product({ product, handleAddToCart }) {
  return (
    <div>
        <div className="card" style={{width: '30rem'}}>
            <img style={{height: '18rem', objectFit: 'contain'}} src={product.image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h5>{product.price.formatted_with_symbol}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }} />
                <a href="#" className="btn btn-primary" onClick={() => handleAddToCart(product.id, 1)}>Add to Cart</a>
            </div>
        </div>
    </div>
  )
}
