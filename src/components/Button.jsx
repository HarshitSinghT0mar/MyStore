import React from 'react'

const Button = (props) => {
  return (
    <>
       <button onClick={props.btnFunction} type="button" className="btn btn-success m-1">{props.btn}</button>
    </>
  )
}

export default Button
