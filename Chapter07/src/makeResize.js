/* @flow */

import React from "react";

const getWindowSize = () => ({
    resized_w_h: window.innerWidth + "x" + window.innerHeight
});

export const makeResize = Comp => {
    // eslint-disable-next-line react/display-name
    return class extends React.Component {
        state = getWindowSize();

        componentDidMount() {
            window.addEventListener("resize", this.componentIsResizing);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.componentIsResizing);
        }

        componentIsResizing = () => {
            this.setState(getWindowSize());
        };

        render() {
            return <Comp {...this.props} {...this.state} />;
        }
    };
};
