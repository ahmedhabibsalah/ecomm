import React from 'react'
import"./Checkout.css"
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
               <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt=""/> 
               <div>
                   <h3>Hello, {user?.email}</h3>
               </div>
               <h2 className="checkout__title">your Shopping Basket</h2>
                {basket.map(item =>(
                    <CheckoutProducts
                     id= {item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout__right">
               <Subtotal/>
            </div> 
        </div>
    )
}

export default Checkout
