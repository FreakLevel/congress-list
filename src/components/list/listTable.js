import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Context from '../../utils/context'
import { tableMembersKeys } from '../../utils/const'
import * as UTILS from '../../utils/functions'
import './style.scss'
import loader from '../../assets/loader.gif'

export default (props) => {
    const context = useContext(Context)
    const [members, setMembers] = useState([])
    const headers = () => (
        Object.values(tableMembersKeys).map((value, index) => (
            <div className='table__column table__column--header' key={index}>{value}</div>
        ))
    )
    
    const rows = () => {
        if (props.loading) {
            return (
                <div className='loader'>
                    <h5>Loading Data</h5>
                    <img src={loader} />
                </div>
            )
        } else if(members.length > 0){
            let rangeItems = UTILS.rangePaginator(context.pageState, context.numItemsState)
            return rangeItems.map(index => {
                if(index < members.length -1) {
                    return <div key={index}>
                        <NavLink
                            to={`member/${members[index]['id']}`}
                            className='table__row'
                            key={`${index}-Nav`}
                        >
                            {Object.keys(tableMembersKeys).map(key => (
                                <div className='table__column' key={`${index}-${key}`}>{members[index][key]}</div>
                            ))}
                        </NavLink>
                    </div>
                }
            })
        } else {
            return (<span>No members found</span>)
        }
    }

    useEffect(() => {
        setMembers(context.membersState)
    }, [context])

    return(
        <div className='table'>
            <section className='table__headers'>
                {headers()}
            </section>
            <section className='table_content'>
                {rows()}
            </section>
        </div>
    )
}