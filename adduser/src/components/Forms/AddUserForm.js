import { useState } from 'react';
import styles from '../../styles/Forms/AddUserForm.module.css';
import { v4 as uuid4 } from 'uuid';
import Button from './Button'
import ErrorModal from '../UI/ErrorModal';

const AddUserForm = (props) => {
	const [userInput, setUserInput] = useState({
		name: '',
		age: '',
		id: '',
	});

	const [error, setError] = useState({
		show: false,
		title: 'Error',
		message: '',
	})

	const setName = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, name: event.target.value };
		});
	};

	const setAge = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, age: parseInt(event.target.value) };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (userInput.name.trim().length === 0) {
			setError((prevState) => {
				return {...prevState, show: true, message: 'Please enter the name!'}
			})
		} else if (!userInput.age) {
			setError((prevState) => {
				return {...prevState, show: true, message: 'Please enter the age'}
			})
		} else if (+userInput.age < 1) {
			setError((prevState) => {
				return {...prevState, show: true, message: 'Please enter a valid age (>0)'}
			})
		} else {
			const user = userInput;
			user.id = uuid4();
			props.addNewUser(user);
			setUserInput({
				name: '',
				age: '',
			});
		}
	};

	const closeError = () => {
		setError((prevState) => {
			return {...prevState, show: false, message: ''}
		})
	}

	return (
		<div className={styles['form-container']}>
			{error.show ? <ErrorModal title={error.title} message={error.message} closeError={closeError}/> : ''}
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Name"
					onChange={setName}
					value={userInput.name}
				></input>
				<input
					type="number"
					placeholder="Age"
					onChange={setAge}
					value={userInput.age}
				></input>
				<Button type="submit">Create User</Button>
			</form>
		</div>
	);
};

export default AddUserForm;
