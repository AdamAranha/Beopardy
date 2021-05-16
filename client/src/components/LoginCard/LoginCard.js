import React, { useState, useEffect } from 'react';
import './LoginCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginCard(props) {
    // const [cardState, setCardState] = useState('flex')
    const [input, setInput] = useState({
        username: '',
        password: ''
    })


    function handleChange(event) {
        const { name, value } = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input)
        const { username, password } = input

        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/login',
            data: {
                username: username,
                password: password
            }
            ,
            withCredentials: true
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    // function showRegister() {
    //     setCardState('none')
    // }



    return (
        <div className='login-card' style={{ display: props.loginShow }} >
            <div className='login-header'>
                <h1>Login</h1>
            </div>
            <div className='login-content'>
                <form className='login-form'>
                    <div className='section-username'>
                        {/* <label name='username'>Username</label> */}
                        <input name='username' type='text' value={input.username} onChange={handleChange} placeholder='Username' required></input>
                    </div>
                    <div className='section-password'>
                        {/* <label name='password'> Password</label> */}
                        <input name='password' type='password' value={input.password} onChange={handleChange} placeholder='Password' required></input>
                    </div>
                    <button onClick={handleClick} className='login-button'> Login</button>
                </form>
            </div>
            <div className='login-footer'>
                <Link to='/'>
                    <div>
                        <p className='backText'>&lt;&lt; Home</p>
                    </div>
                </Link>
                <div onClick={props.function}>
                    <p className='registerText'>Register&gt;&gt;</p>
                </div>
            </div>
        </div >
    )
};

export default LoginCard