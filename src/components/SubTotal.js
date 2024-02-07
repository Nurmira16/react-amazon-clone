// import React from 'react'
// import './SubTotal.css'
// import CurrencyFormat from 'react-currency-format'
// import { useStateValue } from '../StateProvider'
// import { getBasketTotal } from '../reducer'
// function SubTotal() {
//     const[{basket}]=useStateValue()
//     console.log(basket)
//   return (
//     <div className='subtotal'>
//         <CurrencyFormat
//         renderText={(value)=>(
//             <>
//             <p>
//                 Subtotal ({basket.length} items)
//             </p>
//             <small className='subtotal_gift'>
//                 <input type='checkbox'/>This order contains a gift
//             </small>
        
//               <button><strong>{`${value}`}</strong></button>
//               </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={'text'}
//         thousandSeparator={true}
//         prefix={'$'}
//         />
    
//     </div>
//   )
// }

// export default SubTotal
import React from 'react';
import './SubTotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function SubTotal() {
  const [{ basket }] = useStateValue();
  
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className='subtotal'>
      <p>Subtotal ({basket.length} items)</p>
      <small className='subtotal_gift'>
        <input type='checkbox' /> This order contains a gift
      </small>
      <button>
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </button>
    </div>
  );
}

export default SubTotal;
