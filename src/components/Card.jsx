import React, { useState } from 'react'

const Card = (props) => {
 

  function handleClick(e){
    props.onAdd();

  }
  return (
    
    <div className="card w-25 text-center" style={{}}>
  <img className="card-img-top h-25" src={props.image} alt="Card image cap" style={{objectFit:"contain"}}/>
  <div className="card-body" >
    <h5 className="card-title"style={{height:"auto"}}>{props.title}</h5>
    {/* <p className="card-text" style={{}}>{props.desc}</p> */}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">price: {props.price}</li>
    <li className="list-group-item">rating: {props.rating}</li>
  </ul>
  <div className="card-body p-0">
    {/* <a href="/" className="card-link">Card link</a> */}
    
    <button onClick={handleClick} type="button" className="btn btn-success">add to cart</button>
  </div>
   
</div>

  )
}

export default Card
