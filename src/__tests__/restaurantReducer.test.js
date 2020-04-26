import mockData from './mockData.json';
import { restaurantReducer } from '../reducers/restaurantReducer';

describe('The restaurantReducer', () => {
	const initialState = {
		status: 'loading',
		error: '',
		restaurants: [],
	};

	const action = {
		type: 'GET_RESTAURANTS_SUCCESS',
		payload: mockData,
	};

	const expectedState = {
		status: 'success',
		restaurants: mockData,
		error: '',
	};

	test('dispatch with mockdata payload', () => {
		const reducerState = restaurantReducer(initialState, action);
		expect(reducerState).toEqual(expectedState);
	});
});
