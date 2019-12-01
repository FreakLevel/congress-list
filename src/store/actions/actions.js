export const members_initial = () => ({})

export const members_change = (members) => ({
    payload: members
})

export const congress_initial = () => ({})

export const congress_change = (congress) => ({
    payload: congress
})

export const itemsPaginator_initial = () => ({})

export const itemsByPage_change = (data) => ({
    action: data.action,
    payload: data.value
})

export const pageNumber_change = (data) => ({
    action: data.action,
    payload: data.value
})