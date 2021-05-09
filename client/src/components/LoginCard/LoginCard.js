import React, { useState } from 'react';
import './LoginCard.css';
import axios from 'axios';



function LoginCard() {
    const [cardState, setCardState] = useState('flex')
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
            method: 'get',
            url: 'http://localhost:5000/api/login',
            headers: {
                username: username,
                password: password
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    };

    function showRegister() {
        setCardState('none')
    }



    return (
        <div className='login-card' style={{ display: cardState }}>
            <div className='login-content'>
                <h1>Login</h1>
                <form>
                    <label name='username'>Username</label>
                    <input name='username' value={input.username} onChange={handleChange} type={input.username} placeholder='Starlord' required></input>

                    <label name='password'> Password</label>
                    <input name='password' value={input.password} onChange={handleChange} type='password' placeholder='Password' required></input>

                    <button onClick={handleClick}> Login</button>
                    <div onClick={showRegister} className='registerText'>
                        <p>Register an account</p>
                    </div>


                </form>
            </div>
        </div >
    )
};

export default LoginCard