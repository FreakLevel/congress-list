import React, { useContext, useEffect, useState } from 'react'
import Context from '../../utils/context'
import { tableMembersKeys } from '../../utils/const'
import * as UTILS from '../../utils/functions'
import './style.scss'
import loader from '../../assets/loader.gif'
import Row from './listRow'

export default (props) => {
    const context = useContext(Context)
    const [members, setMembers] = useState([])
    const [filtered, setFiltered] = useState(false)
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
            let memberList = filtered ? filterMembers() : members
            return rangeItems.map(index => {
                if(index < memberList.length) {
                    return <Row member={memberList[index]} index={index} />
                }
            })
        } else {
            return (<span>No members found</span>)
        }
    }

    const filterMembers = () => {
        if(context.fieldFilterState === 'all') {
            return members.filter(member => (
                Object.keys(tableMembersKeys).reduce((has, key) => {
                    if (has) return true
                    if (member[key] === undefined) return false
                    if (member[key] === null) return false
                    return member[key].includes(context.textFilterState)
                }, false)
            ))
        } else {
            return members.filter(member => member[context.fieldFilterState].includes(context.textFilterState))
        }
    }

    useEffect(() => {
        setMembers(context.membersState)
        setFiltered(context.textFilterState !== '')
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