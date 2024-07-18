import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Css/Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data.status === "success") {
                    localStorage.setItem("token", result.data.token);
                    navigate("/home");
                } else {
                    alert("Invalid credentials");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="Outer">
            <div className="Login-Outer">
                <h2 className="login-head"><center>Login</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="email" className='email-label'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='email-input'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="email-password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='password-input'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="login-para">Don't have an account?</p>
                <Link to="/register" className="sign-button">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;