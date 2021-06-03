import Button from '../Forms/Button';
import style from '../../styles/UI/ErrorModal.module.css';

const ErrorModal = (props) => {
	return (
        <div>
            <div className={style['backdrop']} onClick={props.closeError}></div>
            <div className={style['modal']}>
                <div>
                    <header className={style['header']}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={style['content']}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={style['actions']}>
                        <Button onClick={props.closeError}>Close</Button>
                    </footer>
                </div>
            </div>
        </div>
	);
};

export default ErrorModal;
