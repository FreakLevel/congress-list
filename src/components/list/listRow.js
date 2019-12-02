import React from 'react'
import { NavLink } from 'react-router-dom'
import { tableMembersKeys } from '../../utils/const'
import './style.scss'

export default (props) => {
    return(
        <div key={props.index}>
            <NavLink
                to={`member/${props.member['id']}`}
                className='table__row'
                key={`${props.index}-Nav`}
            >
                {Object.keys(tableMembersKeys).map(key => (
                    <div className='table__column' key={`${props.index}-${key}`}>{props.member[key]}</div>
                ))}
            </NavLink>
        </div>
    )
}