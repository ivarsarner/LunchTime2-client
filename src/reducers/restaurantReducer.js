export const restaurantReducer = (state, action) => {
	switch (action.type) {
		case 'GET_RESTAURANTS_SUCCESS':
			return {
				status: 'success',
				restaurants: action.payload,
				error: '',
			};
		case 'GET_RESTAURANTS_ERROR':
			return {
				loading: 'error',
				restaurants: [],
				error:
					action.payload ||
					'There has been an error: could not load restaurants',
			};
		default:
			return state;
	}
};
