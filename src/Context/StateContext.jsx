import React, { createContext, Component } from 'react';
import dogImages from '../dogImages.json';
import catImages from '../catImages.json';
import birdImages from '../birdImages.json';

export const StateContext = createContext();

class StateContextProvider extends Component {
	state = {
		images: [ dogImages, catImages, birdImages ],
		displayedImages: dogImages,
		count: 0,
		clicked: null
	};

	componentDidMount() {
		this.shuffleImages();
	}

	shuffleCards = () => {
		let images = this.state.displayedImages;
		for (let i = images.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ images[i], images[j] ] = [ images[j], images[i] ];
		}
		this.setState({
			dogImages: images
		});
	};

	shuffleImages = () => {
		let num = Math.floor(Math.random() * this.state.images.length);
		this.setState({
			displayedImages: this.state.images[num]
		});
	};

	render() {
		return (
			<StateContext.Provider
				value={{ ...this.state, shuffleCards: this.shuffleCards, shuffleImages: this.shuffleImages }}
			>
				{this.props.children}
			</StateContext.Provider>
		);
	}
}

export default StateContextProvider;
