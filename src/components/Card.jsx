import Button from './Button';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.bool ? (
          <p className="card-description">{props.desc}</p>
        ) : (
          <p className="card-category">{props.category}</p>
        )}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {props.price}</li>
        <li className="list-group-item">Rating: {props.rating}</li>
      </ul>
      <div className="card-footer">
       <Button btnFunction={props.onclick} btn={props.text} />
        {/* <Link to={props.bool ? "/Home" : "/Cart"} className="card-button">
          {props.btnText}
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
