import '../../styles/NewExpense/ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
	// These states save the entered data in the form
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const [form, setForm] = useState(false);

	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, title: event.target.value };
		});
	};
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, amount: event.target.value };
		});
	};
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, date: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		userInput.date = new Date(userInput.date);
		userInput.amount = parseFloat(userInput.amount);
		const expenseData = userInput;
		// Calls the onSubmit prop that executes the onSubmitHandler on parent component
		props.onSubmit(expenseData);
		// Resets the states in the form
		setUserInput({
			title: '',
			amount: '',
			date: '',
		});
		cancelForm();
	};

	const cancelForm = () => {
		setForm(false);
	};

	const renderForm = () => {
		setForm(true);
	};

	return form ? (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={userInput.title}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={userInput.amount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={userInput.date}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={cancelForm}>Cancel</button>
				<button type="Submit">Add Expense</button>
			</div>
		</form>
	) : (
		<div>
			<button onClick={renderForm}>Add New Expense</button>
		</div>
	);
};

export default ExpenseForm;
