import React, { useState } from 'react';
import './Login.css';
import Header from '../../components/Header/Header'
import axios from 'axios'
    ;

function Login() {
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
        const credentials = {
            username: input.username,
            password: input.password
        };
        axios.post('http://localhost:5000/api/login', credentials);
    }

    return (
        <div className='wrapper-login'>
            <Header />

            <div className='login-card'>
                <div className='login-content'>

                    <form>
                        <label name='username'>Username</label>
                        <input name='username' value={input.username} onChange={handleChange} type={input.username} placeholder='Starlord' required></input>

                        <label name='password'> Password</label>
                        <input name='password' value={input.password} onChange={handleChange} type='password' placeholder='Password' required></input>

                        <button onClick={handleClick}> Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login