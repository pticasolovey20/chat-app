import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const Home = () => {
    const { isAuth } = useAuth();

	return isAuth ? (
		<div>
			Home
		</div>
	) : (
		<Navigate to="/login" />
	);
}