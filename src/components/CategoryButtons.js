import React from 'react';
import '../styles/CategoryButtons.css';

const CategoryButtons = ({ handleClick }) => {
	return (
		<section className="restaurants-list__category-buttons">
			<h3>Select category:</h3>
			<button
				data-testid="pizza-btn"
				className="restaurants-list__category-buttons__btn"
				value="pizza"
				onClick={handleClick}
			>
				Pizza
			</button>
			<button
				data-testid="sushi-btn"
				className="restaurants-list__category-buttons__btn"
				value="sushi"
				onClick={handleClick}
			>
				Sushi
			</button>
			<button
				data-testid="scandinavian-btn"
				className="restaurants-list__category-buttons__btn"
				value="scandinavian"
				onClick={handleClick}
			>
				Scandinavian
			</button>
			<button
				data-testid="all-btn"
				className="restaurants-list__category-buttons__btn"
				value="all"
				onClick={handleClick}
			>
				All
			</button>
		</section>
	);
};

export default CategoryButtons;
