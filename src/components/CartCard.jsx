import React from 'react'
import { Link } from 'react-router-dom'

const CartCard = (props) => {
  return (
    <div className="card" style={{width: "18rem",display:"flex"}}>
    <div>
  <img className="card-img-top h-25" src={props.image} alt="product image" style={{objectFit: "contain"}}/></div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <p className="card-text">Price: {props.price}</p>
    <Link to="/Home" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
  )
}

export default CartCard
