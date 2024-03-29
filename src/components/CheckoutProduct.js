import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'
function CheckoutProduct({id,title,image, price,rating}) {
    const[{basket},dispatch]=useStateValue()
  
    const deletefromBasket=()=>{
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
        })
    }
  return (
    <div className='checkout_product'>
      <img className='checkout_product_image' src={image} alt='checkout'/>
      <div className='checkout_product_info'>
        <p className='checkout_product_title'>{title}</p>
        <p className='checkout_product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='checkout_product_rating'>
          {Array(rating).fill().map((_)=>(<p>⭐</p>))}
        </div>
      <button onClick={deletefromBasket}>delete from basket</button>
      </div>
    </div>
       
  )
}

export default CheckoutProduct
