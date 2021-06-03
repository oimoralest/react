import AddUserForm from './components/Forms/AddUserForm';
import UsersList from './components/Users/UsersList';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
	const [users, setUsers] = useState([]);

	const addNewUser = (newUser) => {
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
	};

	return (
		<div className={styles['container']}>
			<AddUserForm addNewUser={addNewUser} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
