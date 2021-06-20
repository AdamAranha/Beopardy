import React, { useState, useEffect } from 'react';
import './RegisterCard.css'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

function RegisterCard(props) {
    let history = useHistory();
    const [tempObj, setTempObj] = useState('')
    const [errText, setErrText] = useState('')
    const [errTextColour, setErrTextColour] = useState('')
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        setTempObj(props.function)
        console.log(tempObj)
    }, [errText])

    function tempFunc(variable) {
        const runThis = () => { variable() }
    }

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
            .then((res) => {
                console.log(res.data)
                setErrTextColour('#19af14')
                setErrText('Account Created! Please Login')
                setTimeout(() => {
                    tempObj.function()
                }, 1500)
            })
            .catch((err) => {
                console.log(err)
                setErrTextColour('#f50707')
                setErrText('That username is in use!')
            })
    };


    return (
        <div className='register-card' style={{ display: props.registerShow }} >
            <div className='register-header'>
                <h1>Register</h1>
            </div>
            <div className='register-content'>
                <form className='register-form'>
                    <p className='err-text' style={{ color: errTextColour }}>
                        {errText}
                    </p>
                    <div className='section-username'>
                        <input name='username' type='text' value={input.username} onChange={handleChange} placeholder='Username' required></input>
                    </div>
                    <div className='section-password'>
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
                <div onClick={props.function.function}>
                    <p className='loginText'>Login&gt;&gt;</p>
                </div>
            </div>
        </div >
    )
}

export default RegisterCard