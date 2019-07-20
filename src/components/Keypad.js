import React, {Component} from 'react';

class Keypad extends React.Component {

	render () {
		return (
			<input onKeyUp={console.log('Entering password...')} type="password" /> 
		)
	}
}