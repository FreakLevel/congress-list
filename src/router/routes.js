import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import List from '../components/list'
import Detail from '../components/detail'

export default (props) => {

    return(
        <Router history={history} >
            <Switch>
                <Route exact path='/' render={ (routerProps) => <List {...props} {...routerProps} /> } />
                <Route exact path='/member/:id' render={ (routerProps) => <Detail {...props} {...routerProps} /> } />
            </Switch>
        </Router>
    )
}