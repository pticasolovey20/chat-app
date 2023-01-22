import { useAuth } from '../hooks/useAuth';
import { SideBar } from '../components/SideBar';
import { Navigate } from 'react-router-dom';

import { useState } from 'react';
import { ChatBar } from '../components/ChatBar';


export const Home = () => {
    const { isAuth } = useAuth();

	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return isAuth ? (
		<div className='wrapper'>
			<SideBar isOpen={isOpen}/>
			<ChatBar onClick={handleClick}/>
			<div className='chatWrapper'></div>
		</div>
	) : (
		<Navigate to="/login" />
	);
}