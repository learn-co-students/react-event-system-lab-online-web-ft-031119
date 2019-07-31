// Code Keypad Component Here
import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Keypad extends Component {
    entering = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <div>
                <input onKeyUp={this.entering} type="password" />
            </div>
        )
    }
}