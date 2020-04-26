import React from 'react';
import './styles/App.css';
import logo from './assets/logo.png';
import RestaurantList from './components/RestaurantList';

function App() {
	console.log(process.env.NODE_ENV);
	return (
		<main data-testid="main">
			<img src={logo} alt="LunchTime logo" />
			<RestaurantList />
		</main>
	);
}

export default App;
