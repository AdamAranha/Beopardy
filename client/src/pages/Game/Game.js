import React, { useState, useEffect } from 'react';
import './Game.css'
import Header from '../../components/Header/Header'
import Board from '../../components/Board/Board'
import Scoreboard from '../../components/Scoreboard/Scoreboard'
import GameSettings from '../../components/GameSettings/GameSettings';

function Game() {

    const [boardView, setBoardView] = useState('')
    const [settingsView, setSettingsView] = useState('')
    const [scoreView, setScoreView] = useState('')

    useEffect(() => {
        setBoardView('none');
        setSettingsView('inline');
        setScoreView('none');
    }, [])

    return (
        <div className='game'>
            <Header />
            <GameSettings settingsShow={settingsView} />
            <Board boardShow={boardView} />
            <Scoreboard scoreShow={scoreView} />
        </div>

    )
}

export default Game