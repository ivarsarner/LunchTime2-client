/* import axios from 'axios';
import { getLocation } from './getLocation';

export const getRestaurants = async (category = 'all') => {
	try {
		const {
			coords: { latitude, longitude },
		} = await getLocation();

		const { data: restaurants } = await axios.get(
			`/restaurants/${latitude}/${longitude}/${category}`
		);
		return restaurants;
	} catch (error) {
		console.log('Could not get restaurants');
		console.error(error.message);
		throw error;
	}
};
 */
