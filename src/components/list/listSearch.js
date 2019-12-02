import React, { useContext } from 'react'
import Context from '../../utils/context'
import './style.scss'
import { tableMembersKeys } from '../../utils/const'

export default () => {
    const context = useContext(Context)

    const handleFilterChange = (event, attribute) => {
        let value = event.target.value
        if(attribute === 'TEXT') {
            context.handleTextFilterChange(value)
        } else if (attribute === 'FIELD') {
            context.handleFieldFilterChange(value)
        }
    }

    const fields = () => {
        if(context.membersState.length > 0) {
            return (
                Object.keys(context.membersState[0]).map((key, index) => (
                    <option key={index} value={key}>{[key]}</option>
                ))
            )
        } else {
            return []
        }
    }

    return(
        <section className='filter'>
            <div>
                <span>Filter: </span>
                <input type='text' value={context.textFilterState} onChange={event => handleFilterChange(event, 'TEXT')} />
            </div>
            <div>
                <span>Field: </span>
                <select value={context.fieldFilterState} onChange={event => handleFilterChange(event, 'FIELD')} >
                    <option key='default' value='all'>All</option>
                    { fields() }
                </select>
            </div>
        </section>
    )
}