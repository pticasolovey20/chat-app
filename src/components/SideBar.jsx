import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import User from '../assets/user.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import '../styles/App.scss'

export const SideBar = () => {
    const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeUser())
	}

    return (
        <div className='sideBar'>
            <div className='img'>
                <img src={User} alt='user'/>
                <span>Jhon Doe</span>
            </div>
            <ul>
                <li>
                    <AccountCircleOutlinedIcon />
                    PROFILE
                </li>
                <li>
                    <CalendarMonthOutlinedIcon />
                    CALENDAR
                </li>
                <li>
                    <SettingsOutlinedIcon /> 
                    SETTINGS
                </li>
            </ul>
            <button onClick={handleClick}>
                <ExitToAppOutlinedIcon />
                SIGN OUT
            </button>
        </div>
    )
}
