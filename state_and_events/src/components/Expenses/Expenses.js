import '../../styles/Expenses/Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
	return (
		<div className="expenses">
			{props.items.map((item) => {
				return (
					<ExpenseItem
						title={item.title}
						date={item.date}
						amount={item.amount}
					/>
				);
			})}
		</div>
	);
};

export default Expenses;
