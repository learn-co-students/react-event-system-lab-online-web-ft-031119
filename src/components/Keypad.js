import React from 'react';

class Keypad extends React.Component {

	pw = () => {
		console.log('Entering password...')
	}

	render () {
		return (
		<div>
			<input onKeyUp={this.pw} type="password" /> 
		</div>
		)
	}
}

export default Keypad;