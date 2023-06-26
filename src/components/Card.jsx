import React from 'react'

const Card = (props) => {
  return (
    
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top " src={props.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">price: {props.price}</li>
    <li className="list-group-item">rating: {props.rating}</li>
  </ul>
  <div className="card-body">
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>

  )
}

export default Card
