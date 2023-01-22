import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import User from '../assets/user.png'

import { listData } from '../data/listData'
import { ListItem } from './ListItem';

import { prepareSvg } from '../services/prepareSvg';

export const SideBar = ({isOpen}) => {
    const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeUser())
	}

    return (
        <div className={isOpen ? 'openSideBar' : 'sideBar'}>
            <div className='img'>
                <img src={User} alt='user'/>
                <span>Jhon Doe</span>
            </div>
            <ul>
                {listData.map((item, index) => (
                    <ListItem key={index} text={item.text}/>
                ))}
            </ul>
            <button onClick={handleClick}>
                {prepareSvg('signout')}
                <span>SIGN OUT</span>
            </button>
        </div>
    )
}
