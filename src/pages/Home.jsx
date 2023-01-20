import { useAuth } from '../hooks/useAuth';
import { SideBar } from '../components/SideBar';
import { Navigate } from 'react-router-dom';

export const Home = () => {
    const { isAuth } = useAuth();

	return isAuth ? (
		<div className='wrapper'>
			<SideBar/>
			<div className='chatBar'></div>
			<div className='chatWrapper'></div>
		</div>
	) : (
		<Navigate to="/login" />
	);
}