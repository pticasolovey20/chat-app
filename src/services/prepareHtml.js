import { Chat } from "../components/Chat";

export const prepareHtml = (text) => {
    switch (text) {
        case 'chats':
            return  <Chat/>
    
        default:
            return null;
    }
}