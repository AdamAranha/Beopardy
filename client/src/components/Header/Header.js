import React, { useEffect } from 'react';
import './Header.css';

function Header() {

    useEffect(() => {
        console.log('This is the header')
    }, [])
    return (
        <div className='header'>
            <h1 className='header-text'>
                BEOPARDY
            </h1>
        </div>
    )
};

export default Header