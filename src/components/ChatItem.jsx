import React from 'react'

export const ChatItem = ({avatar,name, message}) => {
    return (
        <div className='chatItem'>
            <img src={avatar} alt='avatar'/>
            <div className='text'>
                <span>{name}</span>
                <p>{message}</p>
            </div>
        </div>
    )
}