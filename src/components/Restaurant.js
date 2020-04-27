import React from 'react';
import logo from '../assets/logo_2.jpg';
import '../styles/Restaurant.css';

const Restaurant = (props) => {
	const {
		image_url,
		name,
		rating,
		categories,
		coordinates: { latitude, longitude },
	} = props.restaurant;
	return (
		<>
			<div className="restaurants-list__card__left">
				<img
					className="restaurants-list__card__img"
					src={image_url ? image_url : logo}
					alt={`${name}`}
				/>
				<div>Rating: {rating}</div>
			</div>
			<div className="restaurants-list__card__right">
				<div className="restaurants-list__card__name">
					<h3>{name}</h3>
				</div>
				<div className="restaurants-list__card__categories">
					<span className="restaurants-list__card__category">Category:</span>{' '}
					<br></br>
					{categories.map((category, index) => (
						<span key={index}>{category.title} </span>
					))}
				</div>
				<div>
					<a href={`https://www.google.com/maps/?q=${latitude},${longitude}`}>
						Find restaurant
					</a>
				</div>
			</div>
		</>
	);
};

export default Restaurant;
