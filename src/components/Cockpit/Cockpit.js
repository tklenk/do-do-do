import React, { useEffect } from 'react'
import '../../containers/App.css'

const cockpit = props => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000)
    }, [props.persons]) //

    const styleButton = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
      }

    let assignedClasses = []

    if (props.showPersons) {
        styleButton.backgroundColor = 'red'
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push('red') // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push('bold') // classes = ['red', 'bold']
    }

    return (
        <div className="App">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>What is your name?</p>
            <button 
                style={styleButton}
                onClick={props.toggle}
            >
                Show/Hide Name
            </button>
        </div>
    )
}

export default cockpit