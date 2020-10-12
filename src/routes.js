import React from 'react';
import { Route, Router, Switch } from 'react-router-dom' //roteamento aninhado de rotas declaradas

import Portal from './views/portal'
import Admin from './views/admin'

import history from './config/history'

const Routers = () => (
    <Router history={history}> 
        <Switch> 
            <Route component={Admin} path="/admin"/>
            <Route component={Portal} path="/"/>
        </Switch> 
    </Router> // sub rota para todos ('/') acessarem a home -- rota apenas para admin (/admin) -- o exact serve para nao comparar com a fota anterior 

)

export default Routers;
