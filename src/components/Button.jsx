import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.btnFunction} className="btn btn-primary">
      {props.btn}
    </button>
  );
};

export default Button;
