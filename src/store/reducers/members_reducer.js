export const initialState = {
    members: []
}

export const MembersReducer = (state = initialState, action) => (
    {
        ...state,
        members: action.payload
    }
)