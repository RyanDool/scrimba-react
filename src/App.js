import React, { Component } from 'react';
// import logo from './logo.svg';
import Joke from './components/Joke'
import jokesData from "./components/jokesData"
import './styles/App.css';


class App extends Component{
	render() {
		const jokeComponents = jokesData.map(joke => {
			return (
				<Joke question={joke.question} punchLine={joke.punchLine} />
			)
		})
		return (
			<div>
            	{jokeComponents}          
        	</div>
		);
	}
}

export default App;