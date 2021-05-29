import '../../styles/Expenses/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../UI/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onFilterChangeHandler = (year) => {
		setFilteredYear(year);
	};

	const inFilteredYear = props.items.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div className="expenses">
			<ExpensesFilter
				onFilterChange={onFilterChangeHandler}
				defaultValue={filteredYear}
			/>
			<ExpensesChart expenses={inFilteredYear} />
			<ExpensesList items={inFilteredYear} />
		</div>
	);
};

export default Expenses;
