import React from 'react';
import './Board.css'
import Column from '../Column/Column'
import Box from '../Box/Box'

function Board(props) {
    let boxName = 'one-one'
    function boxClick() {
        console.log(boxName)
    }

    return (
        // This is where the board goes
        <div className='board' style={{ display: props.boardShow }}>
            <Box category='Category Category Category' />
            <Box category='Category' />
            <Box category='Category' />
            <Box category='Category' />
            <Box category='Category' />
            <Box category='Category' />

            <Box value='100' extraClass='box-value' clickFunction={boxClick} name={boxName} />
            <Box value='100' extraClass='box-value' />
            <Box value='100' extraClass='box-value' />
            <Box value='100' extraClass='box-value' />
            <Box value='100' extraClass='box-value' />
            <Box value='100' extraClass='box-value' />

            <Box value='200' extraClass='box-value' />
            <Box value='200' extraClass='box-value' />
            <Box value='200' extraClass='box-value' />
            <Box value='200' extraClass='box-value' />
            <Box value='200' extraClass='box-value' />
            <Box value='200' extraClass='box-value' />

            <Box value='300' extraClass='box-value' />
            <Box value='300' extraClass='box-value' />
            <Box value='300' extraClass='box-value' />
            <Box value='300' extraClass='box-value' />
            <Box value='300' extraClass='box-value' />
            <Box value='300' extraClass='box-value' />

            <Box value='400' extraClass='box-value' />
            <Box value='400' extraClass='box-value' />
            <Box value='400' extraClass='box-value' />
            <Box value='400' extraClass='box-value' />
            <Box value='400' extraClass='box-value' />
            <Box value='400' extraClass='box-value' />

            <Box value='500' extraClass='box-value' />
            <Box value='500' extraClass='box-value' />
            <Box value='500' extraClass='box-value' />
            <Box value='500' extraClass='box-value' />
            <Box value='500' extraClass='box-value' />
            <Box value='500' extraClass='box-value' />


        </div>
    )
};

export default Board;