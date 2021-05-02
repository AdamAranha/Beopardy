import React from 'react';
import './Board.css'
import Column from '../Column/Column'

function Board() {
    return (
        // This is where the board goes
        <div className='board'>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    )
};

export default Board;