import React, { Component } from 'react';
// import logo from './logo.svg';
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
import AppFooter from './components/AppFooter'
import ContactCard from './components/ContactCard'
import './styles/App.css';


class App extends Component{
	render() {
		return (
			 <div>
				<AppHeader />
				<AppBody />

				<ContactCard 
					content={{
						name:"Mr. Whiskerson", 
						imgUrl:"http://placekitten.com/300/200", 
						phone:"(212) 555-1234",
						email:"mr.whiskaz@catnap.meow"
					}}
				/>

				<ContactCard 
					content={{
						name:"Fluffykins", 
						imgUrl:"http://placekitten.com/400/200", 
						phone:"(212) 555-2345", 
						email:"fluff@me.com"
					}}
				/>
            
				<ContactCard 
					content={{
						name:"Destroyer", 
						imgUrl:"http://placekitten.com/400/300", 
						phone:"(212) 555-3456", 
						email:"ofworlds@yahoo.com"
					}}
				/>
            
				<ContactCard 
					content={{
						name:"Felix", 
						imgUrl:"http://placekitten.com/200/100", 
						phone:"(212) 555-4567", 
						email:"thecat@hotmail.com"
					}}
				/>

				<AppFooter />
			 </div>
		);
	}
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
