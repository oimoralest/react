import '../styles/ExpenseItem.css';
import ExpenseDate from './ExpenseDate'


const ExpenseItem = (props) => {
	const clickHandler = () => {
		console.log('You clicked me')
	}
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</div>
	);
}

export default ExpenseItem;
