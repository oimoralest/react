import User from './User';
import styles from '../../styles/Users/UsersList.module.css';

const UsersList = (props) => {
	let content = <li>Not users added</li>;

	if (props.users.length > 0) {
		content = props.users.map((user) => <User key={user.id} user={user} />);
	}

	return (
		<ul
			className={
				props.users.length > 0
					? styles['users-container']
					: styles['empty']
			}
		>
			{content}
		</ul>
	);
};

export default UsersList;
