import React from 'react';
import './Game.css'
import Board from '../../components/Board/Board'

function Game() {
    return (
        <div className='game'>
            <h1>Beopardy</h1>
            <Board />
        </div>

    )
}

export default Game