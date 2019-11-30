import React from 'react'
import { Router, Route, Switch } from 'react-router'
import history from './history'

import List from '../components/list'
import Detail from '../components/detail'

export default Routes = () => {

    return(
        <div>
            <Router history={history} >
                <Switch>
                    <Route exact path='/' render={ (routerProps) => <List {...this.props} {...routerProps} /> } />
                    <Route exact path='/member/:id' render={ (routerProps) => <Detail {...this.props} {...routerProps} /> } />
                </Switch>
            </Router>
        </div>
    )
}