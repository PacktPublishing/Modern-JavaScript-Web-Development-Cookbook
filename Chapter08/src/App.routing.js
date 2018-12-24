/* @flow */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { store } from "./routingApp/store";

const Home = () => <h1>Home Sweet Home</h1>;
const Help = () => <h1>Help! SOS!</h1>;
const Alpha = () => <h1>Alpha</h1>;
const Bravo = () => <h1>Bravo</h1>;
const Charlie = () => <h1>Charlie</h1>;
const Zulu = () => <h1>Zulu</h1>;
const Error404 = () => <h1>404 Error!</h1>;

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <header>
                            <nav>
                                <Link to="/">Home</Link>&nbsp;
                                <Link to="/about/routing">
                                    About Routing
                                </Link>&nbsp;
                                <Link to="/alpha">Alpha...</Link>&nbsp;
                                <Link to="/bravo">Bravo...</Link>&nbsp;
                                <Link to="/charlie">Charlie...</Link>&nbsp;
                                <Link to="/wrong">...Wrong...</Link>&nbsp;
                                <Link to="/zulu">Zulu</Link>&nbsp;
                                <Link to="/help">Help</Link>&nbsp;
                            </nav>
                        </header>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/help" component={Help} />
                            <Route
                                path="/about/:something"
                                render={props => (
                                    <div>
                                        <h1>About...</h1>
                                        {props.match.params.something}
                                    </div>
                                )}
                            />
                            <Route path="/alpha" component={Alpha} />
                            <Route path="/bravo" component={Bravo} />
                            <Route path="/charlie" component={Charlie} />
                            <Route path="/zulu" component={Zulu} />
                            <Route component={Error404} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
