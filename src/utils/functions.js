export const rangePaginator = (page, items = 7) => {
    let start = (page - 1) * items
    let end = start + parseInt(items)
    return Array(end - start).fill().map((_, index) => start + index)
} 