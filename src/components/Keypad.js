// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  input = () => {
    console.log("Entering password...")
  }

  render () {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.input}
        />
      </div>
    );
  }
}

export default Keypad;
