import React, { useEffect, useState } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../../components/Header/Header'
import LandingUnAuth from '../../components/LandingUnAuth/LandingUnAuth'
import LandingAuth from '../../components/LandingAuth/LandingAuth'

function Landing() {
    const [authState, setAuthState] = useState('none')
    const [unAuthState, setUnAuthState] = useState('inline')

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/checkauth',
            withCredentials: true
        }).then((response) => {
            console.log(response)
            if (response.data) {
                setAuthState('inline')
                setUnAuthState('none')

                // document.getElementById('test-test').innerText = 'Token found'
            } else {
                setAuthState('none')
                setUnAuthState('inline')
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>

            <Header />
            <div className='wrapper'>
                <LandingUnAuth display={unAuthState} />
                <LandingAuth display={authState} />
            </div>

        </div>
    )
};

export default Landing