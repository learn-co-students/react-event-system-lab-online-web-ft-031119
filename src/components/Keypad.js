// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    state = {  }
    handleTyping = () => console.log('Entering password...')
    render() { 
        return ( 
            <div>
                <input type="password" onKeyUp={this.handleTyping}></input>
            </div>
         );
    }
}
 
export default Keypad;