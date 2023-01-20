import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const dispatch = useDispatch();
	const redirect = useNavigate();

	const handleSubmit = async event => {
		event.preventDefault();

		const email = event.target[0].value;
		const password = event.target[1].value;

		const auth = getAuth();

		try {
			await signInWithEmailAndPassword(auth, email, password);
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
                <input type='email' placeholder="Email"/>
                <input type='password' placeholder="Password"/>
                <button>SIGN IN</button>
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}