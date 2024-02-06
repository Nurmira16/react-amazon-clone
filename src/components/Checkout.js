import React from 'react'
import { useStateValue } from '../StateProvider'
import Item from './CheckoutProduct'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {
    const[{basket}]=useStateValue()
    console.log(basket)
  return (
    <div className='checkout'>
      <div className='checkout_left'>
      <img className='checkout-add' src='https://resumespice.com/wp-content/uploads/2021/03/38.png'/>
      {basket?.length===0?(
        <div>
          <h2 className='checkout-title'>Your Shopping Basket is empty.</h2>
          <p> You have no items in your basket.To buy one or more press "Add to basket" next to the item.</p>
        </div>
      ):(
        <div>
           <h2 className='checkout-title'>Your Shopping Basket</h2>
        </div>
      )}
      {basket.map(item=>(
        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
      ))}
      </div>
      {basket.length>0 &&(
        <div className='checkout_right'>
      
          <SubTotal/>
        </div>
      )}
      

    </div>
  )
}

export default Checkout
