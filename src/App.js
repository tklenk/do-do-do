import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = props => {
  const [personeState, setPersoneState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Max1", age: 24 },
      { name: "Max2", age: 26 },
    ],
})
  const [otherState, setOtherState] = useState('some other thing') 
  
  console.log(personeState, otherState)

  const switchNameHandler = () => {
    setPersoneState({ 
      persons: [
        { name: "Megiiiiii", age: 28 },
        { name: "Max1", age: 24 },
        { name: "Max2", age: 44 },
      ]
    })
  }
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p>What is your name?</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personeState.persons[0].name} 
        age={personeState.persons[0].age}/>
      <Person 
        name={personeState.persons[1].name} 
        age={personeState.persons[1].age}/>
      <Person 
        name={personeState.persons[2].name} 
        age={personeState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am React'))
}

export default App;
