import axios from 'axios'

export const get = (url, headers) => (
    axios.get(url, { headers: headers }).then(response => response)
    .catch(error => {
        console.error(`Error: ${error}`)
        return {
            'status': 'ERROR'
        }
    })
)