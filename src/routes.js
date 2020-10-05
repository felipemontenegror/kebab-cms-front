import React from 'react';
import { Route, Router, Switch } from 'react-router-dom' //roteamento aninhado de rotas declaradas
import history from './config/history'
import {
    Home,

    Dash as AdminDash
} from './views'



const Routers = () => (
    <Router history={history}> 
        <Switch> 
            <Route exact component={Home} path="/"/>
            <Route component={AdminDash} path="/admin"/>
        </Switch> 
    </Router> //rota para todos ('/') acessarem a home -- rota apenas para admin (/admin) -- o exact serve para nao comparar com a fota anterior 

)

export default Routers;
