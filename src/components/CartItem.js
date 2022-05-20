import React from 'react'

export default function CartItem({ item }) {
  return (
    <div>
        <div className="card" style={{width: '30rem'}}>
            <img style={{height: '18rem', objectFit: 'contain'}} src={item.image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5>{item.line_total.formatted_with_symbol}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>{item.quantity}</p>
                <a href="#" className="btn btn-danger">Remove</a>
            </div>
        </div>
    </div>  
  )
}
