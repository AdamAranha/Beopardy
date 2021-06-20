import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {

    const [selected, setSelected] = useState(null)
    const [temp, setTemp] = useState('')
    const [gameObj, setGameObj] = useState({
        colOne: '',
        colTwo: '',
        colThree: '',
        colFour: '',
        colFive: ''
    })

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    const handChange = (event, item) => {
        const { name, value } = event.target

        setGameObj((prevState) => {
            return {
                ...prevState,
                [item.col]: [name].value
            }

        })

        console.log(gameObj)
    }


    return (
        <div className='wrapper-accordion'>

            <div className='accordion'>
                {data.map((item, i) => (

                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h3>{item.category}</h3>
                            {/* <div className='temp'>
                                <label></label>
                                <input></input>
                            </div> */}

                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content-show' : 'content'}>

                            {item.answer.map((question) => (
                                <div className='box-face'>

                                    <label>{question.title}</label>
                                    <input onChange={() => handChange} name={question.title} value={gameObj.[item.col].value} required></input>
                                </div>
                            ))}





                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

const data = [
    {
        category: 'This is the 1st category',
        col: 'colOne',
        answer: [
            {
                title: 'Category Name'
            },
            {
                title: '$100 Question'
            },
            {
                title: '$200 Question'
            },
            {
                title: '$300 Question'
            },
            {
                title: '$400 Question'
            },
            {
                title: '$500 Question'
            }
        ]
    },
    {
        category: 'This is the 2nd category',
        col: 'colTwo',
        answer: [
            {
                title: 'Category Name'
            },
            {
                title: '$100 Question'
            },
            {
                title: '$200 Question'
            },
            {
                title: '$300 Question'
            },
            {
                title: '$400 Question'
            },
            {
                title: '$500 Question'
            }
        ]
    },
    {
        category: 'This is the 3rd category',
        col: 'colThree',
        answer: [
            {
                title: 'Category Name'
            },
            {
                title: '$100 Question'
            },
            {
                title: '$200 Question'
            },
            {
                title: '$300 Question'
            },
            {
                title: '$400 Question'
            },
            {
                title: '$500 Question'
            }
        ]
    },
    {
        category: 'This is the 4th category',
        col: 'colFour',
        answer: [
            {
                title: 'Category Name'
            },
            {
                title: '$100 Question'
            },
            {
                title: '$200 Question'
            },
            {
                title: '$300 Question'
            },
            {
                title: '$400 Question'
            },
            {
                title: '$500 Question'
            }
        ]
    },
    {
        category: 'This is the 5th category',
        col: 'colFive',
        answer: [
            {
                title: 'Category Name'
            },
            {
                title: '$100 Question'
            },
            {
                title: '$200 Question'
            },
            {
                title: '$300 Question'
            },
            {
                title: '$400 Question'
            },
            {
                title: '$500 Question'
            }
        ]
    }
]

export default Accordion