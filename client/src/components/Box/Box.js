import React from 'react';
import './Box.css';

function Box(props) {

    function handleOnClick() {
        // DO STUFF
    }

    return (
        <div className={`box ${props.extraClass}`} onClick={props.clickFunction} name={props.name}>
            <p className='category'>{props.category}</p>
            <p className='value'>{props.value}</p>
        </div>
    )
}

export default Box