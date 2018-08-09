import { Link, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import About from '../about';
import Home from '../home';

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
