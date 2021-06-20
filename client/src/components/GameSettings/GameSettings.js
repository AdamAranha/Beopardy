import React, { useState } from 'react';
import './GameSettings.css';
import Accordion from '../Accordion/Accordion'

function GameSettings(props) {

    const [selectedSetting, setSelectedSetting] = useState(null)

    const settingsToggle = (index) => {
        if (selectedSetting === index) {
            return setSelectedSetting(null)
        }

        setSelectedSetting(index)
    }


    return (
        <div className='gameSettings' style={{ display: props.settingsShow }}>

            <div className='settings-header'>
                <h1 >Game Settings</h1>
                <button>Submit</button>

            </div>

            <div className='settings-content'>


                <div className='item-settings'>
                    <div className='item-settings-title' onClick={() => settingsToggle(1)}>
                        <h2>Toggles</h2>
                    </div>
                    <div className={selectedSetting === 1 ? 'item-settings-content-show' : 'item-settings-content'}>
                        Feature coming soon
                    </div>
                </div>

                <div className='item-settings'>
                    <div className='item-settings-title' onClick={() => settingsToggle(2)}>
                        <h2>Questions and Answers</h2>
                    </div>
                    <div className={selectedSetting === 2 ? 'item-settings-content-show' : 'item-settings-content'}>
                        <Accordion />
                    </div>
                </div>



                <div className='item-settings'>
                    <div className='item-settings-title' onClick={() => settingsToggle(3)}>
                        <h2>Team Settings</h2>
                    </div>
                    <div className={selectedSetting === 3 ? 'item-settings-content-show' : 'item-settings-content'}>
                        Some content
                    </div>
                </div>



            </div>
        </div>
    )
}

export default GameSettings