import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

axios.get('/api/getitem')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
	
class DrewMS extends Component {
	render() {
		return (
			<div className="test-class">
				<h1>We're building things!!</h1>
			</div>
		);
	}
}

export default DrewMS;
