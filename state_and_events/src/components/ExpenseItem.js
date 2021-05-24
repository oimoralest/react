import '../styles/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	let number = 0
	const clickHandler = () => {
		setTitle('Updated')
		number++
		console.log(number)
	};
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</div>
	);
};

export default ExpenseItem;
