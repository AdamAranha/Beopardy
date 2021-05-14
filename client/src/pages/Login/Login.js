import React, { useState } from 'react';
import './Login.css';
import Header from '../../components/Header/Header'
import LoginCard from '../../components/LoginCard/LoginCard'
import RegisterCard from '../../components/RegisterCard/RegisterCard'


function Login() {

    const [loginCardState, setLoginCardState] = useState('inline')
    const [registerCardState, setRegisterCard] = useState('none')

    function showRegister() {
        if (loginCardState === 'inline') {
            setLoginCardState('none');
            setRegisterCard('inline');
        } else {
            setLoginCardState('inline');
            setRegisterCard('none');
        }
    };

    return (
        <div className='wrapper-login'>
            <Header />
            <LoginCard loginShow={loginCardState} function={showRegister} />
            <RegisterCard registerShow={registerCardState} function={showRegister} />
        </div>
    )
};

export default Login