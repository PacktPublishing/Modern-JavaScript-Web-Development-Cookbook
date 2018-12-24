/* @flow */

import { connect } from "react-redux";

import { Counter } from "./counter.component";

const getProps = state => ({ count: state.count });

export const ConnectedCounter = connect(getProps)(Counter);
