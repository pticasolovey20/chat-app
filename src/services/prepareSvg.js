import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const prepareSvg = (text) => {
    switch (text) {
        case 'profile':
            return <AccountCircleOutlinedIcon />

        case 'calender':
            return <CalendarMonthOutlinedIcon />

        case 'chats':
            return <InsertCommentOutlinedIcon />

        case 'settings':
            return <SettingsOutlinedIcon />
        
        case 'signout':
            return <ExitToAppOutlinedIcon />

        case 'search':
            return <SearchOutlinedIcon />
        case 'menu':
            return <MenuOutlinedIcon />
    
        default:
            return null;
    }
}