import React, { useContext, useEffect, useState } from 'react'
import Context from '../../utils/context'
import './style.scss'

export default () => {
    const context = useContext(Context)

    const handleChangeItemsPerPage = (event) => {
        if(event.target.value != '') {
            context.handleItemsByPageChange(event.target.value)
            context.handlePageNumberChange(1)
        }
    }

    const handlePrevPage = () => {
        let actualPage = context.pageState
        context.handlePageNumberChange(actualPage - 1)
    }

    const handleNextPage = () => {
        let actualPage = context.pageState
        context.handlePageNumberChange(actualPage + 1)
    }

    const lastPage = () => {
        let actualPage = context.pageState
        let numPages = Math.ceil(context.membersState.length / context.numItemsState)
        return actualPage == numPages
    }

    return(
        <div className='paginator'>
            <button disabled={context.pageState == 1} onClick={handlePrevPage}>Prev Page</button>
            <div>
                <span>Items per page: </span>
                <input type='number' min='4' value={context.numItemsState} onChange={event => handleChangeItemsPerPage(event)} />
            </div>
            <button disabled={lastPage()} onClick={handleNextPage}>Next Page</button>
        </div>
    )
}