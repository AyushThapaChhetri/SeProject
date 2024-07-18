import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Css/Signup.css'
function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { name, email, password })
            .then(result => {
                console.log(result)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="Outer">
            <div className="Outer-Signup">
                <h2 className="signup-head"><center>Sign Up</center></h2>

                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name" className="signup-label">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email" className="signup-label">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="signup-label">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>
                <p className="signup-para">Already have an account?</p>
                <Link to="/login" className="login-btn">
                    Login
                </Link>

            </div>
        </div>
    );
}

export default Signup;