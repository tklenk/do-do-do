import React, { useEffect, useRef } from 'react'
import '../../containers/App.css'

const cockpit = props => {
    const toggleBtnRef = useRef(null)


    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout(() => {
        //     alert('Saved data to cloud!')
        // }, 1000)
        toggleBtnRef.current.click()

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])  // if I want to execute when component renders for the first time - pass an empty array
            // if you want to use componentDidMount use useEffect with empty array passed as a second argument
    
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    
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
    
    if (props.personsLength <= 2) {
      assignedClasses.push('red') // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push('bold') // classes = ['red', 'bold']
    }

    return (
        <div className="App">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>What is your name?</p>
            <button 
                ref={toggleBtnRef}
                style={styleButton}
                onClick={props.toggle}
            >
                Show/Hide Name
            </button>
        </div>
    )
}

export default React.memo(cockpit)