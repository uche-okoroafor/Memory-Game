import React, { Component } from 'react';
import StateContextProvider from './Context/StateContext';
import GameBase from './GameBase';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<StateContextProvider>
					<GameBase />
				</StateContextProvider>
			</React.Fragment>
		);
	}
}

export default App;
