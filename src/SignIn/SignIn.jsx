import React from 'react'
import './SignIn.css'
import logo from '../assets/logo.png'

const SignIn = () => {
  return (    
    <div className="SignIn_container">
        <div className="SignIn_SignUpBox">
            <div className="SignIn_left">
                <img src={logo} alt="" />
                <h1>Sign in to EduWiz</h1>
                <h2>Welcome back! Please sign in to continue</h2>
            </div>
            <div className="SignIn_right">
                <input type="text" placeholder='Enter your email' />
                <input type="text" placeholder='Enter your password' />
                <div className="SignIn_buttons">
                    <button className="SignIn_create_account">Create Account</button>
                    <div className="SignIn_sign_in"><button>Sign In</button></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignIn