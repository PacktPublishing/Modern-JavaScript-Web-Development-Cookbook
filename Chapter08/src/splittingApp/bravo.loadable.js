/* @flow */

import Loadable from "react-loadable";

import { LoadingStatus } from "./loadingStatus.component";

export const AsyncBravo = Loadable({
    loader: () => import("./bravo.component"),
    loading: LoadingStatus
});
