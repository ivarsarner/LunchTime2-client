import React, { useReducer, useEffect } from 'react';
import { restaurantReducer } from '../reducers/restaurantReducer';
import Restaurant from './Restaurant';
import { getLocation } from '../util/getLocation';
import axios from 'axios';
import '../styles/RestaurantList.css';
import CategoryButtons from './CategoryButtons';

const initialState = {
	status: 'loading',
	error: '',
	restaurants: [],
};

const RestaurantList = () => {
	const [state, dispatch] = useReducer(restaurantReducer, initialState);

	console.log(state.status);

	const getRestaurants = async (category = 'all') => {
		try {
			const {
				coords: { latitude, longitude },
			} = await getLocation();

			const url = 'https://hidden-ocean-76033.herokuapp.com';
			const { data: restaurants } = await axios.get(
				`${url}/restaurants/${latitude}/${longitude}/${category}`
			);
			dispatch({
				type: 'GET_RESTAURANTS_SUCCESS',
				payload: restaurants,
			});
		} catch (error) {
			console.log('Could not get restaurants');
			console.error(error.message);
			dispatch({
				type: 'GET_RESTAURANTS_ERROR',
				payload:
					error.code === 1
						? 'Please allow this site to access your location'
						: error.message,
			});
		}
	};

	const handleClick = (e) => {
		console.log('button clicked: ', e.target.value);
		getRestaurants(e.target.value);
	};

	useEffect(() => {
		getRestaurants();
	}, []);

	return (
		<>
			{state.status === 'loading' ? (
				<p data-testid="loading" className="loading">
					Getting restaurants in your area...
				</p>
			) : (
				<>
					{state.error ? (
						<p data-testid="error">{state.error}</p>
					) : (
						<div data-testid="success" className="restaurants-container">
							<CategoryButtons handleClick={handleClick} />
							<header>
								<h3>Restaurants close to you:</h3>
							</header>
							<section className="restaurants-list">
								{state.restaurants.map((restaurant) => (
									<div
										data-testid={restaurant.name}
										key={restaurant.id}
										className="restaurants-list__card"
									>
										<Restaurant restaurant={restaurant} />
									</div>
								))}
							</section>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default RestaurantList;
