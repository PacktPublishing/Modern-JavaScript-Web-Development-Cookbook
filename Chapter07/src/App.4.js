/* @flow */

import React, { Component } from "react";
import MediaQuery from "react-responsive";

const XS = 576; // phone
const SM = 768; // tablet
const MD = 992; // desktop
const LG = 1200; // large desktop

class App extends Component<{}> {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={MD + 1}>
                    <div>Device: desktop or laptop</div>

                    <MediaQuery maxWidth={XS}>
                        <div>Current Size: small phone </div>
                    </MediaQuery>

                    <MediaQuery minWidth={XS + 1} maxWidth={SM}>
                        <div>Current Size: normal phone</div>
                    </MediaQuery>

                    <MediaQuery minWidth={SM + 1} maxWidth={MD}>
                        <div>Current Size: tablet</div>
                    </MediaQuery>

                    <MediaQuery minWidth={MD + 1} maxWidth={LG}>
                        <div>Current Size: normal desktop</div>
                    </MediaQuery>

                    <MediaQuery minWidth={LG + 1}>
                        <div>Current Size: large desktop</div>
                    </MediaQuery>
                </MediaQuery>

                <MediaQuery maxDeviceWidth={MD}>
                    <div>Device: tablet or phone</div>
                    <MediaQuery orientation="portrait">
                        <div>Orientation: portrait</div>
                    </MediaQuery>
                    <MediaQuery orientation="landscape">
                        <div>Orientation: landscape</div>
                    </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
