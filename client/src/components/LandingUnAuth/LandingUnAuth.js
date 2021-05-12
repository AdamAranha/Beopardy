import React from 'react';
import { Link } from 'react-router-dom';
import './LandingUnAuth.css';

function LandingUnAuth(props) {

    return (
        <div className='landingunauth' style={{ display: props.display }}>
            <Link to='/game' className='removeUnderline'>
                <div className=' landButton guestButton'>
                    <h2>Continue as Guest</h2>
                    {/* <p className='landingButtonText'>Continue as Guest</p> */}
                </div>
            </Link>
            <Link to='/login' className='removeUnderline'>
                <div className='landButton loginButton'>
                    <h2>Login</h2>
                </div>
            </Link>
        </div>
    )
};

export default LandingUnAuth