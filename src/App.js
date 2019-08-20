import React, { Component } from 'react';
// import logo from './logo.svg';
import Todo from './components/Todoitem'
import todosData from "./components/todosData"
import './styles/App.css';


class App extends Component{
	render() {
		const toDoComponents = todosData.map(item => <Todo key={item.id} todo={item} />)
		return (
			<div>
            	{toDoComponents}          
        	</div>
		);
	}
}

export default App;