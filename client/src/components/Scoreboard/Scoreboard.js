import React from 'react';
import './Scoreboard.css'

function Scoreboard(props) {
    return (
        <div className='scoreboard' style={{ display: props.scoreShow }}>
            <p>
                This is where the scores go
            </p>

        </div>
    )
}

export default Scoreboard;