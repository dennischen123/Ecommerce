import React from 'react';
import Header from './pages/Header'
import About from './pages/About'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuContainer from './pages/MenuContainer';
import CartContainer from './pages/CartContainer';

export default function Router() {
    return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route component={CartContainer} path="/cart"/>
                    <Route component={About} path="/about"/>
                    <Route component={MenuContainer} path="/"/>
                </Switch>
            </BrowserRouter>
    )
}