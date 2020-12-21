import React from 'react'
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import  './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    const history =useHistory();

    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            
           
                
                <p>
                    Subtotal ({basket?.length}  items):
                    <strong>${getBasketTotal(basket).toFixed(2)}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox"/>This order contains a gift
                </small>
                
            
            {/* // decimalScale ={2}
            // value={0}
            // displayType={'text'}
            // thousandSeparator={true}
            // prefix={"$"} */}

            
            <button onClick={e =>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
