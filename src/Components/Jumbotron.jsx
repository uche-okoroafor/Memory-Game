import React from 'react';
function Jumbotron(props) {
	return (
		<div className="Jumbotron">
			<h1>Memory Game!</h1>
			<p className="jumboHeading">
				To get started, click on any {props.handleTitle()} picture. Don't click the same {props.handleTitle()}{' '}
				twice or it's game over!
			</p>
			<nav className="container-fluid progressBar">
				<h3>Score: {props.score}</h3>
				<h3>High Score: {props.highScore}</h3>
				<br />
				<p>{props.progressMessage}</p>
			</nav>
		</div>
	);
}
export default Jumbotron;
