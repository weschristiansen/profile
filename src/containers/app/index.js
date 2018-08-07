import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Home from '../home';
import About from '../about';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/profile">Home</Link>{' '}
                    <Link to="/about-us">About</Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/profile" component={Home} />
                        <Route exact path="/about-us" component={About} />
                        <Redirect to="/profile" />
                    </Switch>
                </main>
            </div>
        );
    }
}
