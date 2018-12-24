/* @flow */

import * as React from "react";
import PropTypes from "prop-types";

import "../general.css";
import "./expandableCard.css";

export class ExpandableCard extends React.PureComponent<
    {
        children: React.ChildrenArray<React.ChildrenArray<React.Node>>,
        title: string
    },
    { open: boolean }
> {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element).isRequired,
        title: PropTypes.string.isRequired
    };

    state = {
        open: false
    };

    toggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        if (this.state.open) {
            return (
                <div className="bordered">
                    {this.props.title}
                    <div className="toggle" onClick={this.toggle}>
                        &#x25B3;
                    </div>
                    <div>{this.props.children}</div>
                </div>
            );
        } else {
            return (
                <div className="bordered">
                    {this.props.title}
                    <div className="toggle" onClick={this.toggle}>
                        &#x25BD;
                    </div>
                </div>
            );
        }
    }
}
