/* @flow */

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import {
    AsyncAlpha,
    AsyncBravo,
    AsyncCharlie,
    AsyncZulu,
    AsyncHelp
} from "./splittingApp";

const Home = () => <h1>Home Sweet Home</h1>;
const Error404 = () => <h1>404 Error!</h1>;

class App extends Component<{}> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <nav>
                            <Link to="/">Home</Link>&nbsp;
                            <Link to="/alpha">
                                <span
                                    onMouseOver={() =>
                                        AsyncAlpha.preload()
                                    }
                                >
                                    Alpha...
                                </span>
                            </Link>&nbsp;
                            <Link to="/bravo">Bravo...</Link>&nbsp;
                            <Link to="/charlie">Charlie...</Link>&nbsp;
                            <Link to="/wrong">...Wrong...</Link>&nbsp;
                            <Link to="/zulu">Zulu</Link>&nbsp;
                            <Link to="/help">Help</Link>&nbsp;
                        </nav>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/help" component={AsyncHelp} />
                        <Route path="/alpha" component={AsyncAlpha} />
                        <Route path="/bravo" component={AsyncBravo} />
                        <Route path="/charlie" component={AsyncCharlie} />
                        <Route path="/zulu" component={AsyncZulu} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
