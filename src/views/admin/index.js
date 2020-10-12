import React from 'react'
import { Route } from 'react-router-dom'

import Dash from './dash'


export default (props) =>{
    return(
        <>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Dash} />
            <Route exact basename={props.match.path} path={props.match.path + '/Services'} component={() => <h1>Services</h1>} />
        </>
    )
}