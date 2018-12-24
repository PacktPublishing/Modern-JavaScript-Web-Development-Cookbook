/* @flow */

import Loadable from "react-loadable";

import { LoadingStatus } from "./loadingStatus.component";

export const AsyncAlpha = Loadable({
    loader: () => import("./alpha.component"),
    loading: LoadingStatus
});
