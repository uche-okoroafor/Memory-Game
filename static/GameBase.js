import React, { useContext, useState } from 'react';
import CardImages from '../CardImages/CardImages';
import { StateContext } from '../Context/StateContext';
import Jumbotron from '../Jumbotron/Jumbotron';

function GameBase() {
	const { displayedImages, shuffleCards, shuffleImages } = useContext(StateContext);
	const [ clicked, setClicked ] = useState([]);
	const [ score, setScore ] = useState(9);
	const [ highScore, setHighScore ] = useState(0);
	const [ progressMessage, setProgressMessage ] = useState([]);
	const [ toggleDisplay, setToggleDisplay ] = useState(false);
	const [ yourScore, setYourScore ] = useState(0);
	const [ win, setWin ] = useState(true);

	function handleIncrement() {
		const newScore = score + 1;

		if (score >= highScore) {
			setScore(newScore);
			setYourScore(newScore);
			return setHighScore(newScore);
		}
		setYourScore(newScore);
		setScore(newScore);
		setProgressMessage('Great job! Keep going!');
		shuffleCards();
	}



	function handleTitle() {
		if (displayedImages[0].letter === 'Bird A') {
			return 'Bird';
		} else if (displayedImages[0].letter === 'Dog A') {
			return 'Dog';
		}

		return 'Cat';
	}



	function handleReset() {
		setScore(0);
		setClicked([]);
		setProgressMessage('');
	}



	function handleModel(params) {
		switch (params) {
			case 'toggledisplay':
				setToggleDisplay(true);
				setWin(true);
				

				break;

			case 'startGame':
				setWin(true);
				setToggleDisplay(false);
				shuffleCards();
				shuffleImages();
				break;

			case 'you win!':
				setToggleDisplay(true);
				setWin(false);
				break;

			default:
				break;
		}
	}

	function handleClick(id) {
		if (clicked.indexOf(id) === -1) {
			setClicked([ ...clicked, id ]);
			shuffleCards();
			handleIncrement();
		} else if (highScore === 10) {
			handleModel('you win!');
			handleReset();
		} else {
			handleModel('toggledisplay');
			handleReset();
		}
	}

	return (
		<React.Fragment>
			<Jumbotron
				score={score}
				highScore={highScore}
				progressMessage={progressMessage}
				handleTitle={handleTitle}
			/>
			{toggleDisplay && (
				<div className="model-backdrop">
					<div className="model">
						{win && (
							<h3>
								Oh No!,You Clicked that {handleTitle()} 'Before.<br />
								Game Over
							</h3>
						)}
						{!win && <h3>You Won </h3>}
						<h3>Your score:{yourScore}</h3>
						<h3>High score:{highScore}</h3>
						<button className="btn btn-success" onClick={() => handleModel('startGame')}>
							Play Again
						</button>
					</div>
				</div>
			) 

}
{console.log(win)}
			<CardImages handleClick={handleClick} />
		</React.Fragment>
	);
}

export default GameBase;
