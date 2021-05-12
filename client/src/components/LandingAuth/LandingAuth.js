import React from 'react';
import { Link } from 'react-router-dom';
import './LandingAuth.css';

function LandingAuth(props) {

    return (
        <div className='landingAuth' style={{ display: props.display }}>
            <Link to='/game' className='removeUnderline'>
                <div className=' landButton authedButton'>
                    <h2>Continue to Game</h2>
                </div>
            </Link>
        </div>
    )
}

export default LandingAuth