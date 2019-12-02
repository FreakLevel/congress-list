export const initialState = {
    textFilter: '',
    fieldFilter: 'all'
}

export const FilterReducer = (state = initialState, action) => {
    switch(action.action) {
        case 'CHANGE_TEXT_FILTER':
            return {...state, textFilter: action.payload}
        case 'CHANGE_FIELD_FILTER':
            return {...state, fieldFilter: action.payload}
        default:
            return state
    }
}