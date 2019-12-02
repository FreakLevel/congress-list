import React, { useContext, useEffect, useState } from 'react'
import Context from '../../utils/context'
import './style.scss'
import ListSearch from './listSearch'
import ListPaginator from './listPaginator'
import ListTable from './listTable'
import { chambers } from '../../utils/const'
import * as CONGRESS_API from '../../api/congress'

export default () => {
    const context = useContext(Context)
    const [congress, setCongress] = useState(context.congressState)
    const [chamber, setChamber] = useState(context.chamberState)
    const [loading, setLoader] = useState(true)

    const saveCongress = () => {
        if(congressValidation()) {
            context.handleCongressChange({ congress, chamber })
            setLoader(true)
            getMembers()
        } else {
            alert('The congress selected is out of range of chamber selected')
        }
    }

    const getMembers = () => (
        CONGRESS_API.getAll({ congress, chamber }).then(response => {
            context.handleMembersChange(response.data.results[0].members)
            setLoader(false)
        })
    )

    const congressValidation = () => {
        if(chamber === 'house') {
            return (congress >= 102 && congress <= 116) ? true : false
        } else {
            return (congress >= 80 && congress <= 116) ? true : false
        }
    }

    useEffect(() => {
        async function fetchData() { getMembers() }
        fetchData()
    }, [])

    return(
        <div className='list'>
            <div className='list__congress'>
                <div>
                    <span>Congress (102 - 116 for House, 80 - 116 for Senate): </span>
                    <input type='number' min='80' max='116' value={congress} onChange={(event) => setCongress(event.target.value)} />
                </div>
                <div>
                    <span>Chamber: </span>
                    <select onChange={ e => setChamber(e.target.value)} value={chamber}>
                        {
                            Object.keys(chambers).map((chamberConst, index) => (
                                <option key={index} value={chamberConst} >{chambers[chamberConst]}</option>
                            ))
                        }
                    </select>
                </div>
                <button onClick={saveCongress}>Actualizar</button>
            </div>
            <ListSearch />
            <ListTable loading={loading}/>
            <ListPaginator />
        </div>
    )
}