/* @flow */

import React, { Component } from "react";

class App extends Component<{}> {
    render() {
        const cl = "border border-dark p-2 bg-warning ";
        const ch = "border border-dark p-2 bg-dark text-white ";

        return (
            <div className="container mw-100">
                <div className="row border">
                    <div className={cl + "col-sm-2 col-md-6"}>2/6</div>
                    <div className={ch + "d-none d-sm-block col-sm-4"}>
                        0/4
                    </div>
                    <div className={cl + "col-sm-2"}>2</div>
                    <div className={cl + "col-sm-2"}>2</div>
                    <div className={cl + "col-sm-1 col-md-5"}>1/5</div>
                    <div className={cl + "col-sm-3 "}>3</div>
                    <div className={ch + "col-sm-7 "}>
                        <div>TOP</div>
                        <div className="d-none d-sm-block">(MIDDLE)</div>
                        <div>BOTTOM</div>
                    </div>
                    <div className={cl + "col-sm-4 "}>4</div>
                </div>
            </div>
        );
    }
}

export default App;
