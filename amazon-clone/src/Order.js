import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProducts from './CheckoutProducts';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Order({order}) {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
             <p className="order__id">
                 <small>{order.id}</small>
             </p>
             {order.data.basket?.map(item =>(
                <CheckoutProducts
                id= {item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
                /> 
               
             ))}
              <h3>Order Total ${getBasketTotal(basket).toFixed(2)/100}</h3>
        </div>
    )
}

export default Order
