import '../../styles/NewExpense/NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { v4 as uuid4 } from 'uuid';

const NewExpense = (props) => {
	const onSubmitHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: uuid4(),
		};
		props.onSubmit(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSubmit={onSubmitHandler} />
		</div>
	);
};

export default NewExpense;
