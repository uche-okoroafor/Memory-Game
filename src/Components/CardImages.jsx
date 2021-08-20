import React, { useContext } from 'react';
import { StateContext } from '../Context/StateContext';

function CardImages(props) {
	const { displayedImages } = useContext(StateContext);
	return (
		<React.Fragment>
			<div className="images">
				{displayedImages.map((image) => (
					<div key={image.id}>
						<img src={image.image} alt={image.letter} onClick={() => props.handleClick(image.id)} />
					</div>
				))}
			</div>
		</React.Fragment>
	);
}

export default CardImages;
