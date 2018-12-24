/* @flow */

import Loadable from "react-loadable";

import { LoadingStatus } from "./loadingStatus.component";

export const AsyncCharlie = Loadable({
    loader: () => import("./charlie.component"),
    loading: LoadingStatus
});
