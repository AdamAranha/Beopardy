import React, { useState } from 'react';
import './RegisterCard.css'
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
            <div className='register-content'>
                <h1>Register</h1>
                <form>
                    <label name='username'>Username</label>
                    <input name='username' value={input.username} onChange={handleChange} type={input.username} placeholder='Starlord' required></input>

                    <label name='password'> Password</label>
                    <input name='password' value={input.password} onChange={handleChange} type='password' placeholder='Password' required></input>

                    <button onClick={handleClick}> Login</button>
                    <div onClick={props.function} className='registerText'>
                        <p>Login to an account</p>
                    </div>


                </form>
            </div>
        </div >
    )
}

export default RegisterCard