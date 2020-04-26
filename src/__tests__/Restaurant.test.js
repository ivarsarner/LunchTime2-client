import React from 'react';
import { mount } from 'enzyme';
import Restaurant from '../components/Restaurant';
import mockData from './mockData.json';

describe('The <Restaurant /> component', () => {
	const mockRestaurant = mockData.businesses[0];
	it('When given a Restaurant object, it should render it properly', () => {
		const wrapper = mount(<Restaurant restaurant={mockRestaurant} />);
		const cardNameDiv = wrapper.find('.restaurants-list__card__name');
		expect(cardNameDiv.text()).toBe(mockRestaurant.name);
	});
});
