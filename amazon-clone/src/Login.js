import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth=> {
            history.push('/')
        })
        .catch(error =>alert(error.message))

    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            if (auth){
                history.push('/')
            }
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
               <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt=""/>
               
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                    <button onClick={signIn} type="submit"
                     className="login__signInButton">Sign In</button>
                </form>
                <p>
                  By Signing-in you agree to the Conditions of Use & sale, Please Consider that  
                </p>
                <button onClick={register}
                 className="login__registerButton">Create Your Amazone Account</button>
            </div>
        </div>
    )
}

export default Login
