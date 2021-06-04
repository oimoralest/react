import styles from '../../styles/Users/User.module.css';

const User = (props) => {
	return (
		<li className={styles['user-container']}>
			<p className={styles['user-age']}>Age:{props.user.age}</p>
			<p className={styles['user-name']}>{props.user.name}</p>
		</li>
	);
};

export default User;
