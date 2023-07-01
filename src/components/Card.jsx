import Button from './Button';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from "uuid"
import { CartContext } from '../contexts/cartContext';



const Card = (props) => {
 const {location}=useContext(CartContext)

  return (
    
    <div className="card w-25 text-center">
  <img className="card-img-top h-25" src={props.image} alt="Product Image" style={{objectFit:"contain"}}/>
  <div className="card-body" >
    <h5 className="card-title"style={{height:"auto"}}>{props.title}</h5>
  {props.bool && <p className="card-text">{props.desc}</p>}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">price: {props.price}</li>
    <li className="list-group-item">rating: {props.rating}</li>
  </ul>
  <div className="card-body">
    {/* <a href="/" className="card-link">Card link</a> */}
    <Button btnFunction={props.onclick} btn={props.text} key={uuidv4()} />

    
    {/* <button onClick={props.onAdd} type="button" className="btn btn-success m-1">add to cart</button> */}
    <Link to={props.bool?"/Home":"/Cart"} className="btn btn-primary" key={uuidv4()}>{props.btnText}</Link>
    </div>
  
   
</div>

  )
}

export default Card
