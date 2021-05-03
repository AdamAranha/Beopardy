import React from 'react';
import './Game.css'
import Header from '../../components/Header/Header'
import Board from '../../components/Board/Board'
import Scoreboard from '../../components/Scoreboard/Scoreboard'

function Game() {
    return (
        <div className='game'>
            <Header />
            <Board />
            <Scoreboard />
        </div>

    )
}

export default Game