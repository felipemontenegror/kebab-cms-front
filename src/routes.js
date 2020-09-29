import React from 'react';
import { Route, Router, Switch } from 'react-router-dom' //roteamento aninhado de rotas declaradas
import {
    Home,

    Dash as AdminDash
} from './views'


import history from './config/history'

const Routers = () => (
    <Router history={history}> 
        <Switch> 
            <Route component={Home} path="/"/>
            <Route exact component={AdminDash} path="/admin"/>
        </Switch> 
    </Router> //rota para todos ('/') acessarem a home -- rota apenas para admin (/admin) -- o exact serve para nao comparar com a fota anterior 

)

export default Routers;
