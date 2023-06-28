import React from 'react'
import Card from './Card'

const Cart = () => {
  return (
    <div>
      {Cart.map((item,index)=>{<Card key={item.id}
              id={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              rating={item.rating.rate}
              image={item.image}/>})}
    </div>
  )
}

export default Cart
