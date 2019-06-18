import React, { Component } from 'react'
import './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
class Person extends Component {

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I am a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>  
        )
          
    }
}

export default withClass(Person, "Person")