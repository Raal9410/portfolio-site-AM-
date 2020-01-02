import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';
import NotFound from '../components/NotFound';
import Header from '../components/Header';



const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio/' component={Portfolio} />
        <Route path='/portfolio/:id' component={PortfolioItem} />
        <Route path='/contact' component={Contact}/>
        <Route component={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;