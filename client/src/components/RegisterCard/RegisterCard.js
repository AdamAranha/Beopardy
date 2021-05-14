import React, { useState } from 'react';
import './RegisterCard.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

function RegisterCard(props) {

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
            method: 'post',
            url: 'http://localhost:5000/api/register',
            data: {
                username: username,
                password: password
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    };


    return (
        <div className='register-card' style={{ display: props.registerShow }} >
            <div className='register-header'>
                <h1>Register</h1>
            </div>
            <div className='register-content'>
                <form className='register-form'>
                    <div className='section-username'>
                        {/* <label name='username'>Username</label> */}
                        <input name='username' type='text' value={input.username} onChange={handleChange} placeholder='Username' required></input>
                    </div>
                    <div className='section-password'>
                        {/* <label name='password'> Password</label> */}
                        <input name='password' type='password' value={input.password} onChange={handleChange} placeholder='Password' required></input>
                    </div>
                    <button onClick={handleClick} className='register-button'> Register</button>
                </form>
            </div>
            <div className='register-footer'>
                <Link to='/'>
                    <div>
                        <p className='backText'>&lt;&lt; Home</p>
                    </div>
                </Link>
                <div onClick={props.function}>
                    <p className='loginText'>Login&gt;&gt;</p>
                </div>
            </div>
        </div >
    )
}

export default RegisterCard