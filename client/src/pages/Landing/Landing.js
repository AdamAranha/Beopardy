import React from 'react'
import './Landing.css'
import Header from '../../components/Header/Header'


const temp = () => {
    console.log('These are words')
};

function Landing() {
    return (
        <div>

            <Header />
            <div className='wrapper'>
                <div className=' landButton guestButton'>
                    <h2>
                        Continue as Guest
                    </h2>
                </div>
                <div className='landButton loginButton'>
                    <h2>
                        Login
                    </h2>
                </div>
            </div>

        </div>
    )
};

export default Landing