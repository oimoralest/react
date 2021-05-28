import '../../styles/Expenses/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../UI/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onFilterChangeHandler = (year) => {
		setFilteredYear(year);
	};

	const inFilteredYear = (item) => {
		if (item.date.getFullYear().toString() === filteredYear) {
			return (
				<ExpenseItem
					key={item.id}
					title={item.title}
					date={item.date}
					amount={item.amount}
				/>
			);
		}
	};

	return (
		<div className="expenses">
			<ExpensesFilter
				onFilterChange={onFilterChangeHandler}
				defaultValue={filteredYear}
			/>
			{props.items.map((item) => {
				return inFilteredYear(item);
			})}
		</div>
	);
};

export default Expenses;
