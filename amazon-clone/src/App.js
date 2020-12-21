import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51I0WKCI0fhIMI6yvlL9SZJnZeXtKmpb1ZanO1wiy70Ehny0oJayqfNUztk77dcMLFTdfCUG6GmCnlHbPovdCBms900YcA9eGbx');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
     auth.onAuthStateChanged(authUser=>{
       console.log('the user is >>>', authUser)

       if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        }) 
       }else{
         dispatch({
         type: 'SET_USER',
         user:null
         })
       }
     })
  }, [])
  return (
    <Router>
        <div className="app">
         
          <Switch>
          <Route path="/orders">
             <Header/>
             <Orders />           
            </Route>
          <Route path="/login">
             <Login/>           
            </Route>
            
          <Route path="/checkout">
             
             <Checkout />             
            </Route>
            <Route path="/payment">
             <Header/>
             <Elements stripe={promise}>
               <Payment />
             </Elements>
             
            </Route>  
            <Route path="/">
            <Header/>
             <Home />
             <Footer />  
            </Route>
          </Switch>
         
       </div>
    </Router>
  );
}

export default App;
