import React, { useContext, useState } from 'react';
import CardImages from './Components/CardImages';
import { StateContext } from './Context/StateContext';
import Jumbotron from './Components/Jumbotron';

function GameBase() {
	const { displayedImages, shuffleCards, shuffleImages } = useContext(StateContext);
	const [ clicked, setClicked ] = useState([]);
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);
	const [ progressMessage, setProgressMessage ] = useState([]);
	const [ toggleModel, setToggleModel ] = useState(false);
	const [ yourScore, setYourScore ] = useState(0);
	const [ win, setWin ] = useState(true);
	const [ inlinestyle, setInlinestyle ] = useState({ transform: 'scale(0,0)', transition: '0.5s' });

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
		if (displayedImages[0].letter.includes('Bird') ) {
			return 'Bird';
		} else if (displayedImages[0].letter.includes('Dog')) {
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
			case 'toggleModel':
				setToggleModel(true);
				setInlinestyle({
					transition: '0.5s',
					transform: 'scale(1,1)'
				});
				setWin(true);
				break;

			case 'startGame':
				setWin(true);
				setTimeout(() => {
					setToggleModel(false);
				}, 250);
				shuffleCards();
				shuffleImages();
				setInlinestyle({
					transition: '0.5s',
					transform: 'scale(0,0)'
				});
				break;

			case 'you win!':
				setToggleModel(true);
				setWin(false);
				setInlinestyle({
					transition: '0.5s',
					transform: 'scale(1,1)'
				});
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
			handleModel('toggleModel');
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
			{toggleModel && (
				<div className="model-backdrop">
					<div className="model" style={inlinestyle}>
						{win && (
							<h3>
								Oh No!,You Clicked that {handleTitle()} 'Before.<br />
								Game Over
							</h3>
						)}
						{!win && <h3 className="youwin">You Won </h3>}
						<h3>Your score:{yourScore}</h3>
						<h3>High score:{highScore}</h3>
						<button className="btn btn-success" onClick={() => handleModel('startGame')}>
							Play Again
						</button>
					</div>
				</div>
			)}
	
			<CardImages handleClick={handleClick} />
		</React.Fragment>
	);
}

export default GameBase;
