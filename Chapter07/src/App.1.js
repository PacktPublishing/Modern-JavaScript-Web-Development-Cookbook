/* @flow */

import React, { Component } from "react";

class App extends Component<{}> {
    render() {
        const cl = "border border-dark p-2 bg-warning ";

        return (
            <div className="container mw-100">
                <div className="row border">
                    <div className={cl + "col-sm-2 col-md-6"}>2/6</div>
                    <div className={cl + "col-sm-4"}>4</div>
                    <div className={cl + "col-sm-1"}>1</div>
                    <div className={cl + "col-sm-1"}>1</div>
                    <div className={cl + "col-sm-1"}>1</div>
                    <div className={cl + "col-sm-1 col-md-5"}>1/5</div>
                    <div className={cl + "col-sm-2 "}>2</div>
                    <div className={cl + "col-sm-7 col-md-3"}>7/3</div>
                    <div className={cl + "col-sm-4 "}>4</div>
                    <div className={cl + "col-sm-1 col-md-3"}>1/3</div>
                </div>
            </div>
        );
    }
}

export default App;
