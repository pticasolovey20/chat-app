import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
	const dispatch = useDispatch();
	const redirect = useNavigate();

	const handleSubmit = async event => {
		event.preventDefault();

		// const displayName = event.target[0].value;
		const email = event.target[1].value;
		const password = event.target[2].value;

		const auth = getAuth();

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			dispatch(
				setUser({
					email,
					password,
				})
			);

			redirect('/');
		} catch (error) {
			console.log(error);
		}
	};

    return (
        <div className="formWrapper">
			<h2>UINE CHAT</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="User Name" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button>SIGN UP</button>
			</form>
			<p>
				Do you have an account? <Link to="/login">Log in</Link>
			</p>
		</div>
    )
}