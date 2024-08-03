import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerlink =() => {
        setAction(' active');
    };

    const loginlink =() => {
        setAction('');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser  className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock  className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Log In</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerlink}>Register</a></p>
                    </div>
                </form>
            </div>


            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser  className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock  className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms and conditions</label>
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginlink}>Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;