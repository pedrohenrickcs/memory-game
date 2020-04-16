import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';

export default function () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/" component={Game} />
            </Switch>
        </BrowserRouter>
    )
}