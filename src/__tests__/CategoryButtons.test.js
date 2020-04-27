import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import CategoryButtons from '../components/CategoryButtons';

let container;
let button;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
	act(() => {
		ReactDOM.render(<CategoryButtons />, container);
	});
	button = container.querySelector('button');
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

test('button is rendered', () => {
	expect(button.value).toBe('pizza');
});
