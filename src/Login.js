import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        // Sign in firebase code
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        // Register firebase code
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Successfully created new user with email and password
                console.log(auth);
                // When created account push us to home page
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"/>
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                    type='text' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                    type='submit' 
                    onClick={signIn} 
                    className='login__signinButton'>Sign in</button>
                </form>
                <p>
                    By signig-in you agree to amazon clone contiionds of use and sale. Please see our privacy notice, our cookies notice and interest-based ads notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
