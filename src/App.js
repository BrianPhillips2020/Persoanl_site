import React, { Component, Route } from 'react';

import './App.css';
import { Home } from './Home/Home.js';

class App extends Component {

	render() {
		return (
			<div>
				<Home />
			</div>
		)
	}
}

export default App;