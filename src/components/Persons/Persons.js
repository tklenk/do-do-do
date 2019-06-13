import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
// static getDerivedStateFromProps(props, state) {
//   console.log('[Persons.js] getDerivedStateFromProps')
//   return state
// }

shouldComponentUpdate(nextProps, nextState) {
  console.log('[Persons.js] shouldComponentUpdate')
  if (nextProps.persons !== this.props.persons) {
     return true
  } else {
    return false
  }
  // optimize performance in functional components like Cockpit
  // (schouldComponenntUpdate is a great tool but in Class-based comp.)
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('[Person.js] getSnapshotBeforeUpdate')
}

componentDidUpdate() {
  console.log('[Persons.js] componentDidUpdate')
}

componentWillUnmount() {
  console.log('[Person.js] componentWillUnmount')
}

  render() {
    console.log('[Persons.js] rendering...') 
    return this.props.persons.map((person, index) => {
      return <Person
              click={() => this.props.clicked(index)} 
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons