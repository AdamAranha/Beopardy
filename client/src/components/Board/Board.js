import React from 'react';
import './Board.css'
import Column from '../Column/Column'
import Box from '../Box/Box'

function Board() {
    return (
        // This is where the board goes
        <div className='board'>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />

            <div className='boardTwo'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />

                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    )
};

export default Board;