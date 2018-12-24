/* @flow */

import Loadable from "react-loadable";

import { LoadingStatus } from "./loadingStatus.component";

export const AsyncZulu = Loadable({
    loader: () => import("./zulu.component"),
    loading: LoadingStatus
});
