import React, { useState } from 'react'
import './style.scss'
import ContextState from '../../utils/context_config'

export default (props) => {
    return(
        <div className='container'>
            <ContextState />
        </div>
    )
}