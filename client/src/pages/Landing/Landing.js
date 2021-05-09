import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

function Landing() {
    return (
        <div>

            <Header />
            <div className='wrapper'>
                <Link to='/game' className='removeUnderline'>
                    <div className=' landButton guestButton'>
                        <h2>Continue as Guest</h2>
                    </div>
                </Link>
                <Link to='/login' className='removeUnderline'>
                    <div className='landButton loginButton'>
                        <h2>Login</h2>
                    </div>
                </Link>
            </div>

        </div>
    )
};

export default Landing