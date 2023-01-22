import React from 'react'
import { useSelector } from 'react-redux';
import { prepareSvg } from '../services/prepareSvg';
import { prepareHtml } from '../services/prepareHtml';

export const ChatBar = ({onClick}) => {
    const {text} = useSelector(state => state.chat)

    return (
        <div className='chatBar'>
		    <div className='menu' onClick={onClick}>
                {prepareSvg('menu')}
                <h2>UINE CHAT</h2>
		    </div>
		    {prepareHtml(text)}
	    </div>
    )
}