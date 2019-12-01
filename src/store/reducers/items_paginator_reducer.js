export const initialState = {
    numItems: 7,
    page: 1
}

export const ItemsPaginatorReducer = (state = initialState, action) => {
    switch(action.action){
        case 'CHANGE_NUM_ITEMS':
            return {...state, numItems: action.payload}
        case 'CHANGE_PAGE':
            return {...state, page: action.payload}
        default:
            return state
    }
}