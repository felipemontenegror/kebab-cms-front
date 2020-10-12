import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../../components/Layout/index'

import Home from './home'
import About from './about'
import Product from './product'
import Service from './service'
import Contact from './contact'



export default (props) =>{
    return(
        <Layout> 
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home} />
            <Route exact basename={props.match.path} path={props.match.path + '/sobre'} component={About} />
            <Route exact basename={props.match.path} path={props.match.path + '/produtos'} component={Product} />
            <Route exact basename={props.match.path} path={props.match.path + '/servicos'} component={Service} />
            <Route exact basename={props.match.path} path={props.match.path + '/contato'} component={Contact} /> 
        </Layout>
    )
}