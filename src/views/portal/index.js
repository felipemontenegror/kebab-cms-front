import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../../components/Layout/index'

import Home from './home'
import About from './about'


export default (props) =>{
    return(
        <Layout> 
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home} />
            <Route exact basename={props.match.path} path={props.match.path + '/sobre'} component={About} /> 
        </Layout>
    )
}