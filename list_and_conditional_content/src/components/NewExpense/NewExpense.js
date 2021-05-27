import '../../styles/NewExpense/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const onSubmitHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onSubmit(expenseData)
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSubmit={onSubmitHandler} />
		</div>
	);
};

export default NewExpense;
