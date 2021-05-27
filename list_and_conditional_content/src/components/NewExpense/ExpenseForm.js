import '../../styles/NewExpense/ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
	// These states save the entered data in the form
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		userInput.enteredDate = new Date(userInput.enteredDate);
		const expenseData = userInput;
		// Calls the onSubmit prop that executes the onSubmitHandler on parent component
		props.onSubmit(expenseData);
		// Resets the states in the form
		setUserInput({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={userInput.enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={userInput.enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={userInput.enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="Submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
