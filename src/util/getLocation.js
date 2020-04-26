export const getLocation = () => {
	if (process.env.NODE_ENV !== 'production') {
		return {
			coords: {
				latitude: '59.3339948',
				longitude: '18.0641561',
			},
		};
	}

	const options = {
		enableHighAccuracy: true,
	};
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
};
