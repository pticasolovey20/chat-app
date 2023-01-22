import React from 'react'
import { useDispatch } from 'react-redux'
import {setBar} from '../store/slices/chatBarSlice'
import {prepareSvg} from '../services/prepareSvg'

export const ListItem = ({text}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setBar(text))
    }
    
    return (
        <li onClick={handleClick}>
            {prepareSvg(text)}
            <span>{text.toUpperCase()}</span>
        </li>
    )
}
