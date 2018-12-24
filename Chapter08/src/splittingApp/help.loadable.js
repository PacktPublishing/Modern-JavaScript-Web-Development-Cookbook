/* @flow */

import Loadable from "react-loadable";

import { LoadingStatus } from "./loadingStatus.component";

export const AsyncHelp = Loadable({
    loader: () => import("./help.component"),
    loading: LoadingStatus
});
