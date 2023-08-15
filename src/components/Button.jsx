import React from 'react';

const Button = (props) => {
  
  return (
    <button onClick={props.btnFunction} className={!props.bool ? 'card-btn': 'cart-btn'} >
      {props.btn}
    </button>
  );
};

export default Button;
