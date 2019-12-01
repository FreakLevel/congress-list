import React, { useContext, useEffect, useState } from 'react'
import Context from '../../utils/context'

export default () => {
    const context = useContext(Context)

    return(
        <div>
            <h1>Paginator</h1>
        </div>
    )
}