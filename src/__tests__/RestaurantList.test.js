import React from 'react';
import {
	render,
	cleanup,
	waitForElement,
	fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import RestaurantList from '../components/RestaurantList';
import { businesses } from './mockData.json';

afterEach(cleanup);

test('That the RestaurantList renders with mockdata', async () => {
	axiosMock.get.mockResolvedValueOnce({ data: businesses });

	const { getByTestId } = render(<RestaurantList />);

	expect(getByTestId('loading')).toHaveTextContent(
		'Getting restaurants in your area...'
	);

	const successDiv = await waitForElement(() => getByTestId('success'));
	expect(successDiv).toHaveTextContent('Restaurants close to you:');

	const restaurantCard = getByTestId('Marquise');
	const cardName = restaurantCard.querySelector('.restaurants-list__card__name')
		.textContent;
	expect(cardName).toEqual('Marquise');
	expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
