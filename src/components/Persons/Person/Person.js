import React, { Component } from 'react'
import './Person.css'

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className='Person'>
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person