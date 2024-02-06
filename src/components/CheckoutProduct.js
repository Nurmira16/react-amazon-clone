import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'
function CheckoutProduct({item,title,image, price,rating,id}) {
    const[{basket},dispatch]=useStateValue()
  
    const deletefromBasket=()=>{
      dispatch({type:'REMOVE_FROM_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }})
    }
  return (
    <div className='checkout_product'>
      <img className='checkout_product_image' src={image}/>
      <div className='checkout_product_info'>
        <p className='checkout_product_title'>{title}</p>
        <p className='checkout_product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='checkout_product_rating'>
          {Array(rating).fill().map((_)=>(<p>⭐</p>))}
        </div>
      <button onClicks={deletefromBasket}>delete to basket</button>
      </div>
    </div>
       
  )
}

export default CheckoutProduct
