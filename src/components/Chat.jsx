import React from 'react'
import {prepareSvg} from '../services/prepareSvg'
import User from '../assets/user.png'
import {chatData} from '../data/chatData'
import {ChatItem} from './ChatItem'

export const Chat = () => {
  return (
    <div className='chatBarWrapper'>
        <div className='inputWrapper'>
            <button>
                {prepareSvg('search')}
            </button>
            <input placeholder='Search...'/>
        </div>
        {chatData.map((item, index) => (
            <ChatItem 
                avatar={User} 
                name={item.name} 
                message={item.message} 
                key={index}
            />
        ))}
    </div>
  )
}