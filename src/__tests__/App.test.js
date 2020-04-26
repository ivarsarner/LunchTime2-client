import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('That the App is rendered', () => {
	const wrapper = shallow(<App />);
	expect(wrapper).not.toBe(null);
});
