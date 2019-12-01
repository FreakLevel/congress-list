import React, { useReducer } from 'react'
import Context from './context'
import Routes from '../router/routes'
import * as ACTIONS from '../store/actions/actions'
import * as CongressReducer from '../store/reducers/congress_reducer'
import * as MembersReducer from '../store/reducers/members_reducer'
import * as ItemsPaginatorReducer from '../store/reducers/items_paginator_reducer'

export default () => {
    const [
        stateCongressReducer,
        dispatchCongressReducer
    ] = useReducer(
            CongressReducer.CongressReducer,
            CongressReducer.initialState
        )

    const handleCongressInitial = () => {
        dispatchCongressReducer(ACTIONS.congress_initial())
    }

    const handleCongressChange = (congress) => {
        dispatchCongressReducer(ACTIONS.congress_change(congress))
    }

    const [
        stateMembersReducer,
        dispatchMembersReducer
    ] = useReducer(
            MembersReducer.MembersReducer,
            MembersReducer.initialState
        )

    const handleMembersInitial = () => {
        dispatchMembersReducer(ACTIONS.members_initial())
    }

    const handleMembersChange = (members) => {
        dispatchMembersReducer(ACTIONS.members_change(members))
    }

    const [
        stateItemsPaginatorReducer,
        dispatchItemsPaginatorReducer
    ] = useReducer(
        ItemsPaginatorReducer.ItemsPaginatorReducer,
        ItemsPaginatorReducer.initialState
        )

    const handleItemsPaginatorInitial = () => {
        dispatchItemsPaginatorReducer(ACTIONS.members_initial())
    }

    const handleItemsByPageChange = (numItems) => {
        dispatchItemsPaginatorReducer(ACTIONS.itemsByPage_change({
            action: 'CHANGE_NUM_ITEMS',
            value: numItems
        }))
    }

    const handlePageNumberChange = (pageNumber) => {
        dispatchItemsPaginatorReducer(ACTIONS.pageNumber_change({
            action: 'CHANGE_PAGE',
            value: pageNumber
        }))
    }

    return(
        <Context.Provider
            value={{
                congressState: stateCongressReducer.congress,
                chamberState: stateCongressReducer.chamber,
                handleCongressInitial: () => handleCongressInitial(),
                handleCongressChange: (event) => handleCongressChange(event),
                membersState: stateMembersReducer.members,
                handleMembersInitial: () => handleMembersInitial(),
                handleMembersChange: (event) => handleMembersChange(event),
                numItemsState: stateItemsPaginatorReducer.numItems,
                pageState: stateItemsPaginatorReducer.page,
                handleItemsPaginatorInitial: () => handleItemsPaginatorInitial(),
                handleItemsByPageChange: (event) => handleItemsByPageChange(event),
                handlePageNumberChange: (event) => handlePageNumberChange(event)
            }}
        >
            <Routes />
        </Context.Provider>
    )
}