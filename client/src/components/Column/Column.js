import React from 'react'
import './Column.css'
import '../Fonts/fonts.css'



function Column(props) {
    return (
        <div className='column'>
            <div className='box box-title'>Title</div>
            <div className='box money'>100</div>
            <div className='box money'>200</div>
            <div className='box money'>300</div>
            <div className='box money'>400</div>
            <div className='box money'>500</div>
        </div>
    )
};

export default Column